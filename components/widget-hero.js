import { Image } from 'react-datocms'
import NavigationNode from '../components/navigation-node'
export default function WidgetHero({widget: {backgroundImage, header, subheader, theme, showRule, button, height }}) {
  return (
    <div uk-img="" data-srcset={backgroundImage.responsiveImage.srcSet} data-sizes={backgroundImage.responsiveImage.sizes} className={`uk-section uk-section-large uk-inline uk-width-1-1 uk-background-cover ${height}` } >
      <div className="uk-sticky-placeholder">
      </div>
      <div className={`uk-position-cover uk-padding-remove uk-overlay uk-overlay-${theme == 'light' ? 'secondary' : 'default'} nov-overlay-reset-m uk-flex uk-flex-bottom`}>
        <div className={`uk-width-1-1 uk-${theme}`}>
          <div className="uk-container uk-margin-large-bottom">
            <div className="uk-width-xlarge ">
              <div dangerouslySetInnerHTML={{__html: header}} className={!showRule && "uk-margin-large-bottom" } />
              {
                showRule &&  <hr className="uk-hr-medium uk-margin-remove-top"/>
              }
             
              <div className="uk-text-large" dangerouslySetInnerHTML={{ __html: subheader }} />
              {
                button && <NavigationNode node={button} className="uk-button uk-button-default" />
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}