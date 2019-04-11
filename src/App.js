import React, { Component } from 'react'
import TableForm from './Table'
import { InputGroup, InputGroupAddon, InputGroupText, Input , Button , Form, FormGroup, Label , FormText , Table } from 'reactstrap'

//class App extends Component {
//  render() {
//    return (
//      <div className="container">
//         <Table />
//      </div>
//    )
//  }
//}

//export default App

class Submission extends React.Component {
  constructor() {
	super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
	fetch('/api/form-submit-url', {
		method: 'POST',
		body: data,
	});
  }	
  
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="companyName">Company Name</Label>
          <Input type="textarea" name="company" id="companyName" placeholder="Enter Company Name" />
        </FormGroup>
        <FormGroup>
			<TableForm />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

export default Submission