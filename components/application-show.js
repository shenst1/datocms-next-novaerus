import Link from 'next/link'

export default function ApplicationShow({ application }) {
  return (
    <>
      <div uk-img="" data-srcset={application.backgroundImage.responsiveImage.srcSet} data-sizes={application.backgroundImage.responsiveImage.sizes} className="uk-section uk-section-large uk-background-cover uk-background-blend-multiply background-burnt uk-light">
        <div className="uk-container">
          <div className="uk-width-xxlarge">
            <h6 className="uk-text-uppercase uk-margin-small-bottom">{application.title}</h6> 
            <h1 className="uk-margin-small-top uk-margin-remove-bottom">{application.header}</h1>
            <div className="uk-text-large" dangerouslySetInnerHTML={{__html: application.leadText}} />
          </div>
        </div>
      </div>
    </>
  )
}