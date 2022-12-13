import React from "react";

const Animalcards = ({ animals }) => {
    return (
        <>
            {animals.map((animal) => (
                <div className="container" style={{ maxWidth: '70%', maxHeight: '', marginTop: '20px' }}>
                    <div className="card text-center"><img alt="an adoptable pet" className="card-img-top w-100 d-block animalcardimg" src={animal.imgUrl}></img>
                        <div className="card-body">
                            <h4 className="card-title">{animal.name}</h4>
                            <p className="card-text" style={{ marginBottom: "5px;" }}>Type: {animal.animalType}</p>
                            <p className="card-text" style={{ marginBottom: "5px" }}>Age: {animal.age}</p>
                            <p className="card-text" style={{ marginBottom: "5px" }}>Sex: {animal.sex}</p>
                            <p className="card-text" style={{ marginBottom: "15px" }}>Breed: {animal.breed}</p><button className="btn btn-primary" type="button">Adopt Me!</button>
                        </div>
                    </div>
                </div>
            ))}

        </>
    )
}

export default Animalcards