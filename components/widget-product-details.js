import { Image } from 'react-datocms'

export default function WidgetProductDetails({widget}) {
  
  return (
    <div className="uk-section uk-background-muted">
      <div className="uk-container ">
        <div uk-grid="" className="uk-grid-match">
          {
            widget.products.map((product) => 
            <>
            <div className="uk-width-1-1 uk-width-1-3@s uk-text-center">
              <figure className="uk-margin-small-bottom">
                <Image
                  data={{
                    ...product.productImage.responsiveImage,
                    alt:'',
                  }}/>
                { 
                  product.videoUrl && 
                  <figcaption uk-lightbox="" className="uk-margin-small-top">
                    <a className="nov-button-icon-link uk-flex uk-flex-inline uk-flex-middle nov-text-semibold" href={product.videoUrl}>
                      <span>Watch it in Action</span>
                      <i className="icomoon-play-circle" />
                    </a>
                  </figcaption>
                }
              </figure>
            </div>
            <div className="uk-width-2-3@s uk-width-1-1">
              <div className="uk-card uk-card-default uk-card-body">
                <h3>{product.title}</h3>
                <div uk-grid="" className="uk-grid-large">
                  <div className="uk-width-1-1 uk-width-3-5@m">
                    <div dangerouslySetInnerHTML={{__html: product.fullDescription }} />
              
                    <div className="uk-flex uk-flex-wrap">
                    {
                      product.features.split(", ").map((feature) => 
                      <div key={feature} className="uk-text-center uk-margin-small-right" style={{maxWidth: "85px"}}>
                        <i className={`icomoon-${feature.split(' ').join('-')} nov-icon-feature`} />
                        <h6 className={`uk-margin-small-top nov-text-${feature.split(' ').join('-')}`} >{feature}</h6>
                      </div>
                      )
                    }
                    </div>
                  </div>
                  <div className="uk-width-1-1 uk-width-2-5@m">
                    <h6>Applications</h6>
                    <div className="nov-list" dangerouslySetInnerHTML={{__html: product.applications}} />
                    {
                      product.technicalSheet &&
                      <>
                        <h6>Download</h6>
                        <a className="nov-button-icon-link uk-flex uk-flex-inline uk-flex-middle nov-text-semibold" href={product.technicalSheet.url} download={true} target="_blank">
                          <span>Product Specs</span>
                          <i className="icomoon-file-text"/>
                        </a>
                      </>
                    }
                  </div>
                </div>
              </div>
            </div>
            </>
            )
          }
        </div>
      </div>
    </div>
    )
  }