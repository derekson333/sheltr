import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useMutation } from "@apollo/client";
import { QUERY_USER, QUERY_ME } from "../../utils/queries";
import { MAKE_DONATION } from "../../utils/mutations";



const Success = () => {
  const [session, setSession] = useState({});
  const location = useLocation();
  const sessionId = location.search.replace('?session_id=', '');
  const donationAmount = session.amount_total / 100;

  const username = session.user.username

  useEffect(() => {
    async function fetchSession() {

      await fetch('/checkout-session?sessionId=' + sessionId).then((res) =>
        res.json()
      )
        .then((data) => {
          setSession(data);
        });
    }
    fetchSession();
  }, [sessionId]);

  const [updateDonation] = useMutation(MAKE_DONATION)
  updateDonation(username, donationAmount)

  return (
    <div className="card bg-grey">
      <div className="sr-main">
        <header className="card-header">
          <h1>Thank you for your donation!</h1>

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
