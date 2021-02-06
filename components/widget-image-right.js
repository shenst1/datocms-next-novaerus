import Link from 'next/link'
import { Image } from 'react-datocms'

export default function WidgetImageRight({widget: {title, body, button, leadImage, image}}) {

  return (
    <div class="uk-section-small">
      <div class="uk-container">
        
        <div uk-grid="">
          <div class="uk-width-1-1 uk-width-1-3@s">
            <Image
                data={{
                  ...leadImage.responsiveImage,
                  alt:'',
                }}
                
              />
            <div class="uk-margin-large-top">
              <h2>{title}</h2>
            </div>
            
            <div dangerouslySetInnerHTML={{ __html: body }}>
            </div>
            
          </div>
          <div class="uk-width-1-1 uk-width-2-3@s">
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