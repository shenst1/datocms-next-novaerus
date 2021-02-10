import Link from 'next/link'
import { Image } from 'react-datocms'

export default function WidgetOverlaidImage({widget: {title, leadText, backgroundImage, button}}) {
  return (
    <div class="uk-section uk-section-large uk-background-cover" style={{backgroundImage: `url(${backgroundImage.responsiveImage.src})`}}>
      <div class="uk-container uk-light">
      
        <h1 dangerouslySetInnerHTML={{__html: title}}></h1>
        
        <h3 class="uk-margin-remove-bottom">{leadText}</h3>
    
        <div class="uk-margin-medium-top">
          {
            button && (
              <Link as={`/${button.link.slug}`} href="/[slug]">
                <a class="uk-button uk-button-default">{button.label}</a>
              </Link>
            )
          }
        </div>
      </div>
    </div>
  )
}