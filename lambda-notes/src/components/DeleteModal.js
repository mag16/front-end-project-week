import React from 'react';
import { Alert } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'




const DeleteModal = (props) => {
    return (
        <div>
            <Alert color="light">
                <h2 className="alert-heading">are you sure you want to delete this?</h2>
                <div>
                    <Button color="danger" size= "lg">Delete</Button>{' '}
                    <Button color="info" size="lg">No</Button>
                </div>
                <hr />
                
            </Alert>
        </div>
    );
};


export default DeleteModal;






