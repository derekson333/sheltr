import React from "react";
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../../utils/queries';

export default function Profile() {
  const { name } = useParams();
  console.log(name)
  const { loading, data } = useQuery(QUERY_USER, {variables: { username: name }});
  const user = data?.user || {};
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="card bg-light mb-3">
        <h1 className="card-header">Your Profile</h1>
        <p className="card-body">
          HELLLO!: {name}
          {user.username}
          {user.email}
          {user.applications}
          {user.adoptions}
        </p>
        <div className="card-footer"></div>
      </div>
    </div>
  );
}