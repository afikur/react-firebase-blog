import React from 'react';

import './ArticlesList.css';
import Article from './Article';

function ArticlesList({news}) {
  return (
    <div className="Article container">
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          {Object.keys(news).map(key =>
            <React.Fragment key={key}>
              <Article article={news[key]} />
              <hr style={{margin: '36px 0', borderColor: '#f0f0f0'}} />
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  )
}

export default ArticlesList;
