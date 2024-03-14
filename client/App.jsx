import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import "./src/assets/styles/styles.css";

//Componentes importados
import Login from "./src/assets/components/Login.jsx";
import Specialities from "./src/assets/components/Specialities.jsx";
import Appointment from "./src/assets/components/Appointment.jsx";
import SearchServices from "./src/assets/components/SearchServices.jsx";
import Header from "./src/assets/components/Header";
import UserRegister from "./src/assets/components/UserRegister";
import Dashboard from "./src/assets/components/Dashboard";

function App({ buscarservicio }) {
  const [token, setToken] = useState(null);
  console.log("Token:", token);
  const [searchTerm, setSearchTerm] = useState([]);
  const [speciality, setSpeciality] = useState([]);
  // const [handleLogin, setHandleLogin] = React.useState(false);

  useEffect(() => {
    // Verifica si hay un token almacenado en el localStorage al cargar el componente
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      // Si hay un token, establece el estado del token
      setToken(storedToken);
    }
  }, []);

  if (onLoginComplete === true) {
    return <Dashboard />;
  }

  // Carga los datos de las especialidades desde el backend al iniciar la aplicación y actualiza el estado de searchTerm al hacerlo

  const handleSearch = (event) => {
    const filtered = speciality.filter((speciality) =>
      speciality.title.toLowerCase().includes(event.toLowerCase())
    );
    setSearchTerm(filteredSpecialities);
  };

  // Función para manejar el cierre de sesión y actualizar el estado del token al hacerlo
  function onLogOut() {
    localStorage.removeItem("token");
    window.location.reload();
  }
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

  const handleLogin = () => {
    // Lógica de autenticación aquí (usando el token JWT)
    setToken(true);

    // Después de la autenticación, obtén los posts
    getPosts(token)
      .then((data) => {
        setPosts(data);
        setFilteredPosts(data); // Inicialmente, muestra todos los posts
      })
      .catch((error) => console.error("Error:", error));
  };

  const specialitiesData = [
    {
      imgSrc: "../src/assets/img/especialidades/Especialidad1.png",
      title: "Especialidad 1",
      description: "Some quick example text for Especialidad 1.",
    },
    {
      imgSrc: "../src/assets/img/especialidades/Especialidad2.png",
      title: "Especialidad 2",
      description: "Some quick example text for Especialidad 2.",
    },
    {
      imgSrc: "../src/assets/img/especialidades/Especialidad3.png",
      title: "Especialidad 3",
      description: "Some quick example text for Especialidad 3.",
    },
  ];

  return (
    <Switch>
      <Route path="/login">
        {token ? (
          <Redirect to="/dashboard" />
        ) : (
          <Login onLoginComplete={onLoginComplete} />
        )}
      </Route>
      <Route path="/dashboard">
        {token ? <Dashboard /> : <Redirect to="/login" />}
      </Route>
      {/* Agrega otras rutas según sea necesario */}
    </Switch>
  );
}

export default App;
