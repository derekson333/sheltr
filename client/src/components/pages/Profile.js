import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_USER, QUERY_ME } from "../../utils/queries";

const Profile = () => {
  const { username: userParam } = useParams();

  // use this to determine if `useEffect()` hook needs to run again
  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};
  if (loading) {
    return <div>Loading...</div>;
  }
  if (!user?.username) {
    return (
      <h4 className="card container alert bg-danger text-white">
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }
  return (
    <div>
      <div className="flex-row justify-center mb-3">
        <h2 id="viewing" style={{width: "200%"}}className="jumbotron col-12 col-md-10 bg-dark text-light p-3 mb-5">
          Viewing {`${user.username}'s` || "your"} profile.
        </h2>

        <div className="card bg-light mb-3">
          <h1 className="card-header">Your Profile</h1>
          <p className="card-body">
            Welcome,
            {user.username}!<br></br>
            {user.email}
            {user.applications}
            {user.adoptions}<br></br>
            You have donated ${user.donations} to sheltr!
          </p>
          <div className="card-footer"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
