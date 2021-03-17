import Link from 'next/link'
export default function ArticleCard({article}) {
  return (
    <Link as={`/research/${article.id}`} href="/research/[slug]">
      <a className="uk-link-reset uk-animation-fade">
        <div className="uk-card uk-card-default uk-card-hover">
          <div className="uk-card-body uk-flex uk-flex-column">
            <div className="uk-flex-none">
              <div className="uk-card-title">{article.name}</div>
              <hr uk-margin="" />
            </div>
            <div className="uk-flex-1" dangerouslySetInnerHTML={{__html: article.excerpt}} />
            <div className="uk-text-right uk-flex-none">
              <div className="uk-link nov-button-icon-link uk-flex uk-flex-inline uk-flex-middle nov-text-semibold">
                <span>Full Report</span>
                <i className="icomoon-arrow-right-circle" />
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>

  )
}