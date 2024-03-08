import { useState } from "react";
export default function EditItem() {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState("");
  async function modify() {
    await fetch("https://fakestoreapi.com/products/" + id, {
      method: "PATCH",
      body: JSON.stringify({
        title: title,
        image: url,
        price: price,
        description: description,
      }),
    });
  }
  return (
    <div>
      <label for="id">Id</label>
      <input
        type="text"
        id="id"
        value={id}
        onChange={(e) => {
          setId(e.target.value);
        }}
      ></input>
      <label for="title">Title</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      ></input>
      <label for="image">url</label>
      <input
        type="text"
        id="image"
        value={url}
        onChange={(e) => {
          setUrl(e.target.value);
        }}
      ></input>
      <label for="price">Price</label>
      <input
        type="text"
        id="price"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      ></input>
      <label for="description">Description</label>
      <input
        type="text"
        id="description"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          modify();
        }}
      >
        EDIT
      </button>
    </div>
  );
}
