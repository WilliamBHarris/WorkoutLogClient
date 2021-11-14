import React, { useState} from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const WorkoutCreate = (props) => {
  const [description, setDescription] = useState("");
  const [definition, setDefinition] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
      e.preventDefault();
      fetch('http://localhost:3000/log/', {
          method: 'POST',
          body: JSON.stringify({log: {description: description, definition: definition, result: result}}),
          headers: new Headers({
              'Content-Type' : 'application/json',
              'Authorization': `Bearer ${props.token}`
          })
      }).then((res) => res.json())
      .then((logData) => {
          console.log(logData);
          setDescription('');
          setDefinition('');
          setResult('');
          props.fetchWorkouts();
      })
  }

  return (
    <>
      <h3>Log a Workout</h3>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="description" />
          <Input
            onChange={(e) => setDescription(e.target.value)}
            name="description"
            value={description}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="definition" />
          <Input
            onChange={(e) => setDefinition(e.target.value)}
            type="select"
            value={definition}
          >
            <option value="Time">Time</option>
            <option value="Weight">Weight</option>
            <option value="Distance">Distance</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="result" />
          <Input
            onChange={(e) => setResult(e.target.value)}
            name="result"
            value={result}
          />
        </FormGroup>
        <Button type="submit">Click to Submit</Button>
      </Form>
    </>
  );
};

export default WorkoutCreate;
