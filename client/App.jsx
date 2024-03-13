import React, { useState, useEffect } from "react";
import "./src/assets/styles/styles.css";
import Login from "./src/assets/components/Login.jsx";
import Specialities from "./src/assets/components/Specialities.jsx";
import Appointment from "./src/assets/components/Appointment.jsx";
import SearchServices from "./src/assets/components/SearchServices.jsx";
import Header from "./src/assets/components/Header";
import UserRegister from "./src/assets/components/UserRegister";

function App() {
  const [token, setToken] = useState(null);
  console.log("Token:", token);
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
        <div>
          {/* Mostrar componentes cuando hay un token */}
          <Header texto="Dashboard" />
        </div>
      ) : (
        // Mostrar solo el componente Login cuando no hay un token
        <>
          <Specialities onLoginComplete={onLoginComplete} />
          <SearchServices
            onLoginComplete={onLoginComplete}
            searchTerm={searchTerm}
            handleSearchChange={handleSearchChange}
          />
          <Specialities />
          <Appointment />
        </>
      )}
    </>
  );
}

export default App;
