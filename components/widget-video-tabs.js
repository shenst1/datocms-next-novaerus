import { Image } from 'react-datocms'
export default function WidgetVideoTabs({widget: {prefix, header, description, videoTabs }}) {
  return (
    <div class="uk-section">
      <div class="uk-container uk-container-small">
        <div class="uk-width-xxlarge uk-margin-auto uk-text-center">
          { prefix && <h6 className="uk-text-warning">{prefix}</h6> }
          { header && <h2>{header} </h2>}
          { description && <div className="uk-text-large" dangerouslySetInnerHTML={{__html: description }} />}
        </div>
        {
          videoTabs && 
            <>
              <ul class="uk-switcher uk-margin" id="videos" uk-lightbox="">
                {
                  videoTabs.map((videoTab) => 
                    <li key={videoTab.id}>
                      <div class="uk-margin-medium-top uk-text-center">
                        <a href={videoTab.url} className="uk-link-reset" data-caption={videoTab.title}>
                          <div class="uk-card uk-card-default uk-card-hover uk-height-1-1">
                            <div class="uk-card-media-top">
                              <Image  data={{ ...videoTab.previewThumbnail.responsiveImage, alt:'' }} />
                              <div class="uk-overlay-primary uk-position-cover uk-light">
                                <div class="uk-position-center uk-text-center">
                                  <i class="nov-icon-xxl icomoon-play-circle2"></i>
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
              <ul class="uk-flex-center" uk-tab="connect: #videos;">
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