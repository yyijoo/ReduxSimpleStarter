import React, { Component } from "react";
import { connect } from "react-redux";

import { showConsolelog } from "../actions/index";
import { bindActionCreators } from "redux";

class ArticleLists extends Component {
  render() {
    return (
      <div>
        <span>하하</span>
        {this.props.article.map(article => {
          return (
            <li onClick={() => this.props.consolelog(article)}>
              {article.writer}
            </li>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    article: state.articles
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ consolelog: showConsolelog }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleLists);
