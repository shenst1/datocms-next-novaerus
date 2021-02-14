import { Image } from 'react-datocms'
export default function WidgetSection({widget: {header, body }}) {
  return (
    <div class="uk-section">
      <div class="uk-container">
        <div class=" uk-text-center">
          {header && <h1 class='uk-margin-medium-bottom'>{header}</h1>}
          {body && <div dangerouslySetInnerHTML={{__html: body }} />}
        </div>
      </div>
    </div>
  )
}