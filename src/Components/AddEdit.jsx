import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addContact } from "../Redux/action types/action";

const AddEdit = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");

  const dispatch = useDispatch();

  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(addContact({ name, email, image }));
  };

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="enter name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            onChange={(e) => setImage(e.target.value)}
            type="text"
            placeholder="enter URL"
          />
        </Form.Group>
        <Button onClick={handleAdd} variant="primary" type="submit">
          Add
        </Button>
      </Form>
    </div>
  );
};

export default AddEdit;
