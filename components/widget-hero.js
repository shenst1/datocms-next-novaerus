import { Image } from 'react-datocms'
export default function WidgetHero({widget: {backgroundImage, header, subheader }}) {
  return (
    <div uk-img="" data-srcset={backgroundImage.responsiveImage.srcSet} data-sizes={backgroundImage.responsiveImage.sizes} class="uk-section uk-section-large nov-height-subhero uk-inline uk-width-1-1 uk-background-cover" >
      <div class="uk-sticky-placeholder">
      </div>
      <div class="uk-position-cover uk-overlay uk-padding-remove uk-overlay-default nov-overlay-reset-m uk-flex uk-flex-bottom">
        <div class="uk-width-1-1 uk-dark">
          <div class="uk-container uk-margin-large-bottom">
            <div class="uk-width-xlarge ">
              <div dangerouslySetInnerHTML={{__html: header}} />
              <hr class="uk-hr-medium uk-margin-remove-top"/>
              <div class="uk-text-large" dangerouslySetInnerHTML={{ __html: subheader }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}