import { Image } from 'react-datocms'
import React from 'react'
export default function WidgetIconModalSection({widget: {illustration, iconModals }}) {
  return (
    <div class="uk-section uk-padding-remove uk-flex uk-flex-center">
      <div class="uk-inline">
        <Image data={{...illustration.responsiveImage, alt: "" }} />
        <div className="uk-overlay uk-position-cover">
          {
            iconModals.map(({id, xCoordinate, yCoordinate, icon, heroImage, heading, description, research}) =>
              <React.Fragment>
                <a uk-toggle={'#modal-' + id}  className="nov-marker uk-position-absolute uk-transform-center uk-card uk-card-default uk-card-hover" style={{left: xCoordinate + '%', top: yCoordinate + '%' }} href="#">
                  { icon && <img uk-img="" data-src={icon.responsiveImage.src} /> }
                </a>
                <div id={'modal-' + id} class="uk-modal-full" uk-modal="">
                  <div class="uk-modal-dialog">
                    { icon && 
                      <img style={{ zIndex: 1000, left: "33.3333vw", top: "140px", width: "72px" }} uk-img="" data-src={icon.responsiveImage.src} className="nov-scrollspy-ignore uk-position-absolute uk-position-top-left uk-transform-center uk-visible@l" />
                    }
                   
                    <button class="uk-modal-close-full uk-close-large" type="button" uk-close=""></button>
                    <div uk-grid="" class="uk-grid-collapse" uk-height-viewport="">
                      <div class="uk-width-1-3 uk-cover-container uk-visible@s">
                        { heroImage && <img uk-img="" uk-cover="" data-src={heroImage.responsiveImage.src} data-srcset={heroImage.responsiveImage.srcSet} /> }
                      </div>
                      <div class="uk-width-1-1 uk-width-2-3@s uk-overflow-auto" style={{ maxHeight: "100vh" }}>
                        <div class="uk-padding-large">
                          <h3 class="uk-margin-small-bottom">What's in the air?</h3>
                          { heading && <h1 class="uk-text-warning uk-margin-small-top uk-margin-medium-bottom">{heading}</h1> }
                          { description && <div class="uk-text-large uk-margin-medium-bottom" dangerouslySetInnerHTML={{__html: description }} /> }
                          { research && 
                            <div class="uk-padding-small nov-background-ultra-muted uk-margin-medium-top">
                              <h6>Related research</h6>
                              <div dangerouslySetInnerHTML={{__html: research}} />
                            </div>
                          }
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            )
          }
        </div>
      </div>
    </div>
  )
}