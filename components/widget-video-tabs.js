import { Image } from 'react-datocms'
export default function WidgetVideoTabs({widget: {prefix, header, description, videoTabs }}) {
  return (
    <div className="uk-section">
      <div className="uk-container">
        <div className=" uk-margin-auto uk-text-center uk-container-small">
          { prefix && <h6 className="uk-text-warning">{prefix}</h6> }
          { header && <h2>{header} </h2>}
          { description && <div className="uk-text-large" dangerouslySetInnerHTML={{__html: description }} />}
        </div>
        {
          videoTabs && 
            <>
              <ul className="uk-switcher uk-margin" id="videos" uk-lightbox="">
                {
                  videoTabs.map((videoTab) => 
                    <li key={videoTab.id}>
                      <div className="uk-margin-medium-top uk-text-center">
                        <a href={videoTab.url} className="uk-link-reset" data-caption={videoTab.title}>
                          <div className="uk-card uk-card-default uk-card-hover uk-height-1-1">
                            <div className="uk-card-media-top">
                              <Image  data={{ ...videoTab.previewThumbnail.responsiveImage, alt:'' }} />
                              <div className="uk-overlay-primary uk-position-cover uk-light">
                                <div className="uk-position-center uk-text-center">
                                  <i className="nov-icon-xxl icomoon-play-circle2"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                          {videoTab.title && <p>{videoTab.title}</p> }
                        </a>
                      </div>
                    </li>
                  )
                }
              </ul>
              <ul className="uk-flex-center" uk-tab="connect: #videos;">
                {
                  videoTabs.map((videoTab) => 
                    <li key={`${videoTab.id}2`}>
                      <a href="#">{videoTab.label}</a>
                    </li>
                  )
                }
              </ul>
            </>
        }
      </div>
    </div>
  )
}