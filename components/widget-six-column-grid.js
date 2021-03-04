

export default function WidgetSixColumnGrid({widget: {header, leftColumn, rightColumn, factIcons}}) {
  return (
    <div className="uk-section nov-background-ultra-muted">
      <div className="uk-container">
        <div className="uk-text-center uk-margin-medium-bottom">
          {header && <h2>{header}</h2>}
        </div>
        <div uk-grid="">
          { factIcons.map((factIcon) =>
              <div className="uk-width-1-2 uk-width-1-3@s uk-width-1-6@m uk-text-center">
                { factIcon.icon && <img data-src={factIcon.icon.responsiveImage.src} width="100" alt="" uk-img="" /> }
                { factIcon.fact && <div className="uk-text-large uk-margin-small-top"><p>{factIcon.fact}</p></div> }
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