import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import { setContext } from "@apollo/client/link/context";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './components/pages/About';
import Adopt from './components/pages/Adopt';
import Animal from "./components/pages/Animal";
import Contact from './components/pages/Contact'
import Donate from './components/pages/Donate'
import Login from './components/pages/Login';
import Profile from "./components/pages/Profile";
import Signup from "./components/pages/Signup"
import Header from './components/Header';
import Footer from './components/Footer';
import Success from './components/pages/Success';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    console.log('graphQLErrors', graphQLErrors);
  }
  if (networkError) {
    console.log('networkError', networkError);
  }
});

const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const clientLink = ApolloLink.from([errorLink, httpLink]);
const client = new ApolloClient({
  link: authLink.concat(clientLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <div className="flex-column justify-flex-start min-100-vh">
      <header>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Header/>
       </nav>
      </header>
        <div id="content">
          <Routes>
          <Route 
              path="/" 
              element={<About />} 
            />
            <Route 
              path="/about" 
              element={<About />} 
            />
            <Route 
              path="/adopt" 
              element={<Adopt />} 
            />
            <Route 
              path="/animal" 
              element={<Animal />} 
            />
            <Route 
              path="/contact" 
              element={<Contact />} 
            />
            <Route 
              path="/donate" 
              element={<Donate />} 
            />
            <Route 
              path="/login" 
              element={<Login />} 
            />
            <Route 
              path="/signup" 
              element={<Signup />} 
            />
            <Route 
              path="/profile" 
              element={<Profile />} 
            />
            <Route 
              path="/animal/:id" 
              element={<Animal />} 
            />
            <Route
              path='/success'
              element={<Success /> }
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  </ApolloProvider>
  );
}

export default App;
