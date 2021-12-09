import React from "react";
import "./style.css";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });

  return <div className="Image-list">{images}</div>;
};

export default ImageList;
