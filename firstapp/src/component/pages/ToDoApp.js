import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


const ToDoApp = () =>{
    const [user,setUser] = useState([]);

    useEffect(() =>{
   loadUser();
    },[]);

    const loadUser = async () =>{
        const result = await axios.get("http://localhost:3003/users");
        setUser(result.data.reverse());
    }

    const Delete = async id => {
        await axios.delete(`http://localhost:3003/users/${id}`);
        loadUser();
      };


    return(
        <div className="container">
        <div className="py-4">
            <h1> ToDo App</h1>
            <br />
            <br />
            <form class="form-inline my-2 my-lg-0">
            <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle mx-sm-5" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   group by
  </button>
  <button class="btn btn-outline-success my-5 my-sm-2" type="submit">Search</button>
      <br />
  <div>
  <select name="Priority"id="Priority">
              <option value="">Please select Group...</option>
              <option value="None">None</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
            <input class="form-control mx-sm-4" type="search" placeholder="Search" aria-label="Search" />
      <br />
            </div>
</div>
      <br />
      <table class="table bordere shadow my-2 my-lg-4">
  <thead class="thead-light">
    <tr>
    <th scope="col">#</th>
      <th scope="col">Summary</th>
      <th scope="col">Priority</th>
      <th scope="col">CreatedOn</th>
      <th scope="col">DueDate</th>
      <th scope="col">Action</th>
     
    </tr>
  </thead>
  {
      user.map((user,index)=>(
        <tr>
        <th scope="row">{index + 1}</th>
        <td>{user.Summary}</td>
        <td>{user.Priority}</td>
        <td>{user.CreatedOn}</td>
        <td>{user.DueDate}</td>
        <td>
                  <Link class="btn btn-primary mr-2" to={`/Operation/${user.id}`}>
                    View
                  </Link>
                  <Link class="btn btn-outline-primary mr-2" to={`/Operation/Edit/${user.id}`}>
                    Edit
                  </Link>
                  <Link class="btn btn-danger" onClick={() => Delete(user.id)} >
                   Delete
                  </Link>
                  </td>
      </tr>


      ))
  }
  <tbody>
  
  </tbody>
</table>
    </form>
        </div>
     </div>
    );
};

export default ToDoApp;