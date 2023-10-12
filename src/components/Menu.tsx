import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Modal, Row, Table } from "react-bootstrap";
import { Toggle } from "rsuite";
import { FaPencilAlt, FaPlus, FaTrashAlt } from "react-icons/fa";
import { User } from "./Interface";

const defaultUsers: User[] = [
  {
    id: 1,
    name: "Maliha",
    address: "Tasnim",
    age: "26",
    profession: "Software Engineer",
    interestRate: "4",
  },
  {
    id: 2,
    name: "Fahim",
    address: "Riaz",
    age: "24",
    profession: "Software Engineer",
    interestRate: "5",
  },
];

const initialUser: User = {
  id: 0, // or 0 if you want to initialize with a specific number
  name: "",
  address: "",
  age: "", 
  profession: "",
  interestRate: "", 
};

const Menu = () => {
  const [users, setUsers] = useState(defaultUsers);
  const [show, setShow] = useState(false);
  const [newUser, setNewUser] = useState(initialUser);
  const [showCreateBtn, setShowCreateBtn] = useState(true);
  const [editing, setEditing] = useState(false);
  const rates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => {
    setShow(true);
    if (!editing) {
      setNewUser(initialUser);
    }
  };

  const onFormSubmit = (newUser: User) => {
    const id = users.length + 1;
    setUsers([...users, { ...newUser, id }]);
    handleClose();
  };

  const onEdit = (user: User) => {
    setEditing(true);
    setNewUser(user);
    handleShow();
  };

  const onSubmit = (newUser: User) => {
    if (editing) {
      onUpdateUser(newUser);
    } else {
      onFormSubmit(newUser);
    }
  };

  const onUpdateUser = (updatedUser: User) => {
    setEditing(false);
    setUsers((prevUsers) => prevUsers.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
    handleClose();
  };

  const onDeleteUser = (user: User) => {
    setUsers((prevUsers) => prevUsers.filter((u) => u.id !== user.id));
  };

  return (
    <Container fluid="md">
      <Row>
        <Col>
          <Card className="customCard">
            <Card.Body>
              <div className="d-flex justify-content-between customCardBody">
                <div>
                  <Card.Title>User Data</Card.Title>
                </div>
                <div className="d-flex">
                  <Toggle
                    className="userToggleBtn"
                    checked={showCreateBtn}
                    onClick={() => setShowCreateBtn(!showCreateBtn)}
                  />
                  {showCreateBtn && (
                    <Button variant="primary" onClick={handleShow} title="Add User">
                      <FaPlus />
                    </Button>
                  )}
                </div>
              </div>
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Age</th>
                    <th>Profession</th>
                    <th>Sport Interest Rate</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.length > 0 ? (
                    users.map((user) => (
                      <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.address}</td>
                        <td>{user.age}</td>
                        <td>{user.profession}</td>
                        <td>{user.interestRate}</td>
                        <td>
                          <Button variant="info" title="Edit user details" onClick={() => onEdit(user)}>
                            <FaPencilAlt />
                          </Button>{" "}
                          <Button variant="danger" title="Delete user" onClick={() => onDeleteUser(user)}>
                            <FaTrashAlt />
                          </Button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} className="text-center">
                        No users found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </Card.Body>
          </Card>

          <Modal size="lg" show={show} onHide={handleClose}>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                onSubmit(newUser);
              }}
            >
              <Modal.Header closeButton>
                <Modal.Title>{editing ? "Edit User" : "Add User"}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={newUser.name}
                    required
                    onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                    placeholder="Enter Name"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicAddress">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    value={newUser.address}
                    onChange={(e) => setNewUser({ ...newUser, address: e.target.value })}
                    placeholder="Enter Address"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicAge">
                  <Form.Label>Age</Form.Label>
                  <Form.Control
                    type="number"
                    value={newUser.age}
                    onChange={(e) => setNewUser({ ...newUser, age: e.target.value })}
                    placeholder="Enter Age"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicProfession">
                  <Form.Label>Profession</Form.Label>
                  <Form.Control
                    type="text"
                    value={newUser.profession}
                    onChange={(e) => setNewUser({ ...newUser, profession: e.target.value })}
                    placeholder="Enter Profession"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Sport Interest Rate</Form.Label>
                  <Form.Select
                    value={newUser.interestRate}
                    onChange={(e) => setNewUser({ ...newUser, interestRate: e.target.value })}
                  >
                    <option value="">Select</option>
                    {rates.map((val, index) => (
                      <option key={index} value={val}>
                        {val}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Modal.Body>
              <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  {editing ? (
                    <Button variant="primary" type="submit">
                      Update
                    </Button>
                  ) : (
                    <Button variant="primary" type="submit" disabled={!newUser.name}>
                      Submit
                    </Button>
                  )}
                </Modal.Footer>
              </Form>
            </Modal>
          </Col>
        </Row>
      </Container>
    );
  };

  export default Menu;

