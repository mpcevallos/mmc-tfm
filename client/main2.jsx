import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./src/assets/components/NavBar.jsx";
import Login from "./src/assets/components/Login.jsx";

//Componentes importados
import UserRegister from "./src/assets/components/UserRegister.jsx";
import Specialities from "./src/assets/components/Specialities.jsx";
import Appointment from "./src/assets/components/Appointment.jsx";
import Footer from "./src/assets/components/Footer.jsx";
import LoginPage from "./src/assets/components/LoginPage.jsx";
import Faqs from "./src/assets/components/Faqs.jsx";
import SearchServices from "./src/assets/components/SearchServices.jsx";
import AboutUs from "./src/assets/components/AboutUs.jsx";
import App from "./App.jsx";
import Dashboard from "./src/assets/components/Dashboard.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import PrivateRoute from "./src/assets/components/utilities/PrivateRouter.jsx";

const token = localStorage.getItem("token");

// ReactDOM.createRoot(document.getElementById("root")).render(
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<UserRegister />} />
      <Route path="/agendacita" element={<Appointment />} />
      <Route path="/quienes-somos" element={<AboutUs />} />
      <Route path="/preguntas-frecuentes" element={<Faqs />} />
      {/* Implementación de ruta privada */}
      <Route path="/dashboard" element={<PrivateRoute Dashboard={token} />} />
      <Route path="/especialidades" element={<Specialities />} />
    </>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<UserRegister />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/agendacita" element={<Appointment />} />
//         <Route path="/quienes-somos" element={<AboutUs />} />
//         <Route path="/preguntas-frecuentes" element={<Faqs />} />
//         <Route path="/especialidades" element={<Specialities />} />
//       </Routes>
//       <div>&nbsp;&nbsp;</div>
//       <Footer />
//     </Router>

// );
