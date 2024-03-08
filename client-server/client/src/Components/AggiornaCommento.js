import { useState, useEffect } from "react";
export default function AggiornaCommento() {
  let [commenti, setCommenti] = useState([]);

  useEffect(function () {
    async function commenti() {
      let res = await fetch("http://localhost:3000/comments");
      let json = await res.json();
      setCommenti(json);
    }
    commenti();
  }, []);

  async function aggiornaCommento(commento) {
    let res = await fetch("http://localhost:3000/comments/" + commento.id, {
      // ricordiamoci che PUT modifica l'oggetto lato server
      // impostandoci solo e soltanto gli attributi che specifichiamo
      // nella richiesta
      // quindi se non mettiamo qualcosa, cio' che non abbiamo messo
      // e' perso
      // se non vogliamo questo dobbiamo usare PATCH
      method: "PUT",
      body: JSON.stringify({ text: commento.text, postId: commento.postId }),
    });
    let json = await res.json();
    console.log(json);
  }
  return (
    <div>
      <h1>AGGIORNA COMMENTO</h1>
      {commenti.map(function (commento, i) {
        return (
          <div key={i}>
            <input
              type="text"
              value={commento.text}
              // data-id={commento.id}
              // onChange={function (e) {
              //   let id = e.target.getAttribute("data-id");
              //   let com = commenti.find((c) => c.id == id);
              //   com.text = e.target.value;
              //   setCommenti([...commenti]);
              // }}
              onChange={function (e) {
                let nuoviCommenti = commenti.map(function (com) {
                  if (commento.id === com.id) {
                    com.text = e.target.value;
                  }
                  return com;
                });
                setCommenti(nuoviCommenti);
              }}
            />
            <button
              onClick={function () {
                aggiornaCommento(commento);
              }}
            >
              EDIT
            </button>
          </div>
        );
      })}
    </div>
  );
}
