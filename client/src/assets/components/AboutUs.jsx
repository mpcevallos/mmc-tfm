import React from "react";
import Header from "./Header";

function AboutUs() {
  return (
    <>
      <Header texto="Quiénes Somos" />
      <div className="container fluid">
        <div className="row mt-5">
          <div className="col mt-5 align-items-justify">
            Metabolic Medical Center es una clínica especializada en metabolismo
            ubicada en Santiago, Chile. Fundada por la Dra. Camila Herrera y el
            Dr. Rodrigo Silva, reconocidos expertos en el campo del metabolismo
            y la medicina familiar, Metabolic Medical Center se ha establecido
            como un referente en la atención integral de problemas metabólicos
            en pacientes de todas las edades. <br />
            <br />
            El equipo multidisciplinario incluye a la Dra. Camila Herrera
            (Internista), Dra. Sofía Vargas (Nutricionista), Dr. Javier Morales
            (Endocrinólogo & Gastroenterólogo), y al Dr. Rodrigo Silva
            (Internista). <br />
            <br />
            La Dra. Sofía López, psicóloga especializada, ofrece apoyo emocional
            a los pacientes con desafíos metabólicos. Ayuda a manejar el estrés,
            la ansiedad y a comprender la relación entre la salud mental y la
            alimentación. <br />
            <br />
            Su trabajo complementa la atención médica, asegurando un enfoque
            integral para el bienestar de los pacientes. También hay una
            enfermera especializada en metabolismo y una administrativa
            capacitada para garantizar una experiencia sin contratiempos para
            los pacientes. <br />
            <br />
            En Metabolic Medical Center, se dedican a ofrecer una atención
            médica personalizada y de alta calidad a pacientes de todas las
            edades que enfrentan desafíos relacionados con el metabolismo. Les
            enorgullece su enfoque holístico para el cuidado de la salud, que
            combina la última tecnología médica con un trato cálido y humano.{" "}
            <br />
            <br />
          </div>
          <div className="container-fluid col-12 col-md-6 mt-5 m-4">
            <img
              src="./src/assets/img/brand/doctores-grupo.jpg"
              class="img-fluid rounded float-end"
              alt="Fotografía de médicos del Metabolic Medical Center"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
