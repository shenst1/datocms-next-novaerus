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
      } else if (item.url.includes(filterValue)) {
        return item
      }
    }).filter((item) => {
      if(searchValue == "")
          return item
      else if(item.name.toLowerCase().includes(searchValue) || item.excerpt.toLowerCase().includes(searchValue)) {
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
    <div class="uk-section">
      <div class="uk-container">
        <div class="uk-margin-auto uk-width-large uk-margin-medium-bottom">
          <ul class="uk-flex-center uk-subnav uk-subnav-pill uk-margin-remove-bottom" uk-switcher="connect: #filters">
            <li class="uk-active"><a href="#">Search</a></li>
            <li><a href="#">Filter</a></li>
          </ul>
          <div class="uk-padding-small uk-background-muted">
            <ul class="uk-switcher" id="filters">
              <li class="uk-active">
                <form className="uk-search uk-search-default uk-width-1-1">
                  <a href="" class="uk-search-icon-flip" uk-search-icon=""></a>
                  <input placeholder="Search articles" onChange={handleSearchChange} onFocus={handleSearchFocus} className="uk-input" />
                </form>
              </li>
              <li>
                <select onChange={handleFilterChange} onFocus={handleSearchFocus} className="uk-select" dangerouslySetInnerHTML={{__html: "<option value=''>All Research</option>" + metaInfo.articleOptions}} />
              </li>
            </ul>
          </div>
        </div>
        <div class="uk-margin-auto uk-width-xxlarge uk-margin-medium-bottom">
          <ul class="uk-flex-center uk-tab" uk-tab="connect: #articles">
            <li data-index={0} className={0 === activeTabIndex && "uk-active"}><a onClick={() => setActiveTabIndex(0)}>{`Test Results`}</a></li>
            {
              ["Lab studies", "Clinical trials", "Case studies"].map((tabLink, i) =>
                <li data-index={i + 1} className={i + 1 === activeTabIndex && "uk-active"}><a onClick={() => setActiveTabIndex(i+1)}>{tabLink}</a></li>
              )
            }
          </ul>
        </div>

        <ul class="uk-switcher" id="articles">
          <li className={0 === activeTabIndex && "uk-active"}>
            <div className="uk-container uk-container-small uk-text-center uk-margin-medium-bottom" dangerouslySetInnerHTML={{__html: testResultsBody}} />
            {
              researchLinkCollection.children.map(collection =>
                <div class="table-link-container">
                  <div class="outer-image-section">
                      <div class="image-section">
                        {collection.featured_image && <img src={collection.featured_image} width="60" alt=""/>}
                      </div>
                    <div>
                      <h3 class="section-name">
                        {collection.name}
                      </h3>
                    </div>
                  </div>
                  <div>
                    <table class="uk-table uk-table-divider research-table-body">
                    <tr>
                      <th>Name</th>
                      <th>Reduc<span class="hide-mid">tion</span><span class="show-mid">.</span></th>
                      <th class="hide-mobile">Time</th>
                      <th class="hide-mobile">Space</th>
                      <th>Model</th>
                    </tr>
                    {
                      collection.items.map((item) => 
                        <tr>
                          <td>
                            <Link as={item.excerpt} href="/research/[:id]">
                              <a class="link-style" dangerouslySetInnerHTML={{__html: item.name}} />
                            </Link>
                          </td>
                          <td>
                            {item.author}
                          </td>
                          <td class="hide-mobile">
                            {item.url}
                          </td>
                          <td class="hide-mobile" dangerouslySetInnerHTML={{__html: item.citation}} />
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