import React from "react";

const animals = [
    {
        key: 1,
        name: 'rover',
        breed: 'golden'
    },
    {
        key: 2,
        name: 'fido',
        breed: 'pitbull'
    }
]

const Animalcards = () => {
  return (
    <>
      {animals.map((animal) => (

         <div className="container" style={{maxWidth:'70%', maxHeight:'', marginTop:'20px'}}>
         <div className="card text-center"><img className="card-img-top w-100 d-block"></img>
             <div className="card-body">
                 <h4 className="card-title">{animal.name}</h4>
                 <p className="card-text" style={{marginBottom: "5px;"}}>Age: Unknown</p>
                 <p className="card-text" style={{marginBottom: "5px;margin-top: 0px;"}}>Gender: Cowboy</p>
                 <p className="card-text" style={{marginBottom: "15px;"}}>Breed: {animal.breed}</p><button className="btn btn-primary" type="button">Adopt Me!</button>
             </div>
         </div>
     </div>
      ))}
    </>
  )
}

export default Animalcards