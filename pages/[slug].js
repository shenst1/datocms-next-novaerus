import Head from "next/head";
import { renderMetaTags, useQuerySubscription } from "react-datocms";
import Layout from "../components/layout";
import Widgets from "../components/widgets";
import { request } from "../lib/datocms";
import { pageFragment, layoutFragment} from "../lib/fragments";
import {SiteClient} from "datocms-client"

export async function getStaticPaths() {
  const data = await request({ query: `{ allPages(first: 100) { slug } }` });
  const paths = data.allPages.flatMap(({slug}) => ([
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
      query PageBySlug($slug: String, $locale: SiteLocale) {
        settings: setting {
          ...layoutFragment
        }
        page(locale: $locale, filter: {slug: {eq: $slug}}) {
          ...pageFragment
        }
      }
      ${pageFragment}
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

export default function Page({ subscription, preview, subscription: { itemTypes } }) {
  const {
    data: { settings, page },
  } = useQuerySubscription(subscription);

  const metaTags = page.seo
  return (
    <Layout settings={settings} preview={preview} transparentNavigation={page.transparentNavigation}>
      <Head>{renderMetaTags(metaTags)}</Head>
      <Widgets itemTypes={itemTypes} widgets={page.widgets} preview={preview} />
    </Layout>
  );
}
