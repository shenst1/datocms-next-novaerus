export default function WidgetHeader({widget: {title, subtitle}}) {
  return (
    <div class="uk-section-small">
      <div class="uk-container">
        <div class="uk-width-xlarge uk-margin-auto uk-text-center uk-margin-large-bottom">
          <div class="uk-margin-medium-bottom">
            <h1 class="uk-text-warning">{title}</h1>
          </div>
          <div className="uk-text-large" dangerouslySetInnerHTML={{__html: subtitle}}>
          </div>
        </div>
      </div>
    </div>
  )
}