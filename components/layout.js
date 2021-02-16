import Alert from '../components/alert'
import Footer from '../components/footer'
import Link from 'next/link'
import {useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import Head from "next/head"
import UIkit from "uikit"
export default function Layout({ preview, children, settings, transparentNavigation = true }) {
  const router = useRouter()
  const [openMenu, setOpenMenu] = useState(false)
  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
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
      <div class="uk-offcanvas-content" uk-scrollspy="target: img:not(.nov-scrollspy-ignore); cls:uk-animation-fade; delay: 100">
        <div className={`uk-navbar-container ${transparentNavigation && 'uk-sticky-remove-placeholder' }`} uk-sticky="">
          <nav className="uk-container" uk-navbar="mode: click;">
            <div className="uk-navbar-left">
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
            <div className="uk-navbar-center uk-visible@m">
              <ul className="uk-navbar-nav">
                {
                  settings.mainNavigation.children.map((node, i) =>  
                    <li key={node.link?.id || i}>
                      <Link as={`/${node?.link?.slug}`} href="/[slug]">
                        <a className="nav_menu_link">{node.label}</a>
                      </Link>
                    </li>
                  )
                }
              </ul>
            </div>
            <div className="uk-navbar-right">
              <ul className="uk-navbar-nav">
                <li class="nav_hamburger">
                  <a href="#mobile-navigation" uk-toggle="">
                    <i class="icomoon-menu"></i>
                    </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <Alert preview={preview} />
        <main uk-height-viewport="expand: true">
          {children}
        </main>
        <nav id="mobile-navigation" uk-offcanvas="mode: push; overlay: true; flip: true;">
          <div class="uk-offcanvas-bar uk-padding-remove">
            <div class="uk-container">
              <div class="uk-navbar-center">
                <ul class="uk-navbar-nav">
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
            <ul class="uk-nav-primary" uk-nav>
              {
                settings.mainNavigation.children.map((node, i) =>  
                  <>
                    <li class="uk-nav-divider"></li>
                    <li>
                      <Link key={node.link?.id || i} as={`/${node?.link?.slug}`} href="/[slug]">
                      <a>{node.label}</a>
                      </Link></li>
                  </>
                )
              }
            </ul>
        
            <ul class="uk-nav-default" uk-nav="">
              <li class="uk-nav-divider"></li>
              <li>
              
                  <i class="icomoon-message-square"></i> Contact
              
              </li>
              <li class="uk-nav-divider"></li>
              <li>
              
                  <i class="icomoon-lock"></i> Partner login
              
              </li>
              <li class="uk-nav-divider"></li>
            </ul>
          </div>
        </nav>
        <Footer footer={settings.footer} />
      </div>
    </>
  )
}
