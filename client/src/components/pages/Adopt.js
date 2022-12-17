import React from "react";

import Animalcards from "../Animalcards";

import { QUERY_ANIMALS } from '../../utils/queries';
import { useQuery } from '@apollo/client';

export default function Adopt() {

  const { loading, data } = useQuery(QUERY_ANIMALS);

  // Use optional chaining to check if data exists and if it has an animals property. If not, return an empty array to use.
  const animals = data?.animals || [];

  return (
    <>
      <div className="shadow-lg card bg-light mb-3">
        <h1 className="card-header">Adopt Us</h1>
        <p className="card-body">
            Please browse through our animals who are currently looking for loving homes. 
            You can apply to adopt any available animal on that animal's profile page.
            Be sure to create an account with us to fill out an adoption application!
        </p>
        
      </div>
      
          {loading ? (
            <div>Loading...</div>
          ) : (
          <Animalcards
          animals={animals}
          />
          )}
        
        <div className="card-footer"></div>
        </>
  );
}
