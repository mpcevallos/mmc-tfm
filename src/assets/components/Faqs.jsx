import React from "react";
import Header from "./Header";

function Faqs(props) {
  return (
    <>
      <Header texto="Preguntas Frecuentes" />
      <div className="container mt-5 w-100 mx-auto mb-5">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <strong>¿Cómo puedo crear una cuenta?</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Para crear una cuenta, puedes ir a la página de Registro y luego
                llenar los campos solicitados. Luego, puedes iniciar sesión.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <strong>¿Cómo restablezco mi contraseña?</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Puedes restablecer tu contraseña en tu dashboard de usuario
                (despues de iniciar sesión). Puedes hacerlo en la sección de Mi
                Cuenta. Luego vuelve a iniciar sesión.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <strong>¿Cómo contacto con soporte?</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Puedes ponerte en contacto con nuestro equipo de soporte a
                través del correo electrónico:{" "}
                <b>soporte@metabolicmedicalcenter.med.cl</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Faqs;
