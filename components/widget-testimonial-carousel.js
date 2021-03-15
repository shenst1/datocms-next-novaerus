import { Image } from 'react-datocms'
import NavigationNode from './navigation-node';
import Link from 'next/link';
export default function WidgetTestimonialCarousel({widget: {backgroundImage, testimonials}}) {
  return (
    <div uk-img="" data-srcset={backgroundImage.responsiveImage.srcSet} data-sizes={backgroundImage.responsiveImage.sizes} className="uk-section uk-section-large uk-background-top-center uk-background-norepeat">
      <div className="uk-container">
        <div uk-slider="autoplay: true; autoplay-interval: 10000;">
          <div className="uk-position-relative">
            <div  className="uk-slider-container">
              <ul className="uk-child-width-1-1 uk-slider-items">
                {
                  testimonials.map(({thumbnail, title, quote, url, buttonLabel}) => 
                    <li>
                      <div className="uk-text-center uk-flex uk-flex-middle uk-flex-center uk-margin-bottom">
                        { thumbnail && <img uk-img="" data-src={ thumbnail.responsiveImage.src} width="60" className="nov-scrollspy-ignore uk-margin-right" /> }
                        { title && <h3 className="uk-margin-remove">{ title}</h3>}
                      </div>
                      <div>
                      <blockquote className="uk-text-large uk-padding" dangerouslySetInnerHTML={{ __html:  quote}} />
                        <div className="uk-text-right">
                          {
                            url && buttonLabel && 
                              <Link  href={ url}>
                                <a className="uk-link nov-button-icon-link uk-flex uk-flex-inline uk-flex-middle uk-flex-right uk-text-large nov-text-semibold">
                                  <span>{buttonLabel}</span>
                                  <i className="icomoon-arrow-right-circle" />
                                </a>
                              </Link>
                          }
                          
                        </div>
                      </div>
                    </li>
                  )
                }
              
              </ul>
            </div>
            <a className="uk-position-center-left-out  uk-slidenav-large uk-slidenav-previous uk-slidenav uk-icon uk-visible@s" href="#" uk-slider-item="previous">
              <svg width="25" height="40" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" strokeWidth="2" points="20.527,1.5 2,20.024 20.525,38.547 "></polyline></svg>
            </a>
            <a className="uk-position-center-right-out uk-slidenav-large uk-slidenav-previous uk-slidenav uk-icon uk-visible@s" href="#" uk-slider-item="next" >
              <svg width="25" height="40" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" strokeWidth="2" points="4.002,38.547 22.527,20.024 4,1.5 "></polyline></svg>
            </a>
          </div>
          <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin-small-top"></ul>
        </div>
      </div>
    </div>
  )   
}