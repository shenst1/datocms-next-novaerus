import Link from 'next/link'
import { useRouter } from 'next/router'
import Head from "next/head"
import {useEffect} from "react"
import UIkit from "uikit"
import Footer from "../components/footer"
import NavigationNode from "../components/navigation-node"
export default function Layout({ preview, children, settings, transparentNavigation = true }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = () => {
      UIkit.offcanvas('#mobile-navigation').hide()
    }
    router.events.on('routeChangeStart', handleRouteChange)
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [])
 
  return (
    <>
      <Head>
          <link rel="stylesheet" href="//s3.amazonaws.com/icomoon.io/29147/NOV-Novaerus/style.css?jdh7bk" />
      </Head>
      {/* uk-scrollspy="target: img:not(.nov-scrollspy-ignore); cls:uk-animation-fade; delay: 100" */}
      <div className="uk-offcanvas-content">
        <div className={`uk-navbar-container ${transparentNavigation && 'uk-sticky-remove-placeholder' }`} uk-sticky="">
          {preview && <div className="uk-position-top-left uk-position-z-index"><a href="/api/exit-preview" className="uk-button uk-button-small uk-button-danger">Exit Preview Mode</a></div> }
          <nav className="uk-container" uk-navbar="mode: click;">
            <div className="uk-navbar-left">
             
              
              <ul className="uk-navbar-nav">
                <li className="nav_hamburger">
                  <a href="#mobile-navigation" uk-toggle="">
                    <i className="icomoon-menu"></i>
                    </a>
                </li>
                {
                  settings.mainNavigation.children.map((node) =>  
                    <li key={node.id} className="uk-visible@m">
                      <NavigationNode node={node} className="nav_menu_link" />
                    </li>
                  )
                }
              </ul>
            </div>
            <div className="uk-navbar-center">
              <ul className="uk-navbar-nav">
                <li>
                  <Link  as={`/`} href="/">
                    <a className="uk-navbar-item uk-logo">
                      <img
                        src={settings.companyLogo.url}
                        className="h-12 "
                        style={{height: "48px"}}
                        alt="Novaerus"
                        />
                    </a>
                  </Link>
                </li>
               
              </ul>
            </div>
            <div className="uk-navbar-right">
              <ul className="uk-navbar-nav">
                <li className="uk-visible@m">
                  <Link href={"/contact-us"}>
                    <a className="nov-text-semibold">
                      <i className="icomoon-message-square"></i> Contact
                    </a>
                  </Link>
                </li>
                <li className="uk-visible@m">
                  <a href={"https://partners.novaerus.com/logins/sign_in"} className="nov-text-semibold" target="_blank">
                    <i className="icomoon-lock"></i> Partner login
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <main uk-height-viewport="expand: true">
          {children}
        </main>
        <nav id="mobile-navigation" uk-offcanvas="mode: push; overlay: true;">
          <div className="uk-offcanvas-bar uk-padding-remove">
            <div className="uk-container">
              <div className="uk-navbar-center">
                <ul className="uk-navbar-nav">
                  <li>
                    <Link  as={`/`} href="/">
                      <a className="uk-logo">
                        <img
                          src={settings.companyLogo.url}
                          className="h-12 "
                          style={{height: "48px"}}
                          alt="Novaerus"
                          />
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <ul className="uk-nav-primary" uk-nav="">
              {
                settings.mainNavigation.children.map((node, i) =>  
                  <>
                    <li className="uk-nav-divider uk-hidden@m"></li>
                    <li className="uk-hidden@m">
                      <NavigationNode node={node} />
                    </li>

                  </>
                )
              }
              {
                settings.drawerNavigation.children.map((node, i) =>  
                  <>
                    <li className="uk-nav-divider"></li>
                    <li>
                      <NavigationNode node={node} />
                    </li>

                  </>
                )
              }
            </ul>
        
            <ul className="uk-nav-default" uk-nav="">
              <li className="uk-nav-divider"></li>
              <li>
                <Link href={"/contact-us"}>
                  <a className="nov-text-semibold uk-text-uppercase">
                    <i className="icomoon-message-square"></i> Contact
                  </a>
                </Link>
              </li>
              <li className="uk-nav-divider"></li>
              <li>
                <a href={"https://partners.novaerus.com/logins/sign_in"} className="nov-text-semibold uk-text-uppercase" target="_blank">
                  <i className="icomoon-lock"></i> Partner login
                </a>
              </li>
              <li className="uk-nav-divider"></li>
            </ul>
          </div>
        </nav>
        <Footer footer={settings.footer} />
      </div>
    </>
  )
}
