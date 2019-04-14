import React from 'react'
import TableForm from './Table'
import { Input, Button, ButtonGroup , Form, FormGroup, Label , Spinner } from 'reactstrap'
import './main.css'
import axios from 'axios'


//export default App
class Submission extends React.Component {
  constructor() {
  	super();
  	this.state = {
      showResult: false,
      schedule: [],
      totalProfit: 0,
      componentsLeft:[],
      isLoading: true,
      errors: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
	this.showHome = this.showHome.bind(this);
	this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
	  const json = Object.assign(...Array.from(data, ([x,y]) => ({[x]:y})));
	  const inputData = {
      "quickScan": this.state.rSelected,
      "components": [{
  		  "name": "C1", 
  		  "cost": json.A1,
  		  "price": json.A2,
  		  "desiredUnit": parseInt(json.A3, 10)
      }, {
        "name": "C2",
	      "cost": json.B1,
	      "price": json.B2,
        "desiredUnit": parseInt(json.B3,10)
      }, {
        "name": "C3",
	      "cost": json.C1,
	      "price": json.C2,
        "desiredUnit": parseInt(json.C3,10)
      }, {
        "name": "C4",
	      "cost": json.D1,
	      "price": json.D2,
        "desiredUnit": parseInt(json.D3,10)
      }, {
        "name": "C5",
	      "cost": json.E1,
	      "price": json.E2,
        "desiredUnit": parseInt(json.E3,10)
      }, {
        "name": "C6",
	      "cost": json.F1,
	      "price": json.F2,
        "desiredUnit": parseInt(json.F3,10)
      }, {
        "name": "C7",
	      "cost": json.G1,
	      "price": json.G2,
        "desiredUnit": parseInt(json.G3,10)
      }, {
        "name": "C8",
	      "cost": json.H1,
	      "price": json.H2,
        "desiredUnit": parseInt(json.H3,10)
      }]
    };
	  alert(JSON.stringify(inputData));
    this.setState({ showResult: true })
	  
    fetch('http://localhost:8080/solve', {
      method: 'post',
      body: JSON.stringify(inputData),
      mode: 'no-cors'

    }).then(function(response) {
      this.setState({
        schedule: response.data.schedule,
        totalProfit: response.data.totalProfit,
        componentsLeft: response.data.componentsLeft,
        isLoading: false,
        showResult: true
      });
    }).catch(error => this.setState({ error, isLoading: false, showResult: false }));

  }
  
  showHome() {
    this.setState({ 
      showResult: false 
    });
  }
  
  onRadioBtnClick(rSelected) {
    this.setState({ rSelected });
  }
  
  render() {
    const { schedule, totalProfit, componentsLeft, isLoading, showResult } = this.state;  
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
                  // <h2> Total profit is {totalProfit} </h2> 
                  // display schedule
                  componentsLeft.map(component => {
                    const { name, desiredUnit } = component;
                    return (
                      <h3>Number of {name} not able to be produced: {desiredUnit}</h3>
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
			    <h5>Quick Scan</h5>
                <ButtonGroup>
                  <Button color="primary" onClick={() => this.onRadioBtnClick(true)} active={this.state.rSelected === true}>On</Button>
                  <Button color="primary" onClick={() => this.onRadioBtnClick(false)} active={this.state.rSelected === false}>Off</Button>
                </ButtonGroup>
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