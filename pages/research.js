import Head from "next/head";
import { renderMetaTags, useQuerySubscription } from "react-datocms";
import Layout from "../components/layout";
import { request } from "../lib/datocms";
import {  layoutFragment, responsiveImageFragment } from "../lib/fragments";
import WidgetHeroCTA from "../components/widget-hero-cta";
import ResearchFilters from "../components/research-filters"
export async function getStaticProps({ preview }) {
  const resResearchLink = await fetch(`${process.env.NEXT_PUBLIC_CMSIFY_HOST}/api/collections/link-types.json`);
  const researchLinkCollection = await resResearchLink.json();
  const resLabStudiesCollecton = await fetch(`${process.env.NEXT_PUBLIC_CMSIFY_HOST}/api/collections/lab-studies.json`);
  const labStudiesCollecton = await resLabStudiesCollecton.json();
  const resClinicalTrialsCollection = await fetch(`${process.env.NEXT_PUBLIC_CMSIFY_HOST}/api/collections/clinical-trials.json`);
  const clinicalTrialsCollection = await resClinicalTrialsCollection.json();
  const resCaseStudiesCollection = await fetch(`${process.env.NEXT_PUBLIC_CMSIFY_HOST}/api/collections/case-studies.json`);
  const caseStudiesCollection = await resCaseStudiesCollection.json();
  const resMetaInfo = await fetch(`${process.env.NEXT_PUBLIC_CMSIFY_HOST}/api/meta-info`);
  const metaInfo = await resMetaInfo.json();
  const graphqlRequest = {
    query: `
      {
        research {
          heroWidget {
            __typename
            title
            leadText
            body
            alignment
            theme
            button {
              label
              link {
                slug
              }
            }
            backgroundImage {
              responsiveImage(imgixParams: { w: 2560  }) {
                ...responsiveImageFragment
              }
            }
          }
          testResultsBody
        }
        settings: setting {
          ...layoutFragment
        }
      }
      ${layoutFragment}
    `,
    preview,
  };

  return {
    props: {
      researchLinkCollection,
      metaInfo,
      researchArticleCollections: [labStudiesCollecton, clinicalTrialsCollection, caseStudiesCollection],
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

export default function Research({ subscription, researchLinkCollection, researchArticleCollections, metaInfo }) {
  const {
    data: { settings, research },
  } = useQuerySubscription(subscription);
  return (
    <>
      <Layout settings={ settings } preview={subscription.preview} transparentNavigation={false}>
        {research.heroWidget && <WidgetHeroCTA widget={research.heroWidget} /> }
        <ResearchFilters metaInfo={metaInfo} research={research} researchLinkCollection={researchLinkCollection} researchArticleCollections={researchArticleCollections} />
      </Layout>
    </>
  );
}
