import Head from "next/head";
import { renderMetaTags, useQuerySubscription } from "react-datocms";
import Layout from "../components/layout";
import Widgets from "../components/widgets";
import { request } from "../lib/datocms";
import {  pageFragment, layoutFragment } from "../lib/fragments";

export async function getStaticProps({ preview, locale }) {
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

export default function Index({ subscription }) {
  const {
    data: { settings },
  } = useQuerySubscription(subscription);
  const metaTags = settings.homePage.seo
  return (
    <>
      <Layout settings={ settings } preview={subscription.preview}>
        <Head>{renderMetaTags(metaTags)}</Head>
        <Widgets widgets={settings.homePage.widgets} preview={subscription.preview} />
      </Layout>
    </>
  );
}
