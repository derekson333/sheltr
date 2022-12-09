import React from "react";
import Cowboycat from './IMG_0078.jpg'

function Animalcard() {
  return (
<div className="container" style={{maxWidth:'70%', maxHeight:'', marginTop:'20px'}}>
    <div className="card text-center"><img className="card-img-top w-100 d-block" src={Cowboycat}></img>
        <div className="card-body">
            <h4 className="card-title">Cowboy Cat</h4>
            <p className="card-text" style={{marginBottom: "5px;"}}>Age: Unknown</p>
            <p className="card-text" style={{marginBottom: "5px;margin-top: 0px;"}}>Gender: Cowboy</p>
            <p className="card-text" style={{marginBottom: "15px;"}}>Breed: Wild West</p><button className="btn btn-primary" type="button">Adopt Me!</button>
        </div>
    </div>
</div>
  );
}

export default Animalcard;