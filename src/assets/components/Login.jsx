import React from "react";

function Login() {
  return (
    <div className="d-flex col-12 mt-4 justify-content-center align-items-center float-start">
      <div className="text-center">
        <h1 className="poppins-regular heading1 font-white text-center mt-5">
          Iniciar sesión
        </h1>
        <form>
          <div class="mb-3 p-3">
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Ingresa tu correo"
            ></input>
          </div>
          <div class="mb-3 p-3">
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Contraseña"
            ></input>
            <div class="mb-2 forgot-password mt-3 font-white">
              Olvidaste tu contraseña?
            </div>
          </div>
          <div className="d-grid gap-2 col-6 mx-auto">
            <button type="submit" class="btn btn-primary btn-lg">
              Iniciar Sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
