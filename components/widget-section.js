import {useRouter} from 'next/router'
export default function WidgetSection({widget: {header, body, width, showBackButton, backgroundColor, theme }}) {
  const router = useRouter();
  return (
    <div className={`uk-section uk-${theme}` } style={{backgroundColor: backgroundColor.hex}}>
      <div className={ `uk-container ${width !== "medium" && `uk-container-${width}`}`}>
          { header && <h1 className='uk-margin-medium-bottom uk-text-center'>{header}</h1> }
          { showBackButton &&  <a onClick={() => router.back()} className="nov-button-icon-link uk-flex uk-flex-inline uk-flex-middle nov-text-semibold uk-margin-bottom"><i className="icomoon-arrow-left-circle uk-margin-remove-left "></i><span className="uk-text-uppercase uk-text-small">Back</span></a> }
          { body && <div dangerouslySetInnerHTML={{__html: body }} /> }
      </div>
    </div>
  )
}