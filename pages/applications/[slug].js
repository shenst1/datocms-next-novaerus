import Head from "next/head";
import { renderMetaTags, useQuerySubscription } from "react-datocms";
import Container from "../../components/container";
import Layout from "../../components/layout";
import ApplicationShow from "../../components/application-show";
import { request } from "../../lib/datocms";
import {  responsiveImageFragment, footerFragment, metaTagsFragment} from "../../lib/fragments";

export async function getStaticPaths() {
  const data = await request({ query: `{ allApplications { slug } }` });

  return {
    paths: data.allApplications.map((app) => `/applications/${app.slug}`),
    fallback: false,
  };
}

export async function getStaticProps({ params, preview = false }) {
  const graphqlRequest = {
    query: `
      query ApplicationBySlug($slug: String) {
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
        application(filter: {slug: {eq: $slug}}) {
          backgroundImage {
            responsiveImage(imgixParams: { w: 2560  }) {
              ...responsiveImageFragment
            }
          }
          title
          seo: _seoMetaTags {
            ...metaTagsFragment
          }
          header
          leadText
          solutionsHeader
          solutionsBody
          iconFacts {
            fact
          }
          solutionsCta {
            label
            link {
              slug
            }
          }
        }
      }
      ${responsiveImageFragment}
      ${metaTagsFragment}
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

export default function Application({ subscription, preview }) {
  const {
    data: { settings, application },
  } = useQuerySubscription(subscription);

  const metaTags = application.seo

  return (
    <Layout settings={settings} preview={preview}>
      <Head>{renderMetaTags(metaTags)}</Head>
      <Container>
        <ApplicationShow application={application} />
      </Container>
    </Layout>
  );
}
