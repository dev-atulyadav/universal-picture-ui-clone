import React, { useState } from "react";
import ImageContext from "./ImageContext";
import Icon_more from "../assets/images/icon-more.png";
export default function ImageState(props) {
  const [images] = useState({
    Icon_more,
  });
  return (
    <ImageContext.Provider value={images}>
      {props.children}
    </ImageContext.Provider>
  );
}
