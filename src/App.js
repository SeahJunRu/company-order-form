import React from 'react'
import TableForm from './Table'
import './main.css'
import { Input, Button, Form, FormGroup, Label } from 'reactstrap'

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
	const json = Object.assign(...Array.from(data, ([x,y]) => ({[x]:y})));
	alert(JSON.stringify(json));
	fetch('/api/form-submit-url', {
		method: 'POST',
		body: data,
	});
  }	
  
  render() {
    return (
      <div className='content-container'>  
        <h1>Machine Scheduling Optimizer</h1>
        <div className='form-container'>
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
        </div>
      </div>
    );
  }
}

export default Submission