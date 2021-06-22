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
import DatocmsLink from "./datocms-link";
import WidgetImageText from "./widget-image-text";
import WidgetSixColumnGrid from "./widget-six-column-grid";
import WidgetTestimonialCardGrid from "./widget-testimonial-card-grid";
import WidgetIconModal from "./widget-icon-modal";

export default function Widgets({widgets, preview, itemTypes}) {
  function renderWidget(widget) {
    switch (widget.__typename) {
      case "WidgetIconModalSectionRecord":
        if (preview) {
          return (
            <>
              <WidgetIconModal widget={widget} />
              <DatocmsLink itemId={widget.id} modelId={itemTypes['widget_icon_modal_section']} friendlyName="Icon Modal Illustration" />
            </>
          )
        } else {
          return <WidgetIconModal widget={widget} />
        }
        
        break;
      case "WidgetTestimonialCardGridRecord":
        if (preview) {
          return (
            <>
              <WidgetTestimonialCardGrid widget={widget} />
              <DatocmsLink itemId={widget.id} modelId={itemTypes['widget_testimonial_card_grid']} friendlyName="Testimonial Card Grid" />
            </>
          )
        } else {
          return <WidgetTestimonialCardGrid widget={widget} />
        }
        
        break;
      case "WidgetSixColumnGridRecord":
        if (preview) {
          return (
            <>
              <WidgetSixColumnGrid widget={widget} />
              <DatocmsLink itemId={widget.id} modelId={itemTypes['widget_six_column_grid']} friendlyName="Six Column Grid" />
            </>
          )
        } else {
          return <WidgetSixColumnGrid widget={widget} />
        }
        
        break;
      case "WidgetImageTextRecord":
        if (preview) {
          return (
            <>
              <WidgetImageText widget={widget} />
              <DatocmsLink itemId={widget.id} modelId={itemTypes['widget_image_text']} friendlyName="Image Text" />
            </>
          )
        } else {
          return <WidgetImageText widget={widget} />
        }
        
        break;
      case "WidgetSolutionsGridRecord":
        if (preview) {
          return (
            <>
              <WidgetSolutionsGrid widget={widget} />
              <DatocmsLink itemId={widget.id} modelId={itemTypes['widget_solutions_grid']} friendlyName="Solutions Grid" />
            </>
          )
        } else {
          return <WidgetSolutionsGrid widget={widget} />
        }
        
        break;
      case "WidgetContactLandingFormRecord":
        if (preview) {
          return (
            <>
              <WidgetContactLandingForm widget={widget} />
              <DatocmsLink itemId={widget.id} modelId={itemTypes['widget_contact_landing_form']} friendlyName="Contact Landing Form" />
            </>
          )
        } else {
          return <WidgetContactLandingForm widget={widget} />
        }
        break;
      case "WidgetTestimonialCarouselRecord":
        if (preview) {
          return (
            <>
              <WidgetTestimonialCarousel widget={widget} />
              <DatocmsLink itemId={widget.id} modelId={itemTypes['widget_testimonial_carousel']} friendlyName="Testimonial Carousel" />
            </>
          )
        } else {
          return <WidgetTestimonialCarousel widget={widget} />
        }
        break;
      case "WidgetHeroSlideshowRecord":
        if (preview) {
          return (
            <>
              <WidgetHeroSlideshow widget={widget} />
              <DatocmsLink itemId={widget.id} modelId={itemTypes['widget_hero_slideshow']} friendlyName="Hero Slideshow" />
            </>
          )
        } else {
          return <WidgetHeroSlideshow widget={widget} />
        }
        break;
      case "WidgetContactFormRecord":
        if (preview) {
          return (
            <>
              <WidgetContactForm widget={widget} />
              <DatocmsLink itemId={widget.id} modelId={itemTypes['widget_contact_form']} friendlyName="Contact Form" />
            </>
          )
        } else {
          return <WidgetContactForm widget={widget} />
        }
        break;
      case "WidgetHeroVideoRecord":
        if (preview) {
          return (
            <>
              <WidgetHeroVideo widget={widget} />
              <DatocmsLink itemId={widget.id} modelId={itemTypes['widget_hero_video']} friendlyName="Hero Video" />
            </>
          )
        } else {
          return <WidgetHeroVideo widget={widget} />
        }
        break;
      case "WidgetFindARepresentativeRecord":
        if (preview) {
          return (
            <>
              <WidgetFindRepresentative widget={widget} />
              <DatocmsLink itemId={widget.id} modelId={itemTypes['widget_find_a_representative']} friendlyName="Find a Representative" />
            </>
          )
        } else {
          return <WidgetFindRepresentative widget={widget} />
        }
        break;
      case "WidgetSectionRecord":
        if (preview) {
          return (
            <>
              <WidgetSection widget={widget} />
              <DatocmsLink itemId={widget.id} modelId={itemTypes['widget_section']} friendlyName="Section" />
            </>
          )
        } else {
          return <WidgetSection widget={widget} />
        }
        break;
      case "WidgetFactsStatsSectionRecord":
        if (preview) {
          return (
            <>
              <WidgetFactsStats widget={widget} />
              <DatocmsLink itemId={widget.id} modelId={itemTypes['widget_facts_stats_section']} friendlyName="Facts &nbsp; Stats" />
            </>
          )
        } else {
          return <WidgetFactsStats widget={widget} />
        }
        break;
      case "WidgetHeroRecord":
        if (preview) {
          return (
            <>
              <WidgetHero widget={widget} />
              <DatocmsLink itemId={widget.id} modelId={itemTypes['widget_hero']} friendlyName="Hero" />
            </>
          )
        } else {
          return <WidgetHero widget={widget} />
        }
        break;
      case "WidgetVideoTabsSectionRecord":
        if (preview) {
          return (
            <>
              <WidgetVideoTabs widget={widget} />
              <DatocmsLink itemId={widget.id} modelId={itemTypes['widget_video_tabs_section']} friendlyName="Video Tabs" />
            </>
          )
        } else {
          return <WidgetVideoTabs widget={widget} />
        }
        break;
      case "WidgetTwoColumnVideoCtaRecord":
        if (preview) {
          return (
            <>
              <WidgetTwoColumnVideoCta widget={widget} />
              <DatocmsLink itemId={widget.id} modelId={itemTypes['widget_two_column_video_cta']} friendlyName="Two Column Video Ctas" />
            </>
          )
        } else {
          return <WidgetTwoColumnVideoCta widget={widget} />
        }
        break;
      case "WidgetProductDetailGridRecord":
        if (preview) {
          return (
            <>
              <WidgetProductDetails widget={widget} />
              <DatocmsLink itemId={widget.id} modelId={itemTypes['widget_product_detail_grid']} friendlyName="Product Detail Grid" />
            </>
          )
        } else {
          return <WidgetProductDetails widget={widget} />
        }
        break;
      case "WidgetTextImageRecord":
        if (preview) {
          return (
            <>
              <WidgetTextImage widget={widget} />
              <DatocmsLink itemId={widget.id} modelId={itemTypes['widget_text_image']} friendlyName="Text Image" />
            </>
          )
        } else {
          return <WidgetTextImage widget={widget} />
        }
        break;
      case "WidgetOverlaidImageRecord":
        if (preview) {
          return (
            <>
              <WidgetOverlaidImage widget={widget} />
              <DatocmsLink itemId={widget.id} modelId={itemTypes['widget_overlaid_image']} friendlyName="Overlaid Image" />
            </>
          )
        } else {
          return <WidgetOverlaidImage widget={widget} />
        }
        break;
      case "WidgetProductsPreviewRecord":
        if (preview) {
          return (
            <>
              <WidgetProductsPreview widget={widget} />
              <DatocmsLink itemId={widget.id} modelId={itemTypes['widget_products_preview']} friendlyName="Products Preview" />
            </>
          )
        } else {
          return <WidgetProductsPreview widget={widget} />
        }
        break;
      case "WidgetHeroCtaRecord":
        if (preview) {
          return (
            <>
              <WidgetHeroCTA widget={widget} />
              <DatocmsLink itemId={widget.id} modelId={itemTypes['widget_hero_cta']} friendlyName="Hero CTA" />
            </>
          )
        } else {
          return <WidgetHeroCTA widget={widget} />
        }
        break;
      case "WidgetTextHeaderRecord":
        if (preview) {
          return (
            <>
              <WidgetHeader widget={widget} />
              <DatocmsLink itemId={widget.id} modelId={itemTypes['widget_text_header']}  friendlyName="Header" />
            </>
          )
        } else {
          return <WidgetHeader widget={widget} />
        }
        break;
      case "WidgetApplicationGridRecord":
        if (preview) {
          return (
            <>
              <WidgetApplicationGrid widget={widget} />
              <DatocmsLink itemId={widget.id} modelId={itemTypes['widget_application_grid']} friendlyName="Hero" />
            </>
          )
        } else {
          return <WidgetApplicationGrid widget={widget} />
        }
        break;
    }
  }
  return (
    <>
      { widgets.map((widget) => renderWidget(widget)) }
    </>
  )
}
