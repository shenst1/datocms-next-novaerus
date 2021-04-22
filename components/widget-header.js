export default function WidgetHeader({widget: {title, subtitle}}) {
  return (
    <div className="uk-section-small">
      <div className="uk-container">
        <div className="uk-width-xlarge uk-margin-auto uk-text-center">
          <div className="uk-margin-medium-bottom">
            <h1 className="uk-text-warning">{title}</h1>
          </div>
          <div className="uk-text-large" dangerouslySetInnerHTML={{__html: subtitle}}>
          </div>
        </div>
      </div>
    </div>
  )
}