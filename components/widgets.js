import WidgetImageRight from "./widget-image-right";
import WidgetOverlaidImage from "./widget-overlaid-image";
import WidgetProductsPreview from "./widget-products-preview";
import WidgetHeroCTA from "./widget-hero-cta";
import WidgetHeader from "./widget-header";
import WidgetApplicationGrid from "./widget-application-grid";

export default function Widgets({widgets}) {
  function renderWidget(widget) {
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