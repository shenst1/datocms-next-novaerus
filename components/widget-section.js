import { Image } from 'react-datocms'
export default function WidgetSection({widget: {header, body }}) {
  return (
    <div className="uk-section">
      <div className="uk-container">
        <div className=" uk-text-center">
          {header && <h1 className='uk-margin-medium-bottom'>{header}</h1>}
          {body && <div dangerouslySetInnerHTML={{__html: body }} />}
        </div>
      </div>
    </div>
  )
}