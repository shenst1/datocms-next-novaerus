import { Image } from 'react-datocms'
import NavigationNode from './navigation-node';
export default function WidgetHeroSlideshow({widget:{ hideOnDesktop, slides }}) {
  return (
    <div className={hideOnDesktop && "uk-hidden@s"} >
      <div uk-slideshow="min-height: 420; max-height: 600; autoplay: true; pause-on-hover: false; autoplay-interval: 9000;" className="uk-position-relative">
        <ul className="uk-slideshow-items">
          {
            slides.map((slide) =>
              <li>
                <img data-srcset={slide.image.responsiveImage.srcSet} data-src={slide.image.responsiveImage.url} uk-cover="" uk-img="" className="pla-scrollspy-ignore" />
                <div className="uk-position-bottom uk-position-large uk-light">
                  <div className="uk-container">
                    <div className="uk-width-xxlarge uk-margin-medium-bottom">
                      <h1 uk-slider-parallax="x: 100,-100">{slide.title}</h1>
                      <p  uk-slider-parallax="x: 200,-200" className="uk-text-large">{slide.subtitle }</p>
                      <div uk-slider-parallax="x: 300,-300">

                        <NavigationNode node={slide.button} className= "uk-button uk-button-primary" />
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            )
          }
        </ul>
        <div className="uk-position-bottom-center uk-light">
          <ul className="uk-slideshow-nav uk-dotnav uk-flex-center uk-margin">
          </ul>
        </div>
      </div>
    </div>
  )
}