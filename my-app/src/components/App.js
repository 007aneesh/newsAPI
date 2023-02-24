import "./App.css";
import React, { Component } from "react";
import News from "./News/news.component";
import SideNews from "./News/side-news.component";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news1: {
        type: "top-headlines",
        query: "country=in",
      },
      news2: {
        type: "everything",
        query: "domains=techcrunch.com&language=en",
      },
      news3: {
        type: "everything",
        query: "domains=bbc.co.uk&language=en",
      },
    };
  }
  render() {
    return (
      <div className="containwer-fluid bg-black">
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper bg-black">
              <a
                href="/"
                className="bran-logo flex justify-center font-bold align-middle text-2xl h-full  text-white"
              >
                Latest feed
              </a>
            </div>
          </nav>
        </div>
        <div className="row">
          <div className="col s8">
            <News news={this.state.news1} />
            <News news={this.state.news2} />
          </div>
          <div className="col s4">
            <SideNews news={this.state.news3} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
