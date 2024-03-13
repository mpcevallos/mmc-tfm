import { useState, useEffect } from "react";
import NavBar from "./src/assets/components/NavBar.jsx";
import "./src/assets/styles/styles.css";
import Login from "./src/assets/components/Login.jsx";
import Specialities from "./src/assets/components/Specialities.jsx";
import UserRegister from "./src/assets/components/UserRegister.jsx";
import Appointment from "./src/assets/components/Appointment.jsx";
import LoginPage from "./src/assets/components/LoginPage.jsx";

function App() {
  const [token, setToken] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Verifica si hay un token almacenado en el localStorage al cargar el componente
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      // Si hay un token, establece el estado del token
      setToken(storedToken);
    }
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredSpecialities = specialitiesData.filter((speciality) =>
    speciality.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const onLoginComplete = (error, token) => {
    if (error) {
      // Maneja errores de inicio de sesión
      localStorage.clear();
      setToken(null);
    } else {
      // Si el inicio de sesión es exitoso, actualiza el estado del token
      setToken(token);

      // Puedes realizar otras acciones aquí después del inicio de sesión exitoso
    }
  };

  return (
    <>
      {token ? (
        // Si estás logueado, muestra el componente FindDate centrado
        <div className="container-fluid text-center">
          <div className="row bg-mint mt-8">
            <div className="col-lg-12">
              <Login onLoginComplete={onLoginComplete} />
            </div>
          </div>
        </div>
      ) : (
        <UserRegister />
      )}
      {!token ? (
        // Si estás logueado, muestra el componente Specialities centrado
        <div className="container-fluid text-center">
          <div className="row bg-mint mt-8">
            <div className="col-lg-12">
              <Login onLoginComplete={onLoginComplete} />
            </div>
          </div>
        </div>
      ) : (
        
      )}
      {!token ? (
        // Si no estás logueado, muestra el componente Login
        <div className="container-fluid text-center">
          <div className="row bg-mint mt-8">
            <div className="col-lg-12">
              <Login onLoginComplete={onLoginComplete} />
            </div>
          </div>
        </div>
      ) : (
        <SearchServices
  searchTerm={searchTerm}
  handleSearchChange={handleSearchChange}
/>;
      )}
      {!token ? (
        // Si no estás logueado, muestra el componente UserRegister
        <div className="container-fluid text-center">
          <div className="row bg-mint mt-8">
            <div className="col-lg-12">
              <Specialities />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default App;
