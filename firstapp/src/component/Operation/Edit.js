import React, {useState, useEffect} from 'react';
import axios from 'axios'; 
import {useHistory, useParams} from 'react-router-dom'

const Edit = () =>{
    let history = useHistory(); 
    const { id } = useParams(); 
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

  useEffect(() => {
    loadMenu();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/users/${id}`, menu);
    history.push("/");
  };

  const loadMenu = async () => {
    const result = await axios.get(`http://localhost:3003/users/${id}`);
    setMenu(result.data);
  };

    return(
        <div className="container">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-left mb-4">Edit Task</h2>
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
            <button className="btn btn-warning btn-block">Update</button>
          </form>
        </div>
      </div>
    );
};

export default Edit;