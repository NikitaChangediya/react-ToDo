import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const View = () => {
  const [menu, setMenu] = useState({
    Summary: "",
    Description: "",
    CreatedOn: "",
    DueDate: "",
    Priority: ""
  });
  const { id } = useParams();
  useEffect(() => {
    loadMenu();
  }, []);
  const loadMenu = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    setMenu(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        Back
      </Link>
      <h1 className="display-4">Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">Summary: {menu.Summary}</li>
        <li className="list-group-item">Description: {menu.Description}</li>
        <li className="list-group-item">CreatedOn: {menu.CreatedOn}</li>
        <li className="list-group-item">Due By: {menu.DueDate}</li>
        <li className="list-group-item">Priority: {menu.Priority}</li>
      </ul>
    </div>
  );
};

export default View;