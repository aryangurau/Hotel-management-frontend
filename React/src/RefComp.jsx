import { useState, useEffect, useRef } from "react";
import { Button, Form } from "react-bootstrap";

const RefComp = () => {
  console.log("Hello ref");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  }); //form where values of the input are controlled by state, such form are called cotrolled form
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            value={formData?.email}
            onChange={(e) => {
              setFormData((prev) => {
                return { ...prev, email: e.target.value };
              });
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            value={formData?.password}
            onChange={(e) => {
              setFormData((prev) => {
                return { ...prev, password: e.target.value };
              });
            }}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="reset"
          onClick={() => setFormData({ email: "", password: "" })}
        >
          reset
        </Button>
      </Form>
    </div>
  );
};

export default RefComp;
