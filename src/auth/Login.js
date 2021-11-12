import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h1>Login</h1>
      <Form>
        <FormGroup>
          <Label htmlFor="username">Username</Label>
          <Input onChange={e => setUsername(e.target.value)} name="password" value={password} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="username">Password</Label>
          <Input onChange={e => setUsername(e.target.value)} name="password" value={password} />
        </FormGroup>
        <Button type="submit">Login</Button>
      </Form>
    </div>
  );
};

export default Login;
