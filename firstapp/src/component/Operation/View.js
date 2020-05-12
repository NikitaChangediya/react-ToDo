import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const View = () => {
  const [user, setUser] = useState({
    Summary: "",
    Description: "",
    CreatedOn: "",
    DueDate: "",
    Priority: ""
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        Back
      </Link>
      <h1 className="display-4">Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">Summary: {user.Summary}</li>
        <li className="list-group-item">Description: {user.Description}</li>
        <li className="list-group-item">CreatedOn: {user.CreatedOn}</li>
        <li className="list-group-item">Due By: {user.DueDate}</li>
        <li className="list-group-item">Priority: {user.Priority}</li>
      </ul>
    </div>
  );
};

export default View;