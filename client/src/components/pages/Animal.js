import React from "react";
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ANIMAL } from '../../utils/queries';



export default function Animal() {
  const { id } = useParams();
  console.log(id)
  const { loading, data } = useQuery(QUERY_ANIMAL, {variables: { animalId: id }});
  const animal = data?.animal || {};
  if (loading) {
    return <div>Loading...</div>;
  }
  return (

        <div
        key={animal._id}
         className="card animal"
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
            </div>
            <button
              className="btn btn-primary"
              type="button"
            >
              Apply for adoption.
            </button>
            </div>
   </div>
        
  );
}