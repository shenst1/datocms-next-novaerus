import Head from "next/head";
import { renderMetaTags, useQuerySubscription } from "react-datocms";
import Layout from "../components/layout";
import Widgets from "../components/widgets";
import { request } from "../lib/datocms";
import { pageFragment, responsiveImageFragment, footerFragment} from "../lib/fragments";

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
          footer {
            ...footerFragment
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
          ...pageFragment
        }
      }
      ${pageFragment}
      ${footerFragment}
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
    <Layout settings={settings} preview={preview} transparentNavigation={page.transparentNavigation}>
      <Head>{renderMetaTags(metaTags)}</Head>
      <Widgets widgets={page.widgets} />
    </Layout>
  );
}
