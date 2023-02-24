import React from "react";

const SideNewsSingleComponent = ({ item }) => (
  <div>
    <div className="divider"></div>
    <a rel="noopener noreferrer" href={item.url} target="_blank">
      <div className="section text-white">
        <h5>{item.source.name}</h5>
        <p>{item.title}</p>
      </div>
    </a>
  </div>
);

export default SideNewsSingleComponent;
