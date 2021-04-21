import Link from 'next/link'
import { useRouter } from 'next/router'
import Head from "next/head"
import {useEffect, useState } from "react"
import UIkit from "uikit"
import Footer from "../components/footer"
import NavigationNode from "../components/navigation-node"
import {CopyToClipboard} from 'react-copy-to-clipboard';
import React from 'react'
export default function Layout({ preview, children, settings, transparentNavigation = true }) {
  
  const router = useRouter();
  const asPath = router.asPath.substring(1);

  useEffect(() => {
    // TODO: save this result to local storage
    // Using the next.js api adds an extra api call, but it protects the private info of the telize country service
    const checkRequestCountry = async () => {
      const res = await fetch("/api/country");
      const data = await res.json()
      if (router.locale !== "en-US" && data.country_code === "US" ) {
        router.push(router.asPath, router.asPath, { locale: 'en-US' })
      } 
      if (router.locale === "en-US" && data.country_code !== "US") {
        router.push(router.asPath, router.asPath, { locale: '' })
      }
    };
    checkRequestCountry();
  }, [])
  
  useEffect(() => {
    const handleRouteChange = () => {
      UIkit.offcanvas('#mobile-navigation').hide()
    }
    router.events.on('routeChangeStart', handleRouteChange)
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [])

  const [origin, setOrigin] = useState()
  useEffect(() => {
    setOrigin(window.location.origin)
  })

  const copyToClipboardSuccess = () => {
    UIkit.notification({
      message: `Preview link copied to clipboard!`,
      pos: 'top-left',
      timeout: 2000
   });
  }
 
  return (
    <>
      <Head>
          <link rel="stylesheet" href="//s3.amazonaws.com/icomoon.io/29147/NOV-Novaerus/style.css?jdh7bk" />
      </Head>
      {/* uk-scrollspy="target: img:not(.nov-scrollspy-ignore); cls:uk-animation-fade; delay: 100" */}
      <div className="uk-offcanvas-content">
        <div className={`uk-navbar-container ${transparentNavigation && 'uk-sticky-remove-placeholder' }`} uk-sticky="">
          {preview && 
            <div className="uk-position-top-left uk-position-z-index">
              <a href="/api/exit-preview" className="uk-button uk-button-small uk-button-danger">Exit Preview Mode</a>
              <CopyToClipboard text={`${origin}/api/preview?secret=${process.env.NEXT_PUBLIC_PREVIEW_SECRET}&path=${asPath}`}
                onCopy={copyToClipboardSuccess}>
                <button className="uk-button uk-button-small uk-button-danger" style={{marginLeft: "3px" }}>
                  <svg height="18" width="18" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                  </svg>
                </button>
              </CopyToClipboard>
            </div> }
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
              <ul className="uk-navbar-nav uk-visible@m">
                {
                  settings.iconLinks.map((iconLink) => 
                    <li key={iconLink.id}>
                      <NavigationNode className="nov-text-semibold" left node={iconLink.navigationNode} icon={"icomoon-" + iconLink.icomoonIconName} />
                    </li>
                  )
                }
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
                settings.mainNavigation.children.map((node) =>  
                  <React.Fragment key={node.i}>
                    <li className="uk-nav-divider uk-hidden@m"></li>
                    <li className="uk-hidden@m">
                      <NavigationNode node={node} />
                    </li>
                  </React.Fragment>
                )
              }
              {
                settings.drawerNavigation.children.map((node) =>  
                  <React.Fragment key={node.i}>
                    <li className="uk-nav-divider"></li>
                    <li>
                      <NavigationNode node={node} />
                    </li>
                  </React.Fragment>
                )
              }
            </ul>
        
            <ul className="uk-nav-default" uk-nav="">
              {
                settings.iconLinks.map((iconLink) => 
                  <React.Fragment key={iconLink.id}>
                    <li className="uk-nav-divider"></li>
                    <li key={iconLink.id}>
                      <NavigationNode className="nov-text-semibold uk-text-uppercase" left node={iconLink.navigationNode} icon={"icomoon-" + iconLink.icomoonIconName} />
                    </li>
                  </React.Fragment>
                )
              }
              <li className="uk-nav-divider"></li>
            </ul>
          </div>
        </nav>
        <Footer footer={settings.footer} />
      </div>
    </>
  )
}
