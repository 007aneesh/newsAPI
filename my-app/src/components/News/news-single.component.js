import React from "react";
import unloadedImg from "../../images/unloaded_img.png";
const NewsSingleComponent = ({ item }) => (
  <div className="col s4  mb-4 contents">
    <div className="card bg-black border-b-2" style={{ margin: "1rem" }}>
      <div className="card-image h-3/6">
        <img
          className="h-full"
          srcSet={item.urlToImage}
          src={unloadedImg}
          alt={item.title}
        ></img>
        {/* <span className="card-title">{item.source.name}</span> */}
      </div>
      <div className="card-content h-2/6 bg-black">
        <a
          className="#ffffff white-text hover:underline"
          rel="noopener noreferrer"
          href={item.url}
          target="_blank"
        >
          <h1 className=" font-semibold text-white">{item.title}</h1>
        </a>
      </div>
    </div>
  </div>
);

export default NewsSingleComponent;
