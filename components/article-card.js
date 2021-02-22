import Link from 'next/link'
export default function ArticleCard({article}) {
  return (
    <Link as={`/research/${article.id}`} href="/research/[slug]">
      <a className="uk-link-reset uk-animation-fade">
        <div class="uk-card uk-card-default uk-card-hover">
          <div class="uk-card-body uk-flex uk-flex-column">
            <div class="uk-flex-none">
              <div class="uk-card-title">{article.name}</div>
              <hr uk-margin="" />
            </div>
            <div class="uk-flex-1" dangerouslySetInnerHTML={{__html: article.excerpt}} />
            <div class="uk-text-right uk-flex-none">
              <div class="uk-link nov-button-icon-link uk-flex uk-flex-inline uk-flex-middle uk-text-large nov-text-semibold">
                <span>Full Report</span>
                <i class="icomoon-arrow-right-circle" />
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>

  )
}