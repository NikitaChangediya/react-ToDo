import React, {useState} from 'react';
import axios from 'axios'; 
import {useHistory} from 'react-router-dom'

const Add = () =>{
    let history = useHistory();  
    const [ menu, setMenu ] = useState({
        Summary: "",
        Priority: "",
        CreatedOn: "",   
        Dueby: ""
    });

   const { Summary,Description,DueBy,Priority } = menu;
   const onInputChange = e => {
    setMenu({ ...menu, [e.target.Summary]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3003/users", menu);
    history.push("/");
  };
    return(
        <div className="container">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-left mb-4">Add Task</h2>
          <form  onSubmit={e => onSubmit(e)}>
            <div className="form-group">
            <label for="validationTooltip01">Summary</label>
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
            <label for="validationTooltip01">Description</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" 
                rows="3" 
                placeholder="Description"
                name="Description"
                value ={Description}
                onChange={e => onInputChange(e)} >
                </textarea>
            </div>
            <div className="form-row">
            <div className="form-group col-md-6">
            <label for="DueDate">Due Date</label>
              <input
                type="date"
                className="form-control form-control-lg"
                placeholder="Due Date"
                name="Due Date"
                value ={DueBy}
                onChange={e => onInputChange(e)}
              />
            </div>
             <div className="form-group col-md-4">
            <label for="Priority">Priority</label>
            <select class="custom-select" size="4"  value ={Priority}  onChange={e => onInputChange(e)}>
              <option selected>Priority</option>
              <option value="1">None</option>
              <option value="2">low</option>
              <option value="3">Medium</option>
              <option value="4">High</option>
            </select>
            </div>
            </div>
            <button className="btn btn-primary btn-block">Add</button>
          </form>
        </div>
      </div>
    );
};

export default Add;