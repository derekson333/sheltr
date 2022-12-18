import { React, useState } from "react";
import { Form } from "react-bootstrap";
import Auth from "../utils/auth";
import { ADD_APPLICATION } from "../utils/mutations";

const Application = ({ name, animalId }) => {
  const [applicationData, setApplicationData] = useState({
    applicant: Auth.getProfile().data._id,
    adoptee: animalId,
    streetAddress: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    children: 0,
    numberOtherPets: 0,
    typeOtherPets: "",
  });

  const handleApplicationSubmit = (event) => {
    event.preventDefault();
    try {
      console.log(applicationData);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div id="application-card" className="shadow-lg card bg-light mb-3">
      <h4 className="card-header">Apply to Adopt {name}</h4>
      <Form className="card-body" onSubmit={handleApplicationSubmit}>
        <Form.Group>
          <span className="icon is-small is-left">
            <i className="mdi mdi-map-marker-outline"></i>
          </span>
          <Form.Label className="shift-label" htmlFor="streetAddress">
            Street Address:
          </Form.Label>
          <Form.Control
            placeholder=""
            onChange={(e) =>
              setApplicationData({
                ...applicationData,
                streetAddress: e.target.value,
              })
            }
            value={applicationData.streetAddress}
            required
          />
          <Form.Control.Feedback type="invalid">
            Street address is required!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <span className="icon is-small is-left">
            <i className="mdi mdi-city"></i>
          </span>
          <Form.Label className="shift-label" htmlFor="city">
            City:
          </Form.Label>
          <Form.Control
            placeholder=""
            onChange={(e) =>
              setApplicationData({ ...applicationData, city: e.target.value })
            }
            value={applicationData.city}
            required
          />
          <Form.Control.Feedback type="invalid">
            City is required!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <span className="icon is-small is-left">
            <i className="mdi mdi-home-group"></i>
          </span>
          <Form.Label className="shift-label" htmlFor="state">
            State:
          </Form.Label>
          <Form.Control
            placeholder=""
            onChange={(e) =>
              setApplicationData({ ...applicationData, state: e.target.value })
            }
            value={applicationData.state}
            required
          />
          <Form.Control.Feedback type="invalid">
            State is required!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <span className="icon is-small is-left">
            <i className="mdi mdi-zip-box"></i>
          </span>
          <Form.Label className="shift-label" htmlFor="zip">
            Zip Code:
          </Form.Label>
          <Form.Control
            placeholder=""
            onChange={(e) =>
              setApplicationData({ ...applicationData, zip: e.target.value })
            }
            value={applicationData.zip}
            required
          />
          <Form.Control.Feedback type="invalid">
            Zip code is required!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <span className="icon is-small is-left">
            <i className="mdi mdi-phone"></i>
          </span>
          <Form.Label className="shift-label" htmlFor="phone">
            Phone Number:
          </Form.Label>
          <Form.Control
            placeholder=""
            onChange={(e) =>
              setApplicationData({ ...applicationData, phone: e.target.value })
            }
            value={applicationData.phone}
            required
          />
          <Form.Control.Feedback type="invalid">
            Phone number is required!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <span className="icon is-small is-left">
            <i className="mdi mdi-human-male-child"></i>
          </span>
          <Form.Label className="shift-label" htmlFor="children">
            How many children under 18 live in your home?
          </Form.Label>
          <Form.Control
            placeholder={0}
            onChange={(e) =>
              setApplicationData({
                ...applicationData,
                children: e.target.value,
              })
            }
            value={applicationData.children}
            required
          />
          <Form.Control.Feedback type="invalid">
            Number of children is required!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <span className="icon is-small is-left">
            <i className="mdi mdi-dog-side"></i>
          </span>
          <Form.Label className="shift-label" htmlFor="numberOtherPets">
            How many other pets live in your home?
          </Form.Label>
          <Form.Control
            placeholder={0}
            onChange={(e) =>
              setApplicationData({
                ...applicationData,
                numberOtherPets: e.target.value,
              })
            }
            value={applicationData.numberOtherPets}
            required
          />
          <Form.Control.Feedback type="invalid">
            The number of other pets in your home is required!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label className="shift-label" htmlFor="typeOtherPets">
            If there are other pets in your home, what type of animals are they?
          </Form.Label>
          <Form.Control
            placeholder=""
            onChange={(e) =>
              setApplicationData({
                ...applicationData,
                typeOtherPets: e.target.value,
              })
            }
            value={applicationData.typeOtherPets}
            as="textarea"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="submit">Submit</Form.Label>
          <Form.Control
            value="Apply for adoption."
            className="btn btn-primary"
            type="submit"
            onSubmit={handleApplicationSubmit}
          ></Form.Control>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Application;
