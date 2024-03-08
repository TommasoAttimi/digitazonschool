import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); /*è un hook che ci permette di navigare 
    in modo programmatico hook custom*/

  async function submitLogin() {
    if (password !== "" && userName !== "") {
      setLoading(true);
      let res = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: userName,
          password: password,
        }),
      });
      // let resAdm = await fetch("http://localhost:3000/adm");
      // let json = await resAdm.json(); //admins:[1,5]
      // console.log(json);
      // let adminArr = json.admins;
      // let admInfo = [];
      // for (let i = 0; i < adminArr.length; i++) {
      //   let resUsername = await fetch(
      //     "https://fakestoreapi.com/users/" + adminArr[i]
      //   );
      //   let jsonUser = await resUsername.json();
      //   admInfo.push(jsonUser);
      //   console.log(jsonUser);
      // }
      // let usernameAdm = [];
      // for (let i = 0; i < admInfo.length; i++) {
      //   usernameAdm.push(admInfo[i].username);
      // }
      // for (let i = 0; i < usernameAdm.length; i++) {
      //   if (usernameAdm[i] === userName) {
      //   }
      // }

      setLoading(false);
      localStorage.setItem(
        "user",
        JSON.stringify({ login: res.ok, name: userName })
      );

      if (res.status >= 400) {
        setError("error");
        // redirect("/Login");
      } else {
        navigate("/Goal");
      }
    }
    //   let json = await res.json();
    //   console.log(json);

    // }
  }
  return (
    <div className={"form-login " + error}>
      <h1>Login</h1>
      <div className="item-login">
        <label for="userName">User name</label>
        <input
          type="text"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          id="userName"
        ></input>
        <label for="password">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          id="password"
        ></input>
        {loading && <p>loading...</p>}
        <button onClick={submitLogin} className="login-button">
          LOGIN
        </button>
      </div>
    </div>
  );
}
