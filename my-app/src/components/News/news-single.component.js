import React from "react";
import unloadedImg from "../../images/unloaded_img.png";
const NewsSingleComponent = ({ item }) => (
  <div className="col s4  mb-4 contents">
    <div className="card" style={{ margin: "1rem" }}>
      <div className="card-image h-3/6">
        <img
          className="h-full"
          srcSet={item.urlToImage}
          src={unloadedImg}
          alt={item.title}
        ></img>
        <span className="card-title">{item.source.name}</span>
      </div>
      <div className="card-content h-2/6">
        <h1 className=" font-semibold ">{item.title}</h1>
      </div>
      <div className="card-action h-1/6 ">
        <a rel="noopener noreferrer" href={item.url} target="_blank">
          Full article
        </a>
      </div>
    </div>
  </div>
);

export default NewsSingleComponent;
