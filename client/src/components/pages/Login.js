import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";

const Login = () => {
  const [userFormData, setUserFormData] = useState({
    username: "",
    password: "",
  });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [login, { error, data }] = useMutation(LOGIN_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(userFormData);
    sessionStorage.setItem('user', userFormData.username)

    try {
      const { data } = await login({
        variables: { ...userFormData },
      });

      Auth.login(data.login.token);
    } catch (error) {
      console.error(error);
    }

    setUserFormData({
      username: "",
      password: "",
    });
  };

  return (
    <>
    <div id="login-card" className="card bg-light mb-3">
      
      {data ? (
        <h4 className="bg-success card-header text-light">
          Login Successful.{" "}
        </h4>
      ) : ( <h4 className="card-header">Login</h4> )}
        <Form
          className="card-body"
          noValidate
          validated={validated}
          onSubmit={handleFormSubmit}
        >
          <Alert
            dismissible
            onClose={() => setShowAlert(false)}
            show={showAlert}
            variant="danger"
          >
            Something went wrong with your login credentials!
          </Alert>
          <Form.Group>
            <Form.Label htmlFor="username">Username:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your user name"
              name="username"
              onChange={handleInputChange}
              value={userFormData.username}
              required
            />
            <Form.Control.Feedback type="invalid">
              Username is required!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="password">Password:</Form.Label>
            <Form.Control
              type="password"
              placeholder="**********"
              name="password"
              onChange={handleInputChange}
              value={userFormData.password}
              required
            />
            <Form.Control.Feedback type="invalid">
              Password is required!
            </Form.Control.Feedback>
          </Form.Group>
          <Button
            disabled={
              !(
                userFormData.username &&
                userFormData.password
              )
            }
            type="submit"
            variant="primary"
          >
            Submit
          </Button>
        </Form>
      {error && (
        <div style={{margin: '20px'}}className="card my-3 p-3 bg-danger text-white">
          {error.message}
        </div>
      )}
    </div>
    </>
  );
};

export default Login;
