import Head from "next/head";
import { renderMetaTags, useQuerySubscription } from "react-datocms";
import Container from "../components/container";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import WidgetImageRight from "../components/widget-image-right";
import Layout from "../components/layout";
import HeroVideo from "../components/hero-video";
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
          devWidget {
            body
            title
            button {
              label
              externalLink
              link {
                slug
                id
              }
            }
            leadImage {
              responsiveImage(imgixParams: { w: 400  }) {
                ...responsiveImageFragment
              }
            }
            image {
              responsiveImage(imgixParams: { w: 1500 }) {
                ...responsiveImageFragment
              }
            }
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
      ${responsiveImageFragment}
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
  console.log("my settings", settings.headScripts)
  return (
    <>
      <Layout settings={ settings } preview={subscription.preview}>
        <WidgetImageRight widget={settings.devWidget} />
        <Container>
          <Intro />
         
        </Container>
      </Layout>
    </>
  );
}
