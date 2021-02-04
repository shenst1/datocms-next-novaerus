import Head from "next/head";
import { renderMetaTags, useQuerySubscription } from "react-datocms";
import Container from "../components/container";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import MoreStories from "../components/more-stories";
import { request } from "../lib/datocms";
import { metaTagsFragment, responsiveImageFragment } from "../lib/fragments";

export async function getStaticProps({ preview }) {
  const graphqlRequest = {
    query: `
      {
        settings: setting {
          companyLogo {
            url
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
      }
    `,
    preview,
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

  return (
    <>
      <Layout settings={ settings } preview={subscription.preview}>
        <Container>
          <Intro />
        </Container>
      </Layout>
    </>
  );
}
