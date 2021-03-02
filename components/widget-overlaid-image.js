import Link from 'next/link'
import { Image } from 'react-datocms'
import NavigationNode from '../components/navigation-node'
export default function WidgetOverlaidImage({widget: {title, body, backgroundImage, foregroundImage, button}}) {

  return (
    <div className="uk-section-small uk-background-bottom-center uk-background-norepeat" style={{backgroundImage: `url(${backgroundImage.responsiveImage.src})`}}>
      <div className="uk-container">
        <div className="uk-hidden@s">
          <h2>{title}</h2>
          <div dangerouslySetInnerHTML={{ __html: body }}></div>
        </div>
        <div className="uk-inline uk-visible@s">
          <Image
            data={{
              ...foregroundImage.responsiveImage,
              alt:'',
            }}
            
          />
          <div className="uk-overlay uk-overlay-default uk-position-center uk-width-1-1 uk-width-2-3@s uk-text-center">
            <h2>{title}</h2>
            <div dangerouslySetInnerHTML={{ __html: body }}></div>
            {button && <NavigationNode node={button} className="uk-link nov-button-icon-link uk-flex uk-flex-inline uk-flex-middle nov-text-semibold uk-margin-top" icon="icomoon-arrow-right-circle" right={true} />}
          </div>
        </div>
      </div>
    </div>
  )
}