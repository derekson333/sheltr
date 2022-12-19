import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Link } from "react-router-dom";

const Animalcards = ({ animals }) => {
  const [inputText, setInputText] = useState("");
  const [currentAnimals, setAnimals] = useState(animals);

  let inputHandler = () => {
    const newFilter = animals.filter((animal) => {
      return (
        animal.name.toLowerCase().includes(inputText.toLowerCase()) ||
        animal.sex.toLowerCase().includes(inputText.toLowerCase()) ||
        animal.animalType.toLowerCase().includes(inputText.toLowerCase()) ||
        animal.breed.toLowerCase().includes(inputText.toLowerCase()) ||
        animal.age.toString().includes(inputText.toLowerCase())
      );
    });
    setAnimals(newFilter);
  };
  return (
    <>
      <div className="container animalcardsearch">
        <InputGroup className="shadow-lg mb-3">
          <Form.Control
            type="search"
            placeholder="Find a new friend!"
            className="me-2"
            aria-describedby="basic-addon2"
            aria-label="Search"
            onChange={(e) => setInputText(e.target.value)}
          />
          <Button
            className="shadow-lg"
            style={{marginLeft:"-20px"}}
            id="button-addon2"
            onClick={inputHandler}
            variant="primary"
          >
            Search
          </Button>
        </InputGroup>
      </div>

      {Object.keys(currentAnimals).length === 0 && (
        <h1 style={{ marginTop: "30px", textAlign: "center" }}>
          {" "}
          No results found
        </h1>
      )}
      <div className="animals">
        {currentAnimals.map((animal) => (
          <div
            key={animal._id}
            className="container"
            style={{ maxWidth: "70%", maxHeight: "", marginTop: "20px" }}
          >
            <div className="shadow-lg animal-card card text-center">
              <img
                alt="an adoptable pet"
                className="card-img-top w-100 d-block animalcardimg"
                src={animal.imgUrl}
              ></img>
              <div className="card-body">
                <h4 className="card-title">{animal.name}</h4>
                <Link className="btn btn-primary" to={`/animal/${animal._id}`}>
                  Adopt Me
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Animalcards;
