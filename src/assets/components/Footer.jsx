import React from "react";
import { Icon } from "@iconify-icon/react";
import "../../assets/styles/styles.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="container-fluid bg-footer col-12 col-md-9 mt-5 justify-content-center w-100 font-white mx-auto mt-5 poppins-light">
        <div className="row mt-8 mx-auto mt-5">
          <div className="container pt-4 box-blue mx-auto mt-4">
            <div className="row mx-auto mt-4">
              <div className="col-xl-2 col-md-6 col-12 pb-4 d-flex flex-column align-items-center justify-content-center box-blue mx-auto">
                <div className="pt-4 text-nav-left d-flex flex-column flex-wrap align-items-center justify-content-center box-blue text-center">
                  <img
                    src="../src/assets/img/brand/logo-white.png"
                    alt="Logo de Metabolic Medical Center"
                    style={{ width: "190px", height: "53px" }}
                  />
                </div>
                <div className="pt-4 pb-6 text-nav-left d-flex flex-column flex-wrap align-items-center justify-content-center box-blue text-center"></div>
              </div>
              <div className="col-xl-3 col-md-8 col-12 pb-4 d-flex flex-column flex-wrap align-items-center justify-content-center box-blue text-center">
                <div>
                  <Link
                    to="/quienes-somos"
                    className="text-nav-left pt-3 font-white"
                  >
                    Quienes Somos
                  </Link>
                  <br />
                  <Link
                    to="/preguntas-frecuentes"
                    className="text-nav-left font-white"
                  >
                    Preguntas Frecuentes
                  </Link>
                  <br />
                  <Link to="#" className="text-nav-left font-white">
                    Términos y condiciones
                  </Link>
                  <br />
                  <Link to="#" className="text-nav-left font-white">
                    Política de privacidad <br />y protección de datos
                  </Link>
                </div>
              </div>

              <div className="col-xl-3 col-md-8 col-12 pb-4 d-flex flex-column flex-wrap align-items-center justify-content-center box-blue text-center">
                <h5 className="pt-4 text-nav-left font-white text-center">
                  <Icon
                    icon="ri:hospital-line"
                    className="small-icons-footer"
                  />
                  &nbsp;&nbsp;Dirección 1
                </h5>

                <p className="pt-3 font-white">
                  Av. Gomez Boloña <br />
                  Edificio MMC 1 <br />
                  Teléfono: 803 5000 <br />
                  PBX: 630 9 600
                </p>
              </div>
              <div className="col-xl-3 col-md-8 col-12 pb-3 d-flex flex-column flex-wrap align-items-center justify-content-center box-blue text-center">
                <h5 className="pt-4 text-nav-left">
                  <Icon
                    icon="ri:hospital-line"
                    className="small-icons-footer"
                  />
                  &nbsp;&nbsp;Dirección 2
                </h5>
                <p className="text-nav-left pt-3">
                  Av. Gomez Boloña <br />
                  Edificio MMC 2 <br />
                  Teléfono: 803 5000 <br />
                  PBX: 630 9 600
                </p>
              </div>
              <div className="row mx-auto mb-2">
                <p className="text-center pt-3 font-white mx-auto poppins-semibold">
                  Copyright &copy; 2024 MMC - Metabolic Medical Center. Todos
                  los derechos reservados.
                </p>
              </div>
              <div className="row mx-auto mb-5">
                <p className="text-center font-white mx-auto">
                  El uso de este sitio web implica la aceptación de los Términos
                  y Condiciones y de las Políticas de Privacidad de Metabolic
                  Medical Center. <br />
                  Las fotos son a modo ilustrativo. Los precios online para los
                  productos presentados/publicados en nuestro sitio web son
                  válidos exclusivamente para pagos en línea.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
