import { React, useState } from "react";
import { Form } from "react-bootstrap";

const Application = () => {
    const [applicationData, setApplicationData] = useState({
        streetAddress: "",
        city: "",
        state: "",
        zip: "",
        phone: "",
        children: 0,
        numberOtherPets: 0,
        typeOtherPets: ""
    });

    const handleApplicationSubmit = (event) => {
        event.preventDefault();
        try {
            console.log(applicationData);
        } catch(err) {
            console.error(err);
        }
    };

    return (
        <div id="application-card" className="card bg-light mb-3">
            <h4 className="card-header">Apply to Adopt (once the page is formatted the animal's name should go here)</h4>
            <Form
                className="card-body"
                onSubmit={handleApplicationSubmit}
            >
                <Form.Group>
                    <Form.Label htmlFor="streetAddress">Street Address:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder=""
                        onChange={(e) => setApplicationData({...applicationData, streetAddress: e.target.value})}
                        value={applicationData.streetAddress}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Street address is required!
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="city">City:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder=""
                        onChange={(e) => setApplicationData({...applicationData, city: e.target.value})}
                        value={applicationData.city}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        City is required!
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="state">State:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder=""
                        onChange={(e) => setApplicationData({...applicationData, state: e.target.value})}
                        value={applicationData.state}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        State is required!
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="zip">Zip Code:</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder=""
                        onChange={(e) => setApplicationData({...applicationData, zip: e.target.value})}
                        value={applicationData.zip}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Zip code is required!
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="phone">Phone Number:</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder=""
                        onChange={(e) => setApplicationData({...applicationData, phone: e.target.value})}
                        value={applicationData.phone}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Phone number is required!
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="children">How many children under 18 live in your home?</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder={0}
                        onChange={(e) => setApplicationData({...applicationData, children: e.target.value})}
                        value={applicationData.children}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Number of children is required!
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="numberOtherPets">How many other pets live in your home?</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder={0}
                        onChange={(e) => setApplicationData({...applicationData, numberOtherPets: e.target.value})}
                        value={applicationData.numberOtherPets}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        The number of other pets in your home is required!
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="typeOtherPets">If there are other pets in your home, what type of animals are they?</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder=""
                        onChange={(e) => setApplicationData({...applicationData, typeOtherPets: e.target.value})}
                        value={applicationData.typeOtherPets}
                        as="textarea"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="submit">Submit</Form.Label>
                    <Form.Control type="submit" onSubmit={handleApplicationSubmit}></Form.Control>
                </Form.Group>
            </Form>
        </div>
    )
}

export default Application;