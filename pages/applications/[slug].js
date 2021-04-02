import Head from "next/head";
import { renderMetaTags, useQuerySubscription } from "react-datocms";
import Layout from "../../components/layout";
import ApplicationShow from "../../components/application-show";
import { request } from "../../lib/datocms";
import { layoutFragment, metaTagsFragment, widgets } from "../../lib/fragments";
import Widgets from "../../components/widgets"
export async function getStaticPaths() {
  const data = await request({ query: `{ allApplications(first: 100) { slug } }` });
  const paths = data.allApplications.flatMap((p) => ([
    { 
      params: { slug: p.slug }, 
      locale: 'en-US' 
    },
    {
      params: { slug: p.slug }
    }
  ]))
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params, locale, preview = false }) {
  const graphqlRequest = {
    query: `
      query ApplicationBySlug($slug: String, $locale: SiteLocale) {
        settings: setting {
          ...layoutFragment
        }
        application(locale: $locale, filter: {slug: {eq: $slug}}) {
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
         
          ${widgets}
         
        }
      }
      ${metaTagsFragment}
      ${layoutFragment}
    `,
    preview,
    variables: {
      slug: params.slug,
      locale: locale === 'en-US' ? 'en_US' : 'en'
    },
  };

  return {
    props: {
      preview,
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
    <Layout settings={settings} preview={preview} transparentNavigation={false}>
      <Head>{renderMetaTags(metaTags)}</Head>
      <ApplicationShow application={application} />
      <Widgets widgets={application.widgets} preview={preview} />
    </Layout>
  );
}
