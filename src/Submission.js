import React from 'react'
import TableForm from './Table'
import { Input, Button, Form, FormGroup, Label } from 'reactstrap'
import './main.css'
import axios from 'axios'


//export default App
class Submission extends React.Component {
  constructor() {
  	super();
  	this.state = {
      showResult: false,
      schedule: [],
      maxProfit: 0,
      numOfComponents:[],
      isLoading: true,
      errors: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
	  this.showHome = this.showHome.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
	  const json = Object.assign(...Array.from(data, ([x,y]) => ({[x]:y})));
	  alert(JSON.stringify(json));

    axios.post(`https://a625a135-4311-42be-bdaa-2ab1ba840d67.mock.pstmn.io/getSchedule`, { json })
      .then(response => {
        console.log(response);
        console.log(response.data);
        this.setState({
          schedule: response.data.schedule,
          maxProfits: response.data.maxProfits,
          numOfComponents: response.data.numOfComponents,
          isLoading: false,
          showResult: true
        });
      })
      // If we catch any errors connecting, let's update accordingly
      .catch(error => this.setState({ error, isLoading: false, showResult: false }));
    
  }
  
  showHome() {
    this.setState({ 
      showResult: false 
    });
  }
  
  render() {
    const { schedule, maxProfits, numOfComponents, isLoading, showResult } = this.state;  
    if (showResult === true) {
      return (
        <div className='content-container'>  
          <h1>Machine Scheduling Optimizer</h1>
          <div className='form-container'>
            <Form>
              <FormGroup>
    	        <h2>Result</h2>
              <React.Fragment>
              <div>
                {!isLoading ? (
                  // <h2> Maximum profit is {maxProfits} </h2> 
                  // display schedule
                  numOfComponents.map(component => {
                    const { name, number } = component;
                    return (
                      <h3>Number of {name} : {number}</h3>
                    );
                  })
                ) : (
                  <p>Loading...</p>
                )}
              </div>
              </React.Fragment>
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