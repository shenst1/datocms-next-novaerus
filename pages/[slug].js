import Head from "next/head";
import { renderMetaTags, useQuerySubscription } from "react-datocms";
import Layout from "../components/layout";
import Widgets from "../components/widgets";
import { request } from "../lib/datocms";
import { pageFragment, layoutFragment} from "../lib/fragments";

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
      <Widgets widgets={page.widgets} preview={preview} />
    </Layout>
  );
}
