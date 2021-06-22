import Head from "next/head";
import { renderMetaTags, useQuerySubscription } from "react-datocms";
import Layout from "../../components/layout";
import ApplicationShow from "../../components/application-show";
import { request } from "../../lib/datocms";
import { layoutFragment, metaTagsFragment, widgets } from "../../lib/fragments";
import Widgets from "../../components/widgets"
import {SiteClient} from "datocms-client"

export async function getStaticPaths() {

  const data = await request({ query: `{ allApplications(first: 100) { slug } }` });
  const paths = data.allApplications.flatMap(({slug}) => ([
    { 
      params: { slug },
      locale: 'en-US'
    },
    {
      params: { slug }
    }
  ]))
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params, locale, preview = false }) {
  const client = new SiteClient(process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN);
  const items = await client.itemTypes.all()
  const itemTypes =  items.reduce((acc, item) => {
    acc[item.apiKey] = item.id
    return acc
  }, {})
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
            itemTypes,
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

export default function Application({ subscription, preview, subscription: {itemTypes} }) {
  const {
    data: { settings, application },
  } = useQuerySubscription(subscription);

  const metaTags = application.seo

  return (
    <Layout settings={settings} preview={preview} transparentNavigation={false}>
      <Head>{renderMetaTags(metaTags)}</Head>
      <ApplicationShow application={application} />
      <Widgets itemTypes={itemTypes} widgets={application.widgets} preview={preview} />
    </Layout>
  );
}
