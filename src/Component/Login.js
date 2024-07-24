import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Login() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Form
        style={{
          width: "40%",
          marginTop: "12%",
          border: "1px solid black",
          padding: "5%",
        }}
      >
        <h5>Admin Login</h5>
        <Form.Group>
          <Form.Label>UserName:</Form.Label>
          <Form.Control type="text" placeholder="UserName"></Form.Control>
          <Form.Label>Password:</Form.Label>
          <Form.Control type="password" placeholder="Password" />
          <Button>Login</Button>
        </Form.Group>
      </Form>
    </div>
  );
}
