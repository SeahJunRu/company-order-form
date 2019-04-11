import React from 'react'
import TableForm from './Table'
import { InputGroup, InputGroupAddon, InputGroupText, Input , Button , Form, FormGroup, Label , FormText , Table } from 'reactstrap'
import './main.css'

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
	this.state = {showResult: false}
    this.handleSubmit = this.handleSubmit.bind(this);
	this.showHome = this.showHome.bind(this);
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
	this.setState({ showResult: true });
  }
  
  showHome() {
    this.setState({ showResult: false });
  }
  
  render() {
    const showResult = this.state.showResult;
	if (showResult === true) {
      return (
        <div className='content-container'>  
          <h1>Machine Scheduling Optimizer</h1>
          <div className='form-container'>
            <Form>
              <FormGroup>
    	        <h2>Result</h2>
				<Button color="primary" size="sm" onClick={this.showHome}>Back</Button>
              </FormGroup>  
            </Form>
          </div>
        </div>
      )	  
    };
	
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