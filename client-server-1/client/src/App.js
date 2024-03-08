import {
  BrowserRouter,
  Routes,
  Route,
  redirect,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import Goal from "./Components/Goal";
import { useState } from "react";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Login />}> sarebbe componente 
        main che include tutti gli altri ma noi non  abbiamo ancora 
        quel componente padre coi suoifigli che vivono all'interno . 
        C'è una simmetria tra la gerarchia di componenti e la gerarchia
         tra rotte che vanno di pari passo*/}
        <Route index element={<Login />} />
        <Route path="Goal" element={<Goal />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
//  <div className="App">
//       <Login loading={loading} setLoading={setLoading}></Login>
//       {loading && <Goal></Goal>}
//     </div>
