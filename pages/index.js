import Head from "next/head";
import { renderMetaTags, useQuerySubscription } from "react-datocms";
import Layout from "../components/layout";
import Widgets from "../components/widgets";
import { request } from "../lib/datocms";
import {  pageFragment, layoutFragment } from "../lib/fragments";
import {SiteClient} from "datocms-client"

export async function getStaticProps({ preview, locale }) {
  const client = new SiteClient(process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN);
  const items = await client.itemTypes.all()
  const itemTypes =  items.reduce((acc, item) => {
    acc[item.apiKey] = item.id
    return acc
  }, {})

  const graphqlRequest = {
    query: `
      query HomePage($locale: SiteLocale) {
        settings: setting(locale: $locale) {
          homePage {
            ...pageFragment
          }
          ...layoutFragment
        }
      }
      ${layoutFragment}
      ${pageFragment}
    `,
    preview,
    variables: {
      locale: locale === 'en-US' ? 'en_US' : 'en'
    },
  };

  return {
    props: {
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

export default function Index({subscription, subscription: {itemTypes}}) {
  const {
    data: { settings }
  } = useQuerySubscription(subscription);
  
  const metaTags = settings.homePage.seo
  return (
    <>
      <Layout settings={ settings } preview={subscription.preview}>
        <Head>{renderMetaTags(metaTags)}</Head>
        <Widgets itemTypes={itemTypes} widgets={settings.homePage.widgets} preview={subscription.preview} />
      </Layout>
    </>
  );
}
