import React, {useState} from 'react';
import axios from 'axios'; 
import {useHistory,Link} from 'react-router-dom'

const Add = () =>{
    let history = useHistory();  
    const [ user, setUser ] = useState({
        Summary: "",
        Priority: "",
        CreatedOn: "",   
        DueDate: ""
    });

   const { Summary,Description,CreatedOn,DueDate,Priority } = user;
   const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.CreatedOn = new Date().toDateString();
    e.preventDefault();
    await axios.post("http://localhost:3003/users", user);
    history.push("/");
  };
    return(
        <div className="container">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-left mb-4">Add Task</h2>
          <form  onSubmit={e => onSubmit(e)}>
            <div className="form-group">
            <label for="Summary">Summary</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Summary"
                name="Summary"
                value ={Summary}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group">
            <label for="Description">Description</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" 
                rows="3" 
                placeholder="Description"
                name="Description"
                value ={Description}
                onChange={e => onInputChange(e)} >
                </textarea>
            </div>
            <div className="form-group col-md-5">
            <label for="CreatedOn">CreatedOn</label>
              <input
                type="date"
                className="form-control form-control-lg"
                placeholder="Today's date"
                name="CreatedOn"
                value ={CreatedOn}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-row">
            <div className="form-group col-md-6">
            <label for="DueDate">DueDate</label>
              <input
                type="date"
                className="form-control form-control-lg"
                placeholder="DueDate"
                name="DueDate"
                value ={DueDate}
                onChange={e => onInputChange(e)}
              />
            </div>
             <div className="form-group col-md-4">
            <label for="Priority">Priority</label>
            <select class="custom-select" size="4"  value ={Priority} onChange={e => onInputChange(e)}>
              <option selected>None</option>
              <option value="1">low</option>
              <option value="2">Medium</option>
              <option value="3">High</option>
            </select>
            </div>
            </div>
            <button className="btn btn-primary btn-block">Save</button>
            <Link className="btn btn-primary btn-block" to="/">  Back  </Link>
          </form>
        </div>
      </div>
    );
};

export default Add;