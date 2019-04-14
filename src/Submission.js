import React from 'react'
import TableForm from './Table'
import { Input, Button, Form, FormGroup, Label , Spinner } from 'reactstrap'
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
	  const inputData = [{
        "quickScan": json.quickScan,
        "components": [{
        	"name": "A", 
          "desiredUnit": json.A3
        }, {
        	"name": "B",
          "desiredUnit": json.B3
        }, {
        	"name": "C",
          "desiredUnit": json.C3
        }, {
        	"name": "D",
          "desiredUnit": json.D3
        }, {
        	"name": "E",
          "desiredUnit": json.E3
        } ]
      }];
	  alert(JSON.stringify(json));
    this.setState({ showResult: true })
	  
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
				  <div>
                    <Spinner type="grow" color="primary" />
                    <Spinner type="grow" color="secondary" />
                    <Spinner type="grow" color="success" />
                    <Spinner type="grow" color="danger" />
                    <Spinner type="grow" color="warning" />
                    <Spinner type="grow" color="info" />
                    <Spinner type="grow" color="light" />
                    <Spinner type="grow" color="dark" />
                  </div>
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
              <div className='checkbox-container'>
                <Input type="checkbox" name="quickScan" id="quickScan" />
                <Label for="quickScan">Quick Scan</Label>
              </div>
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