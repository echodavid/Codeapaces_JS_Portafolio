import React from "react";

const Education = () => {
  return (
    <section className="padding" id="education">
      <h2 style={{ textAlign: "center" }}>Education</h2>
      <div style={{ display: "flex", flexDirection: "row", padding: "3rem" }}>
        <div style={{maxWidth: "90px", minWidth: "20%", alignSelf: "center", marginBottom:"auto"}}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/8f/Logo_de_la_Universidad_Veracruzana.svg"
            style={{
              width: "100%",
              marginLeft: "auto"
            }}
            alt="Universidad Veracruzana Logo"
          />
        </div>
        <div style={{ minWidth: "60%", paddingLeft: "1rem" }}>
          <h3>Universidad Veracruzana</h3>
          <h4>Bachelor's degree in Software Engineering, Business and Technologies.</h4>
          <h5>2023 - </h5>
          <p>
          The Universidad Veracruzana (UV) is a public and autonomous higher education institution, with different locations throughout Mexico. It is recognized as one of the universities with the greatest impact in the Mexican Republic and the most important in Veracruz.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;