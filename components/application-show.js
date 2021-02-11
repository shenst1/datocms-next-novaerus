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
      <div className="uk-section uk-background-cover">
        <div className="uk-container uk-text-center">
          <h2>{application.solutionsHeader}</h2>
          <div className="uk-margin-large-bottom" dangerouslySetInnerHTML={{__html: application.solutionsBody}} />
          <div uk-grid="" className="uk-flex uk-flex-center uk-flex-around uk-child-width-1-4@m uk-child-width-1-2@s">
            {
              application.iconFacts.map((iconFact) => 
                <div>
                  <h5 className="uk-margin-small">{iconFact.fact}</h5>
                </div>
              )
            }
          </div>
          <div className="uk-text-center uk-margin-medium-top">
            {
              application.solutionsCta && (
                <Link as={`/${application.solutionsCta.link.slug}`} href="/[slug]">
                  <a className="uk-button uk-button-secondary">{application.solutionsCta.label}</a>
                </Link>
              )
            }
          </div>
        </div>
      </div>
    </>
  )
}