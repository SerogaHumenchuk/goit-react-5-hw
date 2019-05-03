import React, { Component } from 'react';
import Article from './Article/Article';
import Pagination from './Pagination/Pagination';
import s from './Reader.module.css';

export default class Reader extends Component {
  state = {
    idx: 0,
  };

  handleNextArticle = () => {
    const { idx } = this.state;
    const { items } = this.props;
    if (idx < items.length - 1) {
      this.setState(prevState => ({ idx: (prevState.idx += 1) }));
    }
  };

  handlePrevArticle = () => {
    const { idx } = this.state;
    if (idx > 0) {
      this.setState(prevState => ({ idx: (prevState.idx -= 1) }));
    }
  };

  render() {
    const { idx } = this.state;
    const { items } = this.props;
    return (
      <div className={s.reader}>
        <Article item={items[idx]} />
        <Pagination
          idx={idx}
          items={items}
          onPrevArticle={this.handlePrevArticle}
          onNextArticle={this.handleNextArticle}
        />
      </div>
    );
  }
}
