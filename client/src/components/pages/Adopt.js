import React from "react";

import Animalcards from "../Animalcards";

import { QUERY_ANIMALS } from '../utils/queries';
import { useQuery } from '@apollo/client';

export default function Adopt() {

  const { loading, data } = useQuery(QUERY_ANIMALS);

  // Use optional chaining to check if data exists and if it has an animals property. If not, return an empty array to use.
  const animals = data?.animals || [];

  return (
    <div>
      <div className="card bg-light mb-3">
        <h1 className="card-header">Adopt Us</h1>
        <p className="card-body">
          Unpleasant astonished an diminution up partiality. Noisy an their of
          meant. Death means up civil do an offer wound of. Called square an in
          afraid direct. Resolution diminution conviction so mr at unpleasing
          simplicity no. No it as breakfast up conveying earnestly immediate
          principle. Him son disposed produced humoured overcame she bachelor
          improved. Studied however out wishing but inhabit fortune windows.
        </p>
        
      </div>
      <div className="container animals">
          {/* If the data is still loading, render a loading message */}
          {loading ? (
            <div>Loading...</div>
          ) : (
          <Animalcards
          animals={animals}
          />
          )}
        </div>
        <div className="card-footer"></div>
    </div>
  );
}
