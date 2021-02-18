import Link from 'next/link'
export default function ResearchArticleShow({researchArticle: {downloadUrl, name, authors, facility, body}}) {
  return (
    <>
      <div className="nov-background-ultra-muted">
        <div className="uk-container uk-container-small">
          <div uk-grid="" className="uk-margin-medium-top uk-margin-medium-bottom" >
            <div className="uk-width-1-1">
              <Link as={`/research`} href="/[slug]">
                <a className="nov-button-icon-link uk-flex uk-flex-inline uk-flex-middle nov-text-semibold">
                  <i className="icomoon-arrow-left-circle uk-margin-remove-left" />
                  <span>Research</span>
                </a>
              </Link>
            </div>
            
            <div className="uk-width-1-1">
              <h2>{name}</h2>
            </div>
            <div className="uk-width-1-1 uk-width-2-3@s">
              {
                authors && 
                  <dl>
                    <dt>Authors</dt>
                    <dd>{authors}</dd>
                  </dl>
              }
              {
                facility && 
                  <dl>
                    <dt>Facility</dt>
                    <dd>{facility}</dd>
                  </dl>
              }
            </div>
            <div className="uk-width-1-1 uk-width-1-3@s">
              {
                downloadUrl && 
                  <dl>
                    <dt>Download</dt>
                    <dd>
                      <a target="_blank" className="nov-button-icon-link uk-flex uk-flex-inline uk-flex-middle nov-text-semibold" href={downloadUrl}>
                        <span>Full Report</span>
                        <i className="icomoon-file-text" />
                      </a>
                    </dd>
                  </dl>
              }
            </div>
          </div>
        </div>
      </div>
      <div className="uk-section">
        <div className="uk-container uk-container-small">
          <div dangerouslySetInnerHTML={{__html: body}} />
        </div>
      </div>
    </>
  )
  
}