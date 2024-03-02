import { useState } from "react";
import NavBar from "./src/assets/components/NavBar.jsx";
import "./src/assets/styles/styles.css";
import Login from "./src/assets/components/Login.jsx";

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
            <div className="col">
              <div className="float-end">
                <div className="row">
                  <div className="col"></div>
                </div>
                <img
                  src="./src/assets/img/medico2.png"
                  alt="Fotografía de un médico"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p>Texto prueba</p>
      <p>Texto prueba</p>
      <p>Texto prueba</p>
      <p>Texto prueba</p>
      <p>Texto prueba</p>
      <p>Texto prueba</p>
      <p>Texto prueba</p>
      <p>Texto prueba</p>
      <p>Texto prueba</p>
      <p>Texto prueba</p>
      <p>Texto prueba</p>
      <p>Texto prueba</p>
      <p>Texto prueba</p>
      <p>Texto prueba</p>
      <p>Texto prueba</p>
      <p>Texto prueba</p>
      <p>Texto prueba</p>
      <p>Texto prueba</p>
      <p>Texto prueba</p>
      <p>Texto prueba</p>
      <p>Texto prueba</p>
      <p>Texto prueba</p>
      <p>Texto prueba</p>
      <p>Texto prueba</p>
      <p>Texto prueba</p>
      <p>Texto prueba</p>
      <p>Texto prueba</p>
      <p>Texto prueba</p>
      <p>Texto prueba</p>
      <p>Texto prueba</p>
    </>
  );
}

export default App;
