import { useEffect, useState } from "react";
export default function CancellazioneCommenti() {
  let [commenti, setCommenti] = useState([]);
  useEffect(function () {
    async function recuperaCommenti() {
      let res = await fetch("http://localhost:3000/comments");
      let json = await res.json();
      setCommenti(json);
    }
    recuperaCommenti();
  }, []);

  async function remove(idcommento) {
    let res = await fetch("http://localhost:3000/comments/" + idcommento, {
      method: "DELETE",
    });
    let json = await res.json();
    setCommenti(commenti.filter((el) => el.id !== idcommento));
  }
  return (
    <div>
      <h1>CANCELLAZIONE COMMENTI</h1>

      {commenti.map(function (commento, i) {
        return (
          <div key={i}>
            <p>{commento.text}</p>
            <button
              onClick={function () {
                remove(commento.id);
              }}
            >
              X
            </button>
          </div>
        );
      })}
    </div>
  );
}
