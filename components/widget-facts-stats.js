import { Image } from 'react-datocms'
export default function WidgetFactsStats({widget: {header, description, columns, rows }}) {
  return (
    <div className="uk-section uk-background-secondary uk-light">
      <div className="uk-container">
        <div className="uk-width-xxlarge uk-margin-auto uk-text-center">
          { header && <h1>{header}</h1> }
          {description && <div dangerouslySetInnerHTML={{__html: description }} />}
          {
            columns && 
            <div uk-grid="" className="uk-margin-medium-top uk-child-width-1-1 uk-child-width-1-3@s">
              {columns.map((column) => 
                <div key={column.id}>
                  <Image  data={{ ...column.image.responsiveImage, alt:'' }} />
                  {column.caption && <h4 className="uk-margin-remove-bottom uk-margin-small">{column.caption}</h4>}
                </div>
              )}
            </div>
          }
          {
            rows &&
              <div uk-grid="" className="uk-margin-medium-top  uk-flex uk-flex-middle uk-flex-wrap">
                {rows.map((row) => 
                  <>
                    <div className="uk-width-1-1 uk-width-2-5@s">
                      <Image  data={{ ...row.image.responsiveImage, alt:'' }} />  {row.caption && <h4 className="uk-margin-remove-bottom uk-margin-small">{row.caption}</h4>}
                    </div>
                    <div className="uk-width-1-1 uk-width-3-5@s uk-text-left@s">
                      {row.caption && <h4 className="uk-margin-remove-bottom uk-margin-small">{row.caption}</h4>}
                    </div>
                  </>
                )}
              </div>
          }
        </div>
      </div>
    </div>
  )
}