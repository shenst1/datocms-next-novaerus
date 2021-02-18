import Link from "next/link"
import { Image } from 'react-datocms'

export default function WidgetApplicationGrid({widget}) {
  return (
    <div uk-img="" data-srcset={widget.backgroundImage.responsiveImage.srcSet} data-sizes={widget.backgroundImage.responsiveImage.sizes} className="uk-section uk-background-center-center uk-background-norepeat">
      <div className="uk-container uk-container-small">
        <div uk-grid="" className="uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-grid-small uk-grid-match">
          {
            widget.applications.map((application) => 
            <div>
              <Link as={`/applications/${application.slug}`} href="/applications/[slug]">
                <a>
                  <div className="uk-card uk-card-default uk-card-hover uk-height-1-1">
                    <div className="uk-cover-container uk-height-small uk-card-media-top">
                      {
                        application.thumbnail && (
                          <img src={application.thumbnail.responsiveImage.src} alt="" uk-cover="" />
                        )
                      }
                    </div>
                    <div className="uk-card-body uk-card-body-small">
                      <div className="uk-card-title uk-text-center">
                        {application.title}
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            )
          }
        </div>
      </div>
    </div>
  )
}