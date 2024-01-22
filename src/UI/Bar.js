import React from 'react'
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

export default function Bar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            TO DO LIST
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <Button size="small" variant="outlined">
            <Link className="btn btn-outline-light" to="/Addinguser">
              Add Task
            </Link>
          </Button>
        </div>
      </nav>
    </div>
  )
}
