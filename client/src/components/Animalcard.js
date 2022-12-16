import React from "react";

const Animalcard = ({ animal }) => {
  return (
    <>
      <div
        key={animal._id}
        className="container animal-card"
        style={{ maxWidth: "70%", maxHeight: "", marginTop: "20px" }}
      >
        <div className="animal-card card text-center">
          <img
            alt="an adoptable pet"
            className="card-img-top w-100 d-block animalcardimg"
            src={animal.imgUrl}
          ></img>
          <div className="card-body">
            <h4 className="card-title">{animal.name}</h4>
            <p className="card-text" style={{ marginBottom: "5px" }}>
              Type: {animal.animalType}
            </p>
            <p className="card-text" style={{ marginBottom: "5px" }}>
              Age: {animal.age}
            </p>
            <p className="card-text" style={{ marginBottom: "5px" }}>
              Sex: {animal.sex}
            </p>
            <p className="card-text" style={{ marginBottom: "15px" }}>
              Breed: {animal.breed}
            </p>
            <button
              className="btn btn-primary"
              type="button"
            >
              Apply for adoption.
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Animalcard;
