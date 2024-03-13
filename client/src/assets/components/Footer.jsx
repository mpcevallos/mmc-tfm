import React from "react";
import { Icon } from "@iconify-icon/react";
import "../../assets/styles/styles.css";

function Footer() {
  return (
    <>
      <div class="container-fluid bg-footer col-12 col-md-9 mt-5 justify-content-center w-100 font-white mx-auto mt-5">
        <div class="row mt-8 mx-auto mt-5">
          <div class="container pt-4 box-blue mx-auto mt-4">
            <div class="row mx-auto mt-4">
              <div class="col-xl-2 col-md-6 col-12 pb-4 d-flex flex-column align-items-center justify-content-center box-blue mx-auto">
                <div class="pt-4 text-nav-left d-flex flex-column flex-wrap align-items-center justify-content-center box-blue text-center">
                  <img
                    src="../src/assets/img/brand/logo-white.png"
                    alt="Logo de Metabolic Medical Center"
                    style={{ width: "190px", height: "53px" }}
                  />
                </div>
                <div class="pt-4 pb-6 text-nav-left d-flex flex-column flex-wrap align-items-center justify-content-center box-blue text-center"></div>
              </div>
              <div class="col-xl-3 col-md-8 col-12 pb-4 d-flex flex-column flex-wrap align-items-center justify-content-center box-blue text-center">
                <p class="text-nav-left pt-3  font-white">Quienes Somos</p>
                <p class="text-nav-left font-white">Registrate Gratis</p>
                <p class="text-nav-left font-white">Preguntas Frecuentes</p>
                <p class="text-nav-left font-white">Términos y condiciones</p>
                <p class="text-nav-left font-white">
                  Política de privacidad <br />y protección de datos
                </p>
              </div>

              <div class="col-xl-3 col-md-8 col-12 pb-4 d-flex flex-column flex-wrap align-items-center justify-content-center box-blue text-center">
                <h5 class="pt-4 text-nav-left font-white text-center">
                  Dirección 1
                </h5>

                <p class="pt-3 font-white">
                  Av. Gomez Boloña <br />
                  Edificio MMC 1 <br />
                  Teléfono: 803 5000 <br />
                  PBX: 630 9 600
                </p>
              </div>
              <div class="col-xl-3 col-md-8 col-12 pb-3 d-flex flex-column flex-wrap align-items-center justify-content-center box-blue text-center">
                <h5 class="pt-4 text-nav-left">Dirección 2</h5>
                <p class="text-nav-left pt-3">
                  Av. Gomez Boloña <br />
                  Edificio MMC 1 <br />
                  Teléfono: 803 5000 <br />
                  PBX: 630 9 600
                </p>
              </div>
              <div class="row mx-auto mb-2">
                <p class="text-center pt-3 font-white mx-auto">
                  Copyright &copy; 2024 MMC - Metabolic Medical Center. Todos
                  los derechos resrvados.
                </p>
              </div>
              <div class="row mx-auto mb-5">
                <p class="text-center font-white mx-auto">
                  El uso de este sitio web implica la aceptación de los Términos
                  y Condiciones y de las Políticas de Privacidad de Metabolic
                  Medical Center. <br />
                  Las fotos son a modo ilustrativo. Los precios online para los
                  productos presentados/publicados nuestro sitio web son válidos
                  exclusivamente para pagos en línea.
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
