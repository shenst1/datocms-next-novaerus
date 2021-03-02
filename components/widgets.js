import WidgetTextImage from "./widget-text-image";
import WidgetOverlaidImage from "./widget-overlaid-image";
import WidgetProductsPreview from "./widget-products-preview";
import WidgetHeroCTA from "./widget-hero-cta";
import WidgetHeader from "./widget-header";
import WidgetApplicationGrid from "./widget-application-grid";
import WidgetProductDetails from "./widget-product-details";
import WidgetTwoColumnVideoCta from "./widget-two-column-video-cta";
import WidgetHero from "./widget-hero";
import WidgetVideoTabs from "./widget-video-tabs";
import WidgetFactsStats from "./widget-facts-stats";
import WidgetSection from "./widget-section";
import WidgetFindRepresentative from "./widget-find-representative";
import WidgetHeroVideo from "./widget-hero-video";
import WidgetContactForm from "./widget-contact-form";
import WidgetHeroSlideshow from "./widget-hero-slideshow";
import WidgetTestimonialCarousel from "./widget-testimonial-carousel";
import WidgetContactLandingForm from "./widget-contact-landing-form";
import WidgetSolutionsGrid from "./widget-solutions-grid";

export default function Widgets({widgets}) {
  function renderWidget(widget) {
    switch (widget.__typename) {
      case "WidgetSolutionsGridRecord":
        return <WidgetSolutionsGrid widget={widget} />
        break;
      case "WidgetContactLandingFormRecord":
        return <WidgetContactLandingForm widget={widget} />
        break;
      case "WidgetTestimonialCarouselRecord":
        return <WidgetTestimonialCarousel widget={widget} />
        break;
      case "WidgetHeroSlideshowRecord":
        return <WidgetHeroSlideshow widget={widget} />
        break;
      case "WidgetContactFormRecord":
        return <WidgetContactForm widget={widget} />
        break;
      case "WidgetHeroVideoRecord":
        return <WidgetHeroVideo widget={widget} />
        break;
      case "WidgetFindARepresentativeRecord":
        return <WidgetFindRepresentative widget={widget} />
        break;
      case "WidgetSectionRecord":
        return <WidgetSection widget={widget} />
        break;
      case "WidgetFactsStatsSectionRecord":
        return <WidgetFactsStats widget={widget} />
        break;
      case "WidgetHeroRecord":
        return <WidgetHero widget={widget} />
        break;
      case "WidgetVideoTabsSectionRecord":
        return <WidgetVideoTabs widget={widget} />
        break;
      case "WidgetTwoColumnVideoCtaRecord":
        return <WidgetTwoColumnVideoCta widget={widget} />
        break;
      case "WidgetProductDetailGridRecord":
        return <WidgetProductDetails widget={widget} />
        break;
      case "WidgetTextImageRecord":
        return <WidgetTextImage widget={widget} />
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
      case "WidgetTextHeaderRecord":
        return <WidgetHeader widget={widget} />
        break;
      case "WidgetApplicationGridRecord":
        return <WidgetApplicationGrid widget={widget} />
        break;
    }
  }
  return (
    <>
      { widgets.map((widget) => renderWidget(widget)) }
    </>
  )
}