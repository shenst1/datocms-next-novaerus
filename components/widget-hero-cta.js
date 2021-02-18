import Link from 'next/link'
import { Image } from 'react-datocms'

export default function WidgetOverlaidImage({widget: {title, leadText, body, backgroundImage, button, alignment, theme}}) {
  return (
    <div className="uk-section uk-section-large uk-background-cover" style={{backgroundImage: `url(${backgroundImage.responsiveImage.src})`}}>
      <div className={`uk-container uk-${theme} uk-flex uk-flex-${alignment}`}>
        <div className={`uk-width-large uk-text-${alignment}`}>
          <h1 dangerouslySetInnerHTML={{__html: title}}></h1>
          {
            leadText && <h3 className="uk-margin-remove-bottom">{leadText}</h3>
          }
          {
            body && <div className="uk-text-large" dangerouslySetInnerHTML={{__html: body}} />
          }
      
         
          {
            button && (
              <div className="uk-margin-medium-top">
                <Link as={`/${button.link.slug}`} href="/[slug]">
                  <a className="uk-button uk-button-default">{button.label}</a>
                </Link>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}