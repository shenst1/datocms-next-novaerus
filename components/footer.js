import Container from './container'
import Link from 'next/link'
import { Image } from 'react-datocms'

export default function Footer({footer}) {
  const {subscribeHeader, connectHeader, buttonTitle, navigation, socialHeader, socialLinks, partnerHeader, lowerNavigation, copyright, disclaimer, partners } = footer;
  return (
    <>
      <div className="uk-section-small nov-background-ultra-muted">
        <div className="uk-container">
          <div uk-grid="" className="uk-grid-match">
            <div className="uk-width-1-1 uk-width-1-2@s uk-width-1-4@m">
              <div className="nov-card nov-card-border">
                <h4 className="uk-text-uppercase">{subscribeHeader}</h4>
                <p>Get news and updates about our latest products and offerings</p>
                <form action={`https://${process.env.MAILCHIMP_DOMAIN}.${process.env.MAILCHIMP_ZONE}.list-manage.com/subscribe/post-json?u=${process.env.MAILCHIMP_USER_ID}&amp;id=${process.env.MAILCHIMP_SUBSCRIBE_LIST}`} method="get" id="mailchimp-subscribe" className="uk-form" >
                  <div>
                    <input type="email" name="EMAIL" className="uk-input uk-margin-small-bottom" id="mce-EMAIL" placeholder="Your Email" required />
                      {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
                    <div style={{position: "absolute", left: "-5000px" }} aria-hidden="true">
                      <input type="text" name={`b_${process.env.MAILCHIMP_USER_ID}_${process.env.MAILCHIMP_SUBSCRIBE_LIST}`} tabindex="-1" value="" />  
                    </div>
                    <div>
                      <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="uk-button uk-button-secondary" />
                    </div>
                  </div>
                  <div id="response" className="uk-margin-small-top"></div>
                </form>
              </div>
            </div>
            <div className="uk-width-1-1 uk-width-1-2@s uk-width-1-4@m">
              <div className="nov-card nov-card-border">
                <h4 className="uk-text-uppercase">{connectHeader}</h4>
                
                  <ul className="uk-list uk-margin-remove">
                    {
                      navigation.children.map((node) => (
                        <li key={node.link?.id}>
                          <Link as={`/${node?.link?.slug}`} href="/[slug]">
                            <a>{node.label}</a>
                          </Link>
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
                    socialLinks.map((link) => 
                      <a href={link.url} className="uk-margin-small-right" target="_blank"><i className={`icomoon-${link.icomoonName} nov-icon-social`} /></a>
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
                      <li key={node.link?.id}>
                        <Link as={`/${node?.link?.slug}`} href="/[slug]">
                          <a>{node.label}</a>
                        </Link>
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
          <small className="uk-text-muted" dangerouslySetInnerHTML={{ __html: disclaimer}} />  
        </div>
      </footer>
    </>
  )
}
