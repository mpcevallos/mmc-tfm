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
// import NotFound from "./src/assets/components/NotFound.jsx";
import Faqs from "./src/assets/components/Faqs.jsx";
import SearchServices from "./src/assets/components/SearchServices.jsx";
import AboutUs from "./src/assets/components/AboutUs.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<UserRegister />} />
        <Route path="/services" element={<Specialities />} />
        <Route path="/agendacita" element={<Appointment />} />
        <Route path="/quienes-somos" element={<AboutUs />} />
        <Route path="/preguntas-frecuentes" element={<Faqs />} />
      </Routes>
      <div>&nbsp;&nbsp;</div>
      <Appointment />
      <Footer />
    </Router>
  </React.StrictMode>
);
