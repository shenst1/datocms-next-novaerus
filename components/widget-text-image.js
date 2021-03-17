import Link from 'next/link'
import { Image } from 'react-datocms'
import NavigationNode from '../components/navigation-node'
export default function WidgetTextImage({widget: {title, body, button, leadImage, image}}) {

  return (
    <div className="uk-section">
      <div className="uk-container">
        
        <div uk-grid="">
          <div className="uk-width-1-1 uk-width-1-2@s uk-width-1-3@m">
            { leadImage &&
              <Image
                data={{
                  ...leadImage.responsiveImage,
                  alt:'',
                }}
                style={{maxWidth: "400px"}}
              />
            }
            { 
              title && 
              <div className="uk-margin-large-top">
                <h3><em>{title}</em></h3>
              </div>
            }
            
            { body && <div dangerouslySetInnerHTML={{ __html: body }} /> }
            
            {
              button && 
                <NavigationNode node={button} className="uk-link nov-button-icon-link uk-flex uk-flex-inline uk-flex-middle nov-text-semibold" icon="icomoon-arrow-right-circle" right={true} />
            }
            
            
          </div>
          <div className="uk-width-1-1 uk-width-1-2@s uk-width-2-3@m">
            { image &&
              <Image
                data={{
                  ...image.responsiveImage,
                  alt:'',
                }}
                
              />
            }
          </div>
        </div>
    </div>
  </div>
  )
}