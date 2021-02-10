import Link from 'next/link'
import { Image } from 'react-datocms'

export default function WidgetOverlaidImage({widget: {title, body, backgroundImage, foregroundImage}}) {

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
          </div>
        </div>
      </div>
    </div>
  )
}