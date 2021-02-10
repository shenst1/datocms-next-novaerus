import Head from "next/head";
import { renderMetaTags, useQuerySubscription } from "react-datocms";
import Container from "../components/container";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import WidgetImageRight from "../components/widget-image-right";
import WidgetOverlaidImage from "../components/widget-overlaid-image";
import WidgetProductsPreview from "../components/widget-products-preview";
import WidgetHeroCTA from "../components/widget-hero-cta";
import Layout from "../components/layout";
import HeroVideo from "../components/hero-video";
import MoreStories from "../components/more-stories";
import { request } from "../lib/datocms";
import { metaTagsFragment, responsiveImageFragment, pageFragment, footerFragment } from "../lib/fragments";

export async function getStaticProps({ preview }) {
  const graphqlRequest = {
    query: `
      {
        settings: setting {
          companyLogo {
            url
          }
          footer {
            ...footerFragment
          }
          homePage {
            ...pageFragment
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
      ${footerFragment}
      ${pageFragment}
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
  console.log("my settings", settings.headScripts);

  function renderWidget(widget) {
    console.log(widget.__typename)
    switch (widget.__typename) {
      case "WidgetFullWidthImageTextRecord":
        return <WidgetImageRight widget={widget} />
        break;
      case "WidgetOverlaidImageRecord":
        return <WidgetOverlaidImage widget={widget} />
        break;
      case "WidgetProductsPreviewRecord":
        return <WidgetProductsPreview widget={widget} />
        break;
      case "WidgetHeroCtaRecord":
        return <WidgetHeroCTA widget={widget} />
        break;
    }
  }
  return (
    <>
      <Layout settings={ settings } preview={subscription.preview}>
        {
          settings.homePage.widgets.map((widget) => renderWidget(widget))
        }
      </Layout>
    </>
  );
}
