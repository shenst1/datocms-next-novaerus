import Head from "next/head";
import { renderMetaTags, useQuerySubscription } from "react-datocms";
import Container from "../../components/container";
import Layout from "../../components/layout";
import ResearchArticleShow from "../../components/research-article-show"
import { request } from "../../lib/datocms";
import { layoutFragment } from "../../lib/fragments";

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_CMSIFY_HOST}/api/research_articles.json`)
  const {researchArticles} = await res.json()
  return {
    paths: researchArticles.map(article => `/research/${article.id}`),
    fallback: false,
  };
}

export async function getStaticProps({ params, preview = false }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_CMSIFY_HOST}/api/research_articles/${params.id}.json`)
  const researchArticle = await res.json()
  const graphqlRequest = {
    query: `
      query Settings {
        settings: setting {
          ...layoutFragment
        }
      }
      ${layoutFragment}
    `,
    preview
  };

  return {
    props: {
      researchArticle,
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

export default function Application({ subscription, preview, researchArticle }) {
  const {
    data: { settings },
  } = useQuerySubscription(subscription);

  return (
    <Layout settings={settings} preview={preview}  transparentNavigation={false}>
      <Container>
        <ResearchArticleShow researchArticle={researchArticle} />
      </Container>
    </Layout>
  );
}
