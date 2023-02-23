import React, { Component } from "react";
import axios from "axios";
import SideNewsSingleComponent from "./side-news-single.component";
import ErrorComponent from "../error/error.component";

class SideNewsComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sideNews: [],
      error: false,
    };
  }

  componentDidMount() {
    const url = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=f8859d8a1d384aeea92486e54343b142`;

    axios
      .get(url)
      .then((response) => {
        this.setState({ sideNews: response.data.articles });
      })
      .catch((e) => {
        this.setState({ error: true });
      });
  }

  renderItems() {
    if (!this.state.error) {
      return this.state.sideNews.map((item, i) => (
        <SideNewsSingleComponent key={i} item={item}></SideNewsSingleComponent>
      ));
    } else {
      return <ErrorComponent />;
    }
  }

  render() {
    return <div>{this.renderItems()}</div>;
  }
}

export default SideNewsComponent;
