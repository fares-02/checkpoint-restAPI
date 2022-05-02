import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteContact } from "../Redux/action types/action";

const ContactCard = ({ el }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(el._id));
  };
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={el.image} />
        <Card.Body>
          <Card.Title>{el.name}</Card.Title>
          <Card.Text>{el.email}</Card.Text>
          <Button variant="info">EDIT</Button>
          <Button variant="danger" onClick={handleDelete}>
            DELETE
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ContactCard;
