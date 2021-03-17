import { Image } from 'react-datocms'
import NavigationNode from '../components/navigation-node'
import Subscribe from '../components/mailchimp-subscribe'

export default function Footer({footer}) {
  const {subscribeHeader, connectHeader, navigation, socialHeader, socialLinks, partnerHeader, lowerNavigation, copyright, disclaimer, partners } = footer;
  return (
    <>
      <div className="uk-section-small nov-background-ultra-muted">
        <div className="uk-container">
          <div uk-grid="" className="uk-grid-match">
            <div className="uk-width-1-1 uk-width-1-2@s uk-width-1-4@m">
              <div className="nov-card nov-card-border">
                <h4 className="uk-text-uppercase">{subscribeHeader}</h4>
                <p>Get news and updates about our latest products and offerings</p>
                <Subscribe />
              </div>
            </div>
            <div className="uk-width-1-1 uk-width-1-2@s uk-width-1-4@m">
              <div className="nov-card nov-card-border">
                <h4 className="uk-text-uppercase">{connectHeader}</h4>
                
                  <ul className="uk-list uk-margin-remove">
                    {
                      navigation.children.map((node) => (
                        <li key={node.id}>
                          <NavigationNode node={node} />
                        </li>
                      ))
                    }
                  </ul>
              </div>
            </div>
            <div className="uk-width-1-1 uk-width-1-2@s uk-width-1-4@m">
              <div className="nov-card nov-card-border">
                <h4 className="uk-text-uppercase">{socialHeader}</h4>
                <div>
                  {
                    socialLinks.map((link, i) => 
                      <a key={i} href={link.url} className="uk-margin-small-right" target="_blank"><i className={`icomoon-${link.icomoonName} nov-icon-social`} /></a>
                    )
                  }
                </div>
              </div>
            </div>
            <div className="uk-width-1-1 uk-width-1-2@s uk-width-1-4@m">
              <div className="nov-card nov-card-border">
                <h4 className="uk-text-uppercase">{partnerHeader}</h4>
                <div>
                  {
                    partners?.map(partner => 
                      <Image
                        key={partner.id }
                        data={{
                          ...partner.image.responsiveImage,
                          alt:'',
                        }}
                        style={{width: "100px"}}
                      />
                    )
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="uk-background-secondary uk-section-xsmall">
        <div className="uk-container">
          <div uk-grid="" className="uk-grid-match">
            <div className="uk-width-1-1 uk-width-2-3@s">
                <ul className="uk-subnav uk-subnav-divider">
                  {
                    lowerNavigation.children.map((node) => (
                      <li key={node.id}>
                        <NavigationNode node={node} />
                      </li>
                    ))
                  }
                </ul>
            </div>
            <div className="uk-width-1-1 uk-width-1-3@s uk-text-right@s">
              <small className="uk-text-muted">{copyright}</small>
            </div>
          </div>
          <hr style={{borderColor: "949499"}} />
          <div className="uk-text-muted uk-text-small" dangerouslySetInnerHTML={{ __html: disclaimer}} />
        </div>
      </footer>
    </>
  )
}
