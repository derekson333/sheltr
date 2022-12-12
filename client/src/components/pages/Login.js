import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";
import AuthService from "../../utils/auth";

const Login = (props) => {
  const [formState, setFormState] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      AuthService.login(data.login.token);
    } catch (error) {
      console.error(error);
    }

    // clear form values
    setFormState({
      email: "",
      username: "",
      password: "",
    });
  };

  return (
    <div id="login-card" className="card bg-light mb-3">
      <h4 className="card-header">Login</h4>
      {data ? (
        <p>Success! You may now head </p>
      ) : (
        <form className="card-body" onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              className="form-control"
              placeholder="Your email"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              className="form-control"
              placeholder="Your user name"
              name="username"
              type="text"
              value={formState.username}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              className="form-control"
              placeholder="******"
              name="password"
              type="password"
              value={formState.password}
              onChange={handleChange}
            />
          </div>
          <button
            className="btn btn-primary"
            style={{ cursor: "pointer" }}
            type="submit"
          >
            Submit
          </button>
        </form>
      )}

      {error && (
        <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
      )}
    </div>
  );
};

export default Login;
