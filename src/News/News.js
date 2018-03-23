import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { db } from '../firebase';
import ArticlesList from './ArticlesList';
import * as routes from '../constants/routes';

class News extends Component {
  state = {
    news: {},
    loading: false
  }

  componentDidMount() {
    this.setState({loading: true})
    db.onceGetNews()
      .then(snapshot => {
        this.setState({
          news: snapshot.val(),
          loading: false
        })
      })
  }

  render() {
    const { news, loading } = this.state;
    return (
      <Switch>
        <Route exact path={routes.news} render={() => (
          <div>
            {loading && <p>Loading...</p>}
            {news && <ArticlesList news={news} />}
          </div>
        )} />
        <Route exact path={routes.singleArticle} render={()=> (<div>Single Article</div>)} />
        <Route render={() => <div>404</div>} />
      </Switch>
    );
  }
}

export default News;
