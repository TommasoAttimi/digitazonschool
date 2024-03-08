import { useEffect } from "react";
import { useState } from "react";

export default function CancellaPost() {
  let [posts, setPosts] = useState([]);
  useEffect(function () {
    async function raccogliPost() {
      let res = await fetch("http://localhost:3000/posts");
      let json = await res.json();
      setPosts(json); // aggiorniamo lo stato con le chiamate http per mostrarle a video
    }
    raccogliPost();
  }, []);
  async function removePost(postID) {
    // faccio arrivare qui l'id del post
    // slash alla fine di posts per fare da separatore
    let res = await fetch("http://localhost:3000/comments?postId=" + postID);
    // dal server 3000 prendo tutti i commenti e di questi ne filtro quelli relativi a postID
    // e indico dopo il + quale postID
    let json = await res.json();
    let arrID = json.map(function (commento) {
      // arrID da un array degli id commento (variabile crea array per proprietà delle mappe)
      // commento è l'i-esimo elemento dell'array json
      return commento.id; // abbiamo l'id per ogni commento
    });
    for (let i = 0; i < arrID.length; i++) {
      await fetch("http://localhost:3000/comments/" + arrID[i], {
        method: "DELETE",
        // prendo i-esimo elemento dell'array con dentro tutti gli id dei commento
      });
    }
    // faccio una delete utilizzando l'id che mi è arrivato
    await fetch("http://localhost:3000/posts/" + postID, { method: "DELETE" });
  }

  // per prendere un singolo elemento di una risorsa
  // /risorsa/id
  // ma come facciamo a prendere tutti gli elementi di una risorsa che rispettano
  // una determinata caratteristica? Cioe' nel nostro esempio tutti i commenti
  // che fanno capo ad un determinato post

  // 1) prendo i commenti
  // 2) prendo gli id dei commenti
  //   2.1) per ognuno di questi id faccio una delete (ciclo con map pe prendere gli id nell'array per poterli cancellare)

  return (
    <>
      <h1> CANCELLAZIONE POST</h1>
      <div>
        {posts.map(function (post, i) {
          // post è i-esima riga di posts
          return (
            <div key={i}>
              <span> {post.title}</span>
              {/* // prendiamo i titoli */}
              <button
                onClick={function () {
                  removePost(post.id);
                }}
              >
                CANCELLA
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
