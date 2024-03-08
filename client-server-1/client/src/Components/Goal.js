import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import { useEffect, useState } from "react";
import AddItem from "./AddItem";
import DeleteItem from "./DeleteItem";
import EditItem from "./EditItem";
export default function Goal() {
  const [products, setProducts] = useState([]);
  const [admin, setAdmin] = useState(false);
  const [checkId, setCheckId] = useState([]);
  const [checkId1, setCheckId1] = useState([]);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  // useEffect(() => {
  //   async function isAdmin() {
  //     let res = await fetch("http://localhost:3000/adm");
  //     let json = await res.json();
  //     let res1 = await fetch("https://fakestoreapi.com/users");
  //     let json1 = await res1.json();
  //     setCheckId(json);
  //     setCheckId1(json1);
  //   }
  //   isAdmin();
  //   for (let i=0;i<checkId.admins.length;i++){
  //     let found=false
  //     for(let j=0; j<checkId1.length;j++){
  //       if(checkId.admins[i]===checkId1.id[j]){
  //         found=true
  //         break
  //       }
  //     }
  //     if(!found)
  //   }
  // });
  useEffect(() => {
    async function loginAdmin() {
      let resAdm = await fetch("http://localhost:3000/adm");
      let json = await resAdm.json(); //admins:[1,5]
      console.log(json);
      let adminArr = json.admins;
      let admInfo = [];
      for (let i = 0; i < adminArr.length; i++) {
        let resUsername = await fetch(
          "https://fakestoreapi.com/users/" + adminArr[i]
        );
        let jsonUser = await resUsername.json();
        admInfo.push(jsonUser);
      }
      let usernameAdm = [];
      for (let i = 0; i < admInfo.length; i++) {
        usernameAdm.push(admInfo[i].username);
      }
      for (let i = 0; i < usernameAdm.length; i++) {
        if (usernameAdm[i] === user.name) {
          setAdmin(true);
        }
      }
    }
    loginAdmin();
  }, []);
  async function DeleteItem(id) {
    let res = await fetch("https://fakestoreapi.com/products/" + id, {
      method: "DELETE",
    });
    let json = await res.json();
    setProducts(products.filter((el) => el.id !== id));
  }
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user.login) {
      navigate("/");
    }
  }, []);

  function logout() {
    localStorage.removeItem("user");
    navigate("/");
  }
  useEffect(() => {
    async function getProducts() {
      let res = await fetch("https://fakestoreapi.com/products");
      let json = await res.json();
      setProducts(json);
    }
    getProducts();
  }, []);
  return (
    <div>
      <header className="header-goal">
        <span>{"Ciao " + user.name + "! 👋🏻 "}</span>
        <button
          type="reset"
          onClick={() => {
            logout();
          }}
        >
          LOGOUT
        </button>
      </header>
      <div className="container-products">
        <h2>Our Products</h2>
        {admin && <AddItem />}
        {products.map(function (product) {
          return (
            <div className="item">
              <h3>{product.title}</h3>

              <img
                className="imgItem"
                id={product.id}
                src={product.image}
                alt={product.title}
              />
              <p>{"$ " + product.price}</p>
              <p>{product.description}</p>
              {admin && <EditItem />}
              {admin && (
                <div>
                  <button
                    onClick={() => {
                      DeleteItem(product.id);
                    }}
                  >
                    DELETE
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* <Link to="/App">Home</Link> */
