import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./src/assets/components/NavBar.jsx";
import Login from "./src/assets/components/Login.jsx";
import App from "./App.jsx";

// Hoja de estilos CSS
import "./src/assets/styles/styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//     <BrowserRouter>
//       <Navigation />

//       {user ? (
//         <button onClick={logout}>Logout</button>
//       ) : (
//         <button onClick={login}>Login</button>
//       )}

//       <Routes>
//         <Route index element={<Landing />} />
//         <Route path="/landing" element={<Landing />} />
//         <Route element={<ProtectedRoute isAllowed={!!user} />}>
//           <Route path="/home" element={<Home />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//         </Route>
//         <Route
//           path="/analytics"
//           element={
//             <ProtectedRoute
//               redirectTo="/home"
//               isAllowed={!!user && user.permissions.includes("analize")}
//             >
//               <Analytics />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/admin"
//           element={
//             <ProtectedRoute
//               redirectTo="/home"
//               isAllowed={!!user && user.roles.includes("admin")}
//             >
//               <Admin />
//             </ProtectedRoute>
//           }
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Router>
//       <NavBar />
//       <Routes>
//         <Route path="/" element={<h1>Home</h1>} />
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
//   </React.StrictMode>
// );
