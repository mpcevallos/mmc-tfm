import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useLocalStorage } from "react-use";

//Componentes importados
import Login from "./src/assets/components/Login.jsx";
import Specialities from "./src/assets/components/Specialities.jsx";
import CreateAppointment from "./src/assets/components/CreateAppointment.jsx";
import GetAppointment from "./src/assets/components/GetAppointment.jsx";
import SearchServices from "./src/assets/components/SearchServices.jsx";
//import Header from "./src/assets/components/Header";
import UserRegister from "./src/assets/components/UserRegister";
import Dashboard from "./src/assets/components/Dashboard";
import PrivateRouter from "./src/assets/components/utilities/PrivateRouter";
import PublicRouter from "./src/assets/components/utilities/PublicRouter";
import NavBar from "./src/assets/components/NavBar.jsx";
import AboutUs from "./src/assets/components/AboutUs.jsx";
import Faqs from "./src/assets/components/Faqs.jsx";
import Footer from "./src/assets/components/Footer.jsx";
import NotFound from "./src/assets/components/NotFound.jsx";
import ScrollUpButton from "./src/assets/components/utilities/ScrollUpButton.jsx";
function MainContent() {
  const location = useLocation();
  const [search, setSearchTerm] = useState("");
  //const [specialities, setSpecialities] = useState();

  return (
    <>
      {location.pathname !== "/especialidades" && (
        <SearchServices search={search} setSearchTerm={setSearchTerm} />
      )}
      <Especialidades search={search} />
    </>
  );
}

function App() {
  const [token, setToken] = useState(null);
  console.log("Token:", token);
  const [search, setSearchTerm] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [user, setUser] = useLocalStorage("token");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  // if (onLoginComplete === true) {
  //   return <Dashboard />;
  // }

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

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<UserRegister />} />
        <Route element={<PublicRouter />}>
          <Route
            path="/login"
            element={
              <Login
                onLoginComplete={onLoginComplete}
                token={token}
                onLogOut={onLogOut}
                handleLogin={handleLogin}
              />
            }
          />
          <Route path="/searchservices" element={<SearchServices />} />
        </Route>
        <Route element={<PrivateRouter />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/citas" element={<CreateAppointment />} />
          <Route path="/consultarcitas" element={<GetAppointment />} />
        </Route>

        <Route path="/quienes-somos" element={<AboutUs />} />
        <Route path="/preguntas-frecuentes" element={<Faqs />} />
        <Route
          path="*"
          element={
            <NotFound texto="Error 404 (Page Not Found) de página no encontrada" />
          }
        />
      </Routes>
      <div>&nbsp;&nbsp;</div>
      <>
        {location.pathname !== "/especialidades" && (
          <SearchServices search={search} setSearchTerm={setSearchTerm} />
        )}
        <Specialities search={search} />
      </>
      <Footer />
      <ScrollUpButton />
    </BrowserRouter>
  );
}

export default App;
