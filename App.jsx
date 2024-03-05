import { useState } from "react";
import NavBar from "./src/assets/components/NavBar.jsx";
import "./src/assets/styles/styles.css";
import Login from "./src/assets/components/Login.jsx";
import FindDate from "./src/assets/components/FindDate.jsx";
import Specialities from "./src/assets/components/Specialities.jsx";
import SearchServices from "./src/assets/components/SearchServices.jsx";
import UserRegister from "./src/assets/components/UserRegister.jsx";
import LoginPage from "./src/assets/components/Login.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <div className="container-fluid d-flex">
        <div className="col">
          <div className="row bg-mint mt-8">
            <div className="col">
              <Login />
            </div>
            <div className="col background-img-doctor">
              <div className="float-end"></div>
            </div>
          </div>
        </div>
      </div>
      <FindDate />
      <SearchServices />
      <Specialities />
      <LoginPage />
      <UserRegister />

      <p>Texto prueba</p>
    </>
  );
}

export default App;
