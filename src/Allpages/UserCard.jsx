import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import Modal from "./Modal.jsx"
import Edituser from '../Users/Edituser'

import "./Usercard.css"

export default function UserCard(users, deleteUser) {
    const { id, username, name } = users.users;

    const navigate = useNavigate();

  return (
    <>
    <Card sx={{ maxWidth: 345 }} id={id} className="user-card">
      <CardMedia
        sx={{ height: 140 }}
        image="https://images.unsplash.com/photo-1627850604058-52e40de1b847?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="green iguana"
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Name: {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Username: {username}
        </Typography>
      </CardContent>
    
        <div className="user-card-buttons">
        <Button color="primary" variant="contained" onClick={() => {
            navigate(`/edituser/${id}`)
        }}>Edit</Button>

        <Button color="primary" variant="contained" onClick={() => {
            navigate(`/viewuser/${id}`)
        }}>View</Button>
      </div>
    </Card>
    </>
  );
}