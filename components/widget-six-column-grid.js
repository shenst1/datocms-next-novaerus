

export default function WidgetSixColumnGrid({widget: {header, body, leftColumn, rightColumn, factIcons, backgroundColor, maxImageWidth}}) {
  return (
    <div className="uk-section" style={{backgroundColor: backgroundColor ? backgroundColor.hex : '' }}>
      <div className="uk-container">
        <div className="uk-text-center uk-margin-medium-bottom uk-container-small uk-margin-auto">
          {header && <h2>{ header }</h2>}
          {body && <div dangerouslySetInnerHTML={{ __html: body }} />} 
        </div>
        <div uk-grid="" className={`uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-${factIcons.length <= 6 ? factIcons.length : 6}@m`}>
          { factIcons.map((factIcon) =>
              <div className="uk-text-center">
                { factIcon.icon && <img data-src={factIcon.icon.responsiveImage.src} width={maxImageWidth} alt="" uk-img="" /> }
                { factIcon.fact && <div className="uk-margin-small-top"><h5>{factIcon.fact}</h5></div> }
              </div>
            )
          }
        </div>
        <div uk-grid="" className="uk-child-width-1-1 uk-child-width-1-2@s uk-margin-medium-top">
          {leftColumn && <div dangerouslySetInnerHTML={{__html: leftColumn}} />}
          {rightColumn && <div dangerouslySetInnerHTML={{__html: rightColumn}} />}
        </div>
        
      </div>
    </div>
  )
}