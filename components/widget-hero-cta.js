import Link from 'next/link'
import { Image } from 'react-datocms'

export default function WidgetOverlaidImage({widget: {title, leadText, body, backgroundImage, button, alignment}}) {
  return (
    <div class="uk-section uk-section-large uk-background-cover" style={{backgroundImage: `url(${backgroundImage.responsiveImage.src})`}}>
      <div class={`uk-container uk-light uk-flex uk-flex-${alignment}`}>
        <div class={`uk-width-large uk-text-${alignment}`}>
          <h1 dangerouslySetInnerHTML={{__html: title}}></h1>
          {
            leadText && <h3 class="uk-margin-remove-bottom">{leadText}</h3>
          }
          {
            body && <div class="uk-text-large" dangerouslySetInnerHTML={{__html: body}} />
          }
      
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
    </div>
  )
}