import React from "react";
import { useState } from "react";
import { Icon } from "@iconify-icon/react";
import SpecialityCard from "./SpecialityCard";
import SearchServices from "./SearchServices";

function Specialities() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const specialitiesData = [
    {
      imgSrc: "../src/assets/img/especialidades/Especialidad1.png",
      title: "Especialidad 1",
      description: "Some quick example text for Especialidad 1.",
    },
    {
      imgSrc: "../src/assets/img/especialidades/Especialidad2.png",
      title: "Especialidad 2",
      description: "Some quick example text for Especialidad 2.",
    },
    {
      imgSrc: "../src/assets/img/especialidades/Especialidad3.png",
      title: "Especialidad 3",
      description: "Some quick example text for Especialidad 3.",
    },
  ];

  const filteredSpecialities = specialitiesData.filter(
    (speciality) =>
      speciality.title &&
      speciality.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <SearchServices
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
      />
      <div className="container text-center">
        <div className="row">
          {filteredSpecialities.map((speciality, index) => (
            <div key={index} className="col-12 col-md-4">
              <SpecialityCard {...speciality} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Specialities;
