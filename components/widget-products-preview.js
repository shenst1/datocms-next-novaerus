import Link from 'next/link'
import { Image } from 'react-datocms'

export default function WidgetProductsPreview({widget: {title,thumbnail, body, products, cardLink }}) {

  return (
    <div className="uk-section uk-background-muted">
      <div className="uk-container">
        <div uk-grid="" className="uk-flex-bottom">
          <div className="uk-width-1-1 uk-width-1-3@s">
            <h1 className="">{title}</h1>
          </div>
          <div className="uk-width-1-1 uk-width-2-3@s">
            <div dangerouslySetInnerHTML={{ __html: body }}></div>
          </div>
        </div>

        <div uk-grid="" className="uk-grid-match uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-3@m uk-margin-large-top">
          {
            products.map(product => 
              <Link key={product.id} as={`/${cardLink?.link?.slug}`} href="/[slug]">
                <a class="uk-link-reset"> 
                  <div key={product.id}>
                    <div className="uk-card uk-card-default uk-card-hover uk-card-body uk-flex uk-flex-column">
                      <div className="uk-flex-none">
                        <figure className="uk-text-center">
                          <Image
                            data={{
                              ...product.productImage.responsiveImage,
                              alt:'',
                            }}
                            
                          />
                        </figure>
                        <figcaption><h5>{product.title}</h5></figcaption>
                      </div>
                      <div className="uk-flex-none">
                        <div dangerouslySetInnerHTML={{ __html: product.shortDescription }}></div>
                      </div>
                      <div className="uk-text-right uk-flex-none">
                        <div className="uk-link nov-button-icon-link uk-flex uk-flex-inline uk-flex-middle nov-text-semibold">
                          <span>More Details</span>
                          <i className="icomoon-arrow-right-circle"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            )
          }
      </div>
      </div>
    </div>
  )
}