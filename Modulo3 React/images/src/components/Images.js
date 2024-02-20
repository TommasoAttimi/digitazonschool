import React from "react";
import { imageArray } from "../data/images";

export default function Images() {
  let newArray = [];
  for (let i = 0; i < imageArray.length; i++) {
    let url = imageArray[i];
    newArray.push(<img key={i} src={url}></img>);
  }
  return <>{newArray}</>;
}
