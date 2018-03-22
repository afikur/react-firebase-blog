import React from 'react';
import './Article.css';
import Share from './Share';

function Article({news}) {
  return (
    <div className="Article container">
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          {Object.keys(news).map(key => 
            <React.Fragment key={key}>
              <article className="row" style={{}}>
                <div className="col-5">
                  <img src={news[key].imageUrl} alt="" className="img-fluid" style={{width: '100%'}}/>
                </div>
                <div className="col-7">
                  <h2 style={{lineHeight: '24px'}}>
                    <a
                      href=""
                      style={{
                        fontSize: '22px',
                        fontWeight: '700',
                        letterSpacing: '-0.4px',
                        margin: '0 0 5px',
                        textTransform: 'none',
                        color: '#000'}}>

                      {news[key].title}
                    </a>
                  </h2>
                  <div 
                    style={{
                      display: 'block',
                      width: '80px',
                      height: '1px',
                      backgroundColor: '#f0f0f0',
                      margin: '10px 0'
                    }}
                  />
      
                  <p style={{fontSize: '13px', color: '#666666'}}>{news[key].description}</p>
                  <Share />
                </div>
              </article>
              <hr style={{margin: '36px 0'}} />
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  )
}

export default Article;
