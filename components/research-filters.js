import ArticleCard from "./article-card";
import Link from "next/link"
import { useState} from "react";
export default function WidgetResearch({metaInfo, researchLinkCollection, researchArticleCollections, research: {testResultsBody}}) {
  
  const [activeTabIndex, setActiveTabIndex] = useState(0)
  const [filterValue, setFilterValue] = useState("")
  const [searchValue, setSearchValue] = useState("")

  const handleSearchFocus = () => {
    if (activeTabIndex === 0) {
      setActiveTabIndex(1)
    }
  }
  
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value.toLowerCase())
    // remove the following line for search and filter combined results
    if (filterValue != "") {
      setFilterValue("")
    }
  }
  const handleFilterChange = (e) => {
    setFilterValue(e.target.value)
    // remove the following line for search and filter combined results
    if (searchValue != "") {
      setSearchValue("")
    }
  }

  function TabSection({collection, isActive}) {

    const items =  collection.items.filter((item) => {
      if (filterValue === "") {
        return item
      } else if (item.url && item.url.includes(filterValue)) {
        return item
      }
    }).filter((item) => {
      if(searchValue == "")
          return item
      else if(item.name && item.name.toLowerCase().includes(searchValue) || item.excerpt && item.excerpt.toLowerCase().includes(searchValue)) {
          return item
      }
    }).map((item) => <ArticleCard article={item} /> );
    return (
      <li className={`uk-animation-fade ${isActive && "uk-active"}`}>
        <div uk-grid="masonry: true" className="uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-3@m">
          {items}
        </div>
      </li>
    )
  }

  return (
    <div className="uk-section">
      <div className="uk-container">
        <div className="uk-margin-auto uk-width-large uk-margin-medium-bottom">
          <ul className="uk-flex-center uk-subnav uk-subnav-pill uk-margin-remove-bottom" uk-switcher="connect: #filters">
            <li className="uk-active"><a href="#">Search</a></li>
            <li><a href="#">Filter</a></li>
          </ul>
          <div className="uk-padding-small uk-background-muted">
            <ul className="uk-switcher" id="filters">
              <li className="uk-active">
                <form className="uk-search uk-search-default uk-width-1-1">
                  <a href="" className="uk-search-icon-flip" uk-search-icon=""></a>
                  <input placeholder="Search articles" onChange={handleSearchChange} onFocus={handleSearchFocus} className="uk-input" />
                </form>
              </li>
              <li>
                <select onChange={handleFilterChange} onFocus={handleSearchFocus} className="uk-select" dangerouslySetInnerHTML={{__html: "<option value=''>All Research</option>" + metaInfo.articleOptions}} />
              </li>
            </ul>
          </div>
        </div>
        <div className="uk-margin-auto uk-width-xxlarge uk-margin-medium-bottom">
          <ul className="uk-flex-center uk-tab" uk-tab="connect: #articles">
            <li data-index={0} className={0 === activeTabIndex && "uk-active"}><a onClick={() => setActiveTabIndex(0)}>{`Test Results`}</a></li>
            {
              ["Lab studies", "Clinical trials", "Case studies"].map((tabLink, i) =>
                <li data-index={i + 1} className={i + 1 === activeTabIndex && "uk-active"}><a onClick={() => setActiveTabIndex(i+1)}>{tabLink}</a></li>
              )
            }
          </ul>
        </div>

        <ul className="uk-switcher" id="articles">
          <li className={0 === activeTabIndex && "uk-active"}>
            <div className="uk-container uk-container-small uk-text-center uk-margin-medium-bottom" dangerouslySetInnerHTML={{__html: testResultsBody}} />
            {
              researchLinkCollection.children.map(collection =>
                <div className="table-link-container">
                  <div className="outer-image-section">
                      <div className="image-section">
                        {collection.featured_image && <img src={collection.featured_image} width="60" alt=""/>}
                      </div>
                    <div>
                      <h3 className="section-name">
                        {collection.name}
                      </h3>
                    </div>
                  </div>
                  <div>
                    <table className="uk-table uk-table-divider research-table-body">
                    <tr>
                      <th>Name</th>
                      <th>Reduc<span className="hide-mid">tion</span><span className="show-mid">.</span></th>
                      <th className="hide-mobile">Time</th>
                      <th className="hide-mobile">Space</th>
                      <th>Model</th>
                    </tr>
                    {
                      collection.items.map((item) => 
                        <tr>
                          <td>
                            <Link as={item.excerpt} href="/research/[:id]">
                              <a className="link-style" dangerouslySetInnerHTML={{__html: item.name}} />
                            </Link>
                          </td>
                          <td>
                            {item.author}
                          </td>
                          <td className="hide-mobile">
                            {item.url}
                          </td>
                          <td className="hide-mobile" dangerouslySetInnerHTML={{__html: item.citation}} />
                          <td>
                            {item.aside}
                          </td>
                        </tr>
                      )
                    }
                    
                </table>
              </div>
            </div>
              )
            }
           
          </li>
          {
            researchArticleCollections.map((collection, i) =>
              <TabSection key={i} collection={collection} isActive={activeTabIndex === i+1} />
            )
          }
         
        </ul>
      </div>
    </div>
  )
}