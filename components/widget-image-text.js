import {Image} from 'react-datocms'
import NavigationNode from "../components/navigation-node"

export default function WidgetImageText({widget: {image, body, button}}) {
  return (
    <div className="uk-section uk-background-cover uk-light uk-background-secondary">
      <div className="uk-container">
        <div uk-grid="" className="uk-flex uk-flex-middle">
          <div className="uk-width-1-1 uk-width-1-3@s">
            {image && <Image data={{...image.responsiveImage, alt: ""}} />}
          </div>
          <div className="uk-width-1-1 uk-width-2-3@s">
            {body && <div dangerouslySetInnerHTML={{__html: body}} className="uk-margin-medium-bottom" />}
            {button && <NavigationNode node={button} className="uk-button uk-button-default" />}
          </div>
        </div>
      </div>
    </div>
  )
}