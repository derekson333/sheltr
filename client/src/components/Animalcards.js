import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Animalcards = ({ animals }) => {
  const [inputText, setInputText] = useState("");
  const [currentAnimals, setAnimals] = useState(animals);

  let inputHandler = () => {
    console.log(inputText);
    const newFilter = animals.filter((animal) => {
      return (
        animal.name.toLowerCase().includes(inputText.toLowerCase()) ||
        animal.sex.includes(inputText.toLowerCase()) ||
        animal.animalType.includes(inputText.toLowerCase()) ||
        animal.breed.includes(inputText.toLowerCase()) ||
        animal.age.toString().includes(inputText.toLowerCase())
      );
    });
    setAnimals(newFilter);
  };
  return (
    <div>
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search a pet"
          className="me-2"
          aria-label="Search"
          onChange={(e) => setInputText(e.target.value)}
        />
        <Button onClick={inputHandler} variant="outline-success">
          Search
        </Button>
      </Form>
      {currentAnimals == false &&
      <h1 style={{marginTop:"30px",textAlign:"center"}}> No results found</h1>
      }
      <div className="animals">
        {currentAnimals.map((animal) => (
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
                  data-id={animal.id}
                  className="btn btn-primary"
                  type="button"
                >
                  Adopt Me!
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Animalcards;
