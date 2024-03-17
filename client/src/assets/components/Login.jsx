import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useStore } from "../context/store";
import { services } from "../../../services/post-services";
import { Link } from "react-router-dom";

function Login({ onLoginComplete }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const { setUser, setToken } = useStore();
  const [token, setToken] = useState(null);
  const [error, setError] = useState(false);
  // const [successMessage, setSuccessMessage] = useState(null);

  const apiUrl = "http://localhost:3000/api/usuario/login";

  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      navigate("/dashboard", { replace: true });
    }
  }, [navigate]);

  const loginHandler = async () => {
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      // Si la respuesta es exitosa, obtiene el token de la respuesta y lo almacena en el localStorage
      if (response.ok) {
        // Si la respuesta es exitosa, obtiene el token de la respuesta y lo almacena en el localStorage
        const data = await response.json();
        setError(false);
        const token = data.token;
        // Almacena el token en el localStorage
        localStorage.setItem("token", token);
        // Almacena el usuario en el localStorage
        localStorage.setItem("user", JSON.stringify(data.success));
        // Almacena el mensaje de error en el localStorage
        localStorage.setItem("message", JSON.stringify(data.message));

        // Actualiza el estado del token
        const urlCita =
          "http://localhost:3000/api/cita/" + localStorage.getItem("user");
        console.log(urlCita);
        // Actualiza el estado del token
        setToken(token);

        // Después de obtener el token, obtén los posts
        const posts = await services(); // Esto asume que getPost devuelve los posts
        console.log("Posts obtenidos:", posts);

        // Llama a la función onLoginComplete con el token almacenado en el localStorage y el estado de error falso
        //y el token obtenido al iniciar sesión correctamente
        if (typeof onLoginComplete === "function") {
          onLoginComplete(false, token);
        }

        // Redirige a la página principal FUNCIONANDO...
        navigate("/dashboard", {
          replace: true,
          state: {
            logged: true,
            token: token,
          },
        });
        // Si la respuesta no es exitosa, muestra un mensaje de error y actualiza el estado de error
        // onResetForm();
      } else {
        console.log(response.status);
        //setError(true);

        // Muestra mensajes de error específicos según la respuesta del servidor
        const errorData = await response.json();
        console.error("Error:", errorData.message);
        {
          setError("¡Error al iniciar sesión! Verifique sus credenciales.");
          setSuccessMessage(null);
        }

        //onLoginComplete(true, null);
      }

      // Si la respuesta no es exitosa, muestra un mensaje de error y actualiza el estado de error
    } catch (error) {
      console.error("Error:", error);
      //setError(true);
      //onLoginComplete(true, null);

      // Mostrar una alerta
      console.alert("Credenciales incorrectas. Por favor, inténtalo de nuevo.");

      // Muestra un mensaje de error genérico
      console.error(
        "Hubo un error al procesar tu solicitud. Por favor, inténtalo de nuevo más tarde."
      );
    }
  };

  return (
    <>
      <div className="container-fluid col-lg-6 col-md-12 order-lg-2 order-md-1 d-flex justify-content-center m-0 p-0 float-end">
        <img
          src="./src/assets/img/brand/medico.png"
          alt="Fotografía de un médico"
          className="img-home"
          style={{ width: "100%", height: "41.15em" }}
        />
      </div>
      <div>
        <div className="container-fluid col-lg-6 col-md-12 order-lg-1 order-md-2 d-flex justify-content-center m-0 p-0 float-start">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              loginHandler();
            }}
            className="bg-mint w-100 p-0 m-0"
          >
            <div className="d-flex col-12 pb-5 justify-content-center align-items-center float-left bg-mint"></div>
            <h1 className="poppins-regular heading1 font-white text-center mt-5">
              Iniciar sesión
            </h1>
            <div className="mb-3 p-3">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="text"
                className="form-control"
                id="email1"
                aria-describedby="emailHelp"
                autoComplete="username"
                placeholder="Ingresa tu correo"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              ></input>
            </div>
            <div className="mb-3 p-3">
              <label htmlFor="password" className="form-label">
                Contraseña:
              </label>
              <input
                type="password"
                id="password"
                className="form-control"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                autoComplete="current-password"
                placeholder="******"
              />
              <div className="mb-2 forgot-password mt-3 font-white">
                <Link to="/dashboard">Olvidaste tu contraseña?</Link>
              </div>
            </div>
            <div className="d-grid gap-2 col-6 mx-auto">
              <button
                type="submit"
                className="btn btn-primary btn-lg"
                onSubmit={loginHandler}
              >
                Iniciar Sesión
              </button>
            </div>
            <br></br>
            <div className="font-white text-center">o iniciar sesión con</div>
            <div className="pt-3 text-center">
              <iconify-icon
                icon="logos:facebook"
                width="35"
                height="35"
              ></iconify-icon>
              &nbsp;
              <iconify-icon
                icon="ri:apple-fill"
                width="40"
                height="40"
                style={{ color: "#283544" }}
              ></iconify-icon>
              &nbsp;
              <iconify-icon
                icon="devicon:google"
                width="33"
                height="33"
              ></iconify-icon>
              <div>&nbsp; &nbsp;</div>
            </div>
          </form>
        </div>
        <div>&nbsp; &nbsp;</div>
      </div>
    </>
  );
}

export default Login;
