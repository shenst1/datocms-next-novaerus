import Link from 'next/link'
import { Image } from 'react-datocms'

export default function WidgetImageRight({widget: {title, body, button, leadImage, image}}) {

  return (
    <div className="uk-section-small">
      <div className="uk-container">
        
        <div uk-grid="">
          <div className="uk-width-1-1 uk-width-1-3@s">
            <Image
                data={{
                  ...leadImage.responsiveImage,
                  alt:'',
                }}
                
              />
            <div className="uk-margin-large-top">
              <h2>{title}</h2>
            </div>
            
            <div dangerouslySetInnerHTML={{ __html: body }}>
            </div>
            
          </div>
          <div className="uk-width-1-1 uk-width-2-3@s">
            <Image
                data={{
                  ...image.responsiveImage,
                  alt:'',
                }}
                
              />
          </div>
        </div>
    </div>
  </div>
  )
}