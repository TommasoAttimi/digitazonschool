import { useEffect, useState } from "react";
export default function CreazioneCommento() {
  let [postId, setPostId] = useState("");
  let [text, setText] = useState("");

  async function invia() {
    if (await validazione()) {
      fetch("http://localhost:3000/comments", {
        method: "POST",
        body: JSON.stringify({ text: text, postId: postId }),
      });
    }
  }

  function estrazione(posts) {
    return posts.map(function (post) {
      return post.id;
    });
  }
  async function validazione() {
    let res = await fetch("http://localhost:3000/posts");
    let json = await res.json();
    let ids = estrazione(json);
    return ids.indexOf(postId) > -1;
  }
  return (
    <div>
      <input
        value={postId}
        onChange={function (e) {
          setPostId(e.target.value);
        }}
      />
      <input
        value={text}
        onChange={function (e) {
          setText(e.target.value);
        }}
      />
      <button onClick={invia}>INVIA</button>
    </div>
  );
}
