import Alert from '../components/alert'
import Footer from '../components/footer'
import Link from 'next/link'
import {useState, useEffect} from 'react'
import { useRouter } from 'next/router'

export default function Layout({ preview, children, settings }) {
  const router = useRouter()
  const [openMenu, setOpenMenu] = useState(false)
  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      setOpenMenu(false)
    }
    router.events.on('routeChangeStart', handleRouteChange)
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [])
  
  return (
    <>
        <div className="min-h-screen">
          <nav>
            <div className="relative bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 lg:justify-start lg:space-x-10">
                  <div className="flex justify-start lg:w-0 lg:flex-1">
                    <a href="#">
                      <span className="sr-only">Workflow</span>
                      
                      <img
                          src={settings.companyLogo.url}
                          className="h-12 "
                          alt="Novaerus"
                        />
                      
                    </a>
                  </div>
                  <div className="-mr-2 -my-2 lg:hidden">
                    <button onClick={() => setOpenMenu(!openMenu)} type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Open menu</span>
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    </button>
                  </div>
                  <nav className="hidden lg:flex space-x-5">
                      {
                        settings.mainNavigation.children.map((node, i) =>  
                          <Link key={node.link?.id || i} as={`/${node?.link?.slug}`} href="/[slug]">
                            <a className="text-base font-small text-gray-500 hover:text-gray-900">{node.label}</a>
                          </Link>
                        )
                      }
                  </nav>
                  <div className="hidden lg:flex items-center justify-end md:flex-1 lg:w-0">
                    <a href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                      Sign in
                    </a>
                    <a href="#" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                      Sign up
                    </a>
                  </div>
                </div>
              </div>
              <div className={`absolute top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden ${openMenu ? "ease-out duration-200 opacity-100 scale-100" : "ease-in duration-100 opacity-0 scale-95"}`} style={openMenu ? {} : {}} >
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                  <div className="pt-5 pb-6 px-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <img
                            src={settings.companyLogo.url}
                            className="h-12 "
                            alt="Novaerus"
                          />
                      </div>
                      <div className="-mr-2">
                        <button onClick={()=> setOpenMenu(!openMenu)} type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span className="sr-only">Close menu</span>
            
                          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="mt-6">
                      <nav className="grid gap-y-8">
                        {
                          settings.mainNavigation.children.map((node, i) =>  
                            <Link key={node.link?.id || i} as={`/${node?.link?.slug}`} href="/[slug]">
                              <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                              <span className="ml-3 text-base font-medium text-gray-900">
                                {node.label}
                              </span>
                              </a>
                            </Link>
                          )
                        }
                        <a href="#" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">

                          <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                          <span className="ml-3 text-base font-medium text-gray-900">
                            Analytics
                          </span>
                        </a>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>        
            </div>
          </nav>
          <Alert preview={preview} />
          <main>{children}</main>
        </div>
      <Footer />
    </>
  )
}
