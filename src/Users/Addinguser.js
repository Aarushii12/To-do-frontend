import axios from "axios";
import React, { useState } from "react";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Link ,useNavigate } from "react-router-dom";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Addinguser()
{
  let navigate= useNavigate();

  const [user, setUser] = useState({
    description: "",
    duedate: "",
  });

  const { description, duedate } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.description]: e.target.value });
  };

  const onSubmit = async (e) => {
  e.preventDefault();
   await axios.post("http://localhost:8080/users", user);
  navigate("/");
   };

  return (
    <Modal open>
      <Box sx={style}>
      <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                description
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="What is the task?"
                description="describe"
                value={description}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                duedate
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Tell the duedate"
                duedate="duedate"
                value={duedate}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>

    </Box>
    </Modal>
  );
}
