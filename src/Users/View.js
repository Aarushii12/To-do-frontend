import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

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

export default function ViewUser() {
    const [user, setUser] = useState({
        description: "",
        duedate: "",
    });

    const { id } = useParams();

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/users/${id}`);
        setUser(result.data);
    };

    return (
        <Modal open>
            <Box sx={style}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                            <h2 className="text-center m-4">User Details</h2>

                            <div className="card">
                                <div className="card-header">
                                    Details of user id : {user.id}
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            <b>description:</b>
                                            {user.description}
                                        </li>
                                        <li className="list-group-item">
                                            <b>duedate:</b>
                                            {user.duedate}
                                        </li>

                                    </ul>
                                </div>
                            </div>
                            <Link className="btn btn-primary my-2" to={"/"}>
                                Back to Home
                            </Link>
                        </div>
                    </div>
                </div>
            </Box>
        </Modal>
    );
}