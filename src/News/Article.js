import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { ShareWidget } from '../components/ShareWidget';

function truncate( s, n ){
  return (s.length > n) ? s.substr(0, n-1) + '...' : s;
};

function Article({ article, match }) {
  return (
    <article className="row Article">
      <div className="col-md-5">
        <img 
          src={article.imageUrl} 
          alt={article.title} 
          style={{width: '100%'}}
        />
      </div>
      <div className="col-md-7">
        <h2 style={{lineHeight: '28px'}}>
          <Link to={`${match.url}/${article.title}`}>
            {article.title}
          </Link>
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

        <div style={{fontSize: '13px', color: '#666666'}}>
          {truncate(article.description, 130)}
        </div>
        <ShareWidget url={'127.0.0.210:3000'} />
      </div>
    </article>
  );
}

export default withRouter(Article);
