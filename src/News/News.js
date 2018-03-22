import React, { Component } from 'react';
import { db } from '../firebase';
import Article from './Article';

class News extends Component {
  state = {
    news: {}
  }

  componentDidMount() {
    db.onceGetNews()
      .then(snapshot => {
        this.setState({news: snapshot.val()})
      })
  }

  render() {
    const { news } = this.state;
    return (
      <div>
        {news && <Article news={news} />}
      </div>
    );
  }
}

export default News;
