import {useState, useEffect} from 'react'

export default function WidgetFindRepresentative({widget: {title, description, backgroundImage, filterTitle, filterDefaultLabel }}) {
  const [distributors, setDistributors] = useState([]);
  const [filter, setFilter] = useState("");
  const countryOptions = [...new Set(distributors.map(item => item.country))];

  useEffect(() => {
    const fetchDistributors = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_CMSIFY_HOST}/api/distributors.json`
      );
      const data = await res.json()
      setDistributors(data.distributors);
    };
 
    fetchDistributors();
  }, []);


  return (
    <>
      <div className="uk-section-small">
        <div className="uk-container">
          <div className="uk-width-xlarge uk-margin-auto uk-text-center">
            {title && <h1 className="uk-margin-medium-bottom uk-text-warning" dangerouslySetInnerHTML={{__html: title}} />}
            {description && <div className="uk-text-large" dangerouslySetInnerHTML={{__html: description}}/>}
          </div>
        </div>
      </div>
      <div uk-img="" data-srcset={backgroundImage.responsiveImage.srcSet} data-sizes={backgroundImage.responsiveImage.sizes} className="uk-section uk-background-cover ">
        <div className="uk-container">
          <div className="uk-width-xlarge uk-margin-auto uk-padding uk-background-default">
            <h4>{filterTitle}</h4>
            <select className="uk-select" onChange={(e) => setFilter(e.target.value)}>
              <option value="">{filterDefaultLabel}</option>
              {
                countryOptions.map((country) => <option value={country}>{country}</option>)
              }
            </select>
          </div>
        </div>
      </div>
      {
        <div className="uk-section uk-section-small">
          <div className="uk-container">
            <div uk-grid="" className="uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-3@m uk-grid-medium uk-grid-match uk-flex uk-flex-center ">
              {
                distributors.filter(d => d.country === filter || filter === "").map(({country, name, phone, fax, email, url, id}) => 
                  <div key={id} className="">
                    <div className="uk-card uk-card-default uk-height-1-1 uk-animation-fade">
                      <div className="uk-card-body">
                        <h6 className="uk-text-warning uk-margin-small-bottom">{ country }</h6>
                        <h3 className="uk-margin-remove-top">{ name }</h3>
                        <hr uk-margin="" />
                        <div className="">
                          <ul className="uk-list">
                            {phone && <li>Tel: {phone}</li>}
                            {fax && <li>Fax: {fax}</li>}
                            {email && <li>Email: {email}</li>}
                            {url && <li><a href={`https://${url}`} target="_blank">{url}</a></li>}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }
            </div>
          </div>
        </div>
      }
    </>
  )
}