import NavigationNode from '../components/navigation-node'

export default function WidgetSolutionsGrid({widget: {header, subheader, iconFacts, button}}) {
  return (
    <div className="uk-section uk-background-cover">
      <div className="uk-container uk-text-center">
        {header && <h2>{header}</h2>}>
        <div className="uk-margin-large-bottom" dangerouslySetInnerHTML={{__html: subheader}} />
        <div uk-grid="" className="uk-flex uk-flex-center uk-flex-around uk-child-width-1-4@m uk-child-width-1-2@s">
          {
            iconFacts.map((iconFact) => 
              <div>
                {iconFact.icon && <img data-src={iconFact.icon.responsiveImage.src} alt="" uk-img="" />}
                <h5 className="uk-margin-small">{iconFact.fact}</h5>

              </div>
            )
          }
        </div>
        <div className="uk-text-center uk-margin-medium-top">
          {
            button && <NavigationNode node={button} />
          }
        </div>
      </div>
    </div>
  )
}