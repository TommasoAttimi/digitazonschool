import { useState } from "react";
import { imageArray } from "../data/images";
import { Images } from "./Images";

export default function Remove() {
  const [visibleImages, setVisibleImages] = useState(newArray);
  function deleteItem() {
    let updatedImages = [...visibleImages];
    updatedImages.splice(i, 1);
    setVisibleImages(updatedImages);
  }
  return (
    <div>
      <button onClick={deleteItem(i)}>Delete</button>Delete
    </div>
  );
}
