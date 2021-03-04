
import { Image} from 'react-datocms'
export default function WidgetTestimonialCardGrid({widget: {header, backgroundImage: {responsiveImage}, testimonials}}) {
  return (
    <section uk-img="" data-srcset={responsiveImage && responsiveImage.srcSet} data-sizes={responsiveImage && responsiveImage.sizes} className="uk-section uk-background-center-center uk-background-norepeat">
      <div className="uk-container">
        <div>
          { header && <h2 className="uk-text-center uk-margin-medium-bottom">{ header}</h2>}
        </div>
        
        <div uk-grid="" className="uk-grid-match uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-3@m uk-margin-large-top uk-grid-small">
          {
            testimonials.map(({id, image, excerpt, quote}) =>
              <div key={id}>
                <div className="uk-card uk-card-default">
                  <div className="uk-card-media-top">
                    <figure className="uk-text-center">
                      { image && <Image data={{...image.responsiveImage, alt: ""}} />}
                    </figure>
                  </div>
                  <div className="uk-flex-1 uk-card-body">
                    { excerpt && <div dangerouslySetInnerHTML={{__html: excerpt}} />}
                    
                    <blockquote>
                      <div className="uk-text-large">
                      { quote && <div dangerouslySetInnerHTML={{__html: quote}} />}
                      </div>
                    </blockquote>
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </section>
  )
  
}