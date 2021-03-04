import {useRouter} from 'next/router'
export default function WidgetSection({widget: {header, body, width, showBackButton }}) {
  const router = useRouter();
  return (
    <div className="uk-section">
      <div className={ `uk-container ${width !== "medium" && `uk-container-${width}`}`}>
          { header && <h1 className='uk-margin-medium-bottom'>{header}</h1> }
          { showBackButton &&  <a onClick={() => router.back()} className="nov-button-icon-link uk-flex uk-flex-inline uk-flex-middle nov-text-semibold uk-margin-bottom"><i class="icomoon-arrow-left-circle uk-margin-remove-left "></i><span class="uk-text-uppercase uk-text-small">Back</span></a> }
          { body && <div dangerouslySetInnerHTML={{__html: body }} /> }
      </div>
    </div>
  )
}