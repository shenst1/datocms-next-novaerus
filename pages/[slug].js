import Head from "next/head";
import { renderMetaTags, useQuerySubscription } from "react-datocms";
import Container from "../components/container";
import Header from "../components/header";
import Layout from "../components/layout";
import { request } from "../lib/datocms";
import { metaTagsFragment, responsiveImageFragment } from "../lib/fragments";

export async function getStaticPaths() {
  const data = await request({ query: `{ allPages { slug } }` });

  return {
    paths: data.allPages.map((page) => `/${page.slug}`),
    fallback: false,
  };
}

export async function getStaticProps({ params, preview = false }) {
  const graphqlRequest = {
    query: `
      query PageBySlug($slug: String) {
        settings: setting {
          companyLogo {
            url
          }
          mainNavigation {
            label
            externalLink
            link {
              slug
              id
            }
            children {
              label
              externalLink
              link {
                slug
                id
              }
            }
          }
        }
        page(filter: {slug: {eq: $slug}}) {
          title
          slug
          seo: _seoMetaTags {
            ...metaTagsFragment
          }
        }
      }
      ${metaTagsFragment}
    `,
    preview,
    variables: {
      slug: params.slug,
    },
  };

  return {
    props: {
      subscription: preview
        ? {
            ...graphqlRequest,
            initialData: await request(graphqlRequest),
            token: process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN,
          }
        : {
            enabled: false,
            initialData: await request(graphqlRequest),
          },
    },
  };
}

export default function Page({ subscription, preview }) {
  const {
    data: { settings, page },
  } = useQuerySubscription(subscription);

  const metaTags = page.seo

  return (
    <Layout settings={settings} preview={preview}>
      <Head>{renderMetaTags(metaTags)}</Head>
      <Container>
        <Header title={page.title} />
        <article>
           
        </article>
       
       
      </Container>
    </Layout>
  );
}
