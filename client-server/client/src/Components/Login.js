import { useState } from "react";

export default function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [passwErr, setPasswErr] = useState("");
  let [mailErr, setMailErr] = useState("");
  let [loginClass, setLoginClass] = useState("");
  let [loading, setLoading] = useState(false);
  async function onClick() {
    if (email == "") {
      setMailErr("error");
    } else {
      setMailErr("");
    }
    if (password == "") {
      setPasswErr("error");
    } else {
      setPasswErr("");
    }
    if (password != "" && email != "") {
      setLoading(true);
      let res = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: email,
          password: password,
        }),
      });
      setLoading(false);
      if (res.status >= 400) {
        setLoginClass("error");
      } else {
        setLoginClass("success");
      }
      let json = await res.json();
      console.log(json);
    }
  }
  return (
    <>
      <div className={"login " + loginClass}>
        <input
          className={mailErr}
          type="email"
          placeholder="email"
          value={email} // passato quando c'è onChange
          onChange={function (e) {
            setEmail(e.target.value); // cambiamo lo stato ad email in modo tale che quando clicco sul campo
            // posso inserire la mail
          }}
        ></input>
        <input
          className={passwErr}
          type="password"
          placeholder="password"
          value={password} // passato quando c'è onChange
          onChange={function (e) {
            setPassword(e.target.value); // cambiamo lo stato a pw in modo tale che quando clicco sul campo
            // posso inserire la pw
          }}
        ></input>
        <button className="login-button" onClick={onClick}>
          LOGIN
        </button>
        {loading && <span>Loading...</span>}
        {loading || <span>user non ha cliccato</span>}
      </div>
    </>
  );
}

// differenza tra if e &&
// if non ritorna una espressione, cosa vuol dire?
// vuol dire che non posso fare una cosa di questo tipo
// let x = if (true) { qualcosa}
// invece l'&& ritorna una espressione quindi posso fare
// let x = true && qualcosa
// anche l'operatore ternario ritorna una espressione
// let x = true ? qualcosa : altro
