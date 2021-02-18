import { Image } from 'react-datocms'
export default function WidgetTwoColumnVideoCta({widget}) {
  return (
    <div className="uk-section uk-background-secondary uk-light uk-text-center">
      <div className="uk-container uk-container-small">
        <h2>{widget.title}</h2>
        <div uk-grid="" className="uk-child-width-1-1 uk-child-width-1-2@s uk-margin-large-top">
          {
            widget.videoCtas.map((videoCta) => 
            <div>
              <div className="uk-width-medium uk-margin-auto uk-flex uk-flex-center uk-flex-column uk-flex-middle">
                <Image  data={{ ...videoCta.image.responsiveImage, alt:'' }} />
                <div className="uk-text-large uk-margin-top" dangerouslySetInnerHTML={{__html: videoCta.description }}/>
                <div>
                  <div uk-lightbox="">
                    <a href={videoCta.videoUrl} className="uk-button uk-button-default">{videoCta.buttonLabel }</a>
                  </div>
                </div>
              </div>
            </div>
            )
          } 
        </div>
      </div>
    </div>
  )
}