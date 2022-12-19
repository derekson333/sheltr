import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useMutation } from "@apollo/client";
import { MAKE_DONATION } from "../../utils/mutations";



const Success = () => {
  const [session, setSession] = useState({});
  const location = useLocation();
  const sessionId = location.search.replace('?session_id=', '');
  const donationAmount = session.amount_total / 100;
  // shortcut to get username from localstorage
  const username = localStorage.getItem("user")
  const [makeDonation] = useMutation(MAKE_DONATION)
  

  useEffect(() => {
    async function fetchSession() {

      await fetch('/checkout-session?sessionId=' + sessionId).then((res) =>
        res.json()
      )
        .then((data) => {
          makeDonation({variables: {username:username, donationAmount:donationAmount}})
          setSession(data);
        });
    }
    fetchSession();
  }, [sessionId]);

  // runs but loops
  console.log(username)
  console.log(donationAmount)

  return (
    <div className="card bg-grey">
      <div className="sr-main">
        <header className="card-header">
          <h1>Thank you for your donation, {username}!</h1>

          <h3>Your donation of ${donationAmount} was successful.</h3>
        </header>
        <div className="sr-section completed-view">
          <div className="card-footer">
            <Button id='phrase' to="/">Return to Homepage</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
