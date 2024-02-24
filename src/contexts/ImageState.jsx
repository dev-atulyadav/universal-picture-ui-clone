import React, { useState } from "react";
import ImageContext from "./ImageContext";
import Icon_more from "../assets/images/icon-more.png";
import Main_banner from "../assets/images/main-banner.jpg";
import Thumbnail_1 from "../assets/images/thumbnail-1.jpg";
import Thumbnail_2 from "../assets/images/thumbnail-2.jpg";
import Thumbnail_3 from "../assets/images/thumbnail-3.jpg";
import Thumbnail_4 from "../assets/images/thumbnail-4.jpg";
import Thumbnail_5 from "../assets/images/thumbnail-5.jpg";
import Thumbnail_6 from "../assets/images/thumbnail-6.jpg";
import Thumbnail_7 from "../assets/images/thumbnail-7.jpg";
import Thumbnail_8 from "../assets/images/thumbnail-8.jpg";
import Thumbnail_9 from "../assets/images/thumbnail-9.jpg";
import Thumbnail_10 from "../assets/images/thumbnail-10.jpg";
import Thumbnail_11 from "../assets/images/thumbnail-11.jpg";
export default function ImageState(props) {
  const [images] = useState({
    Icon_more,
    Main_banner,
    thumbnails: [
      { img: Thumbnail_1, title: "Argylle", desc: "In theaters now" },
      { img: Thumbnail_2, title: "Night Swim", desc: "Watch at home" },
      { img: Thumbnail_3, title: "Migration", desc: "Watch at home" },
      { img: Thumbnail_4, title: "Oppenheimer", desc: "Back in theaters" },
      {
        img: Thumbnail_5,
        title: "Kung fu panda 4",
        desc: "In theaters March 8",
      },
      {
        img: Thumbnail_6,
        title: "Monkey man",
        desc: "Only in theaters April 5",
      },
      { img: Thumbnail_7, title: "Abigail", desc: "Only in theaters April 19" },
      {
        img: Thumbnail_8,
        title: "The fall guy",
        desc: "Only in theaters may 3",
      },
      {
        img: Thumbnail_9,
        title: "Despicable",
        desc: "Only in theaters July 3",
      },
      { img: Thumbnail_10, title: "Twisters", desc: "In theaters July" },
      { img: Thumbnail_11, title: "Wicked", desc: "In theaters thanksgiving" },
    ],
  });
  return (
    <ImageContext.Provider value={images}>
      {props.children}
    </ImageContext.Provider>
  );
}
