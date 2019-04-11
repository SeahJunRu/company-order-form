import React, { Component } from 'react'
//import Table from './Table'
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
			<Table bordered>
				<thead>
					<tr>
						<th></th>
						<th>Cost ($/unit)</th>
						<th>Price($/unit)</th>
						<th>Order Received (unit)</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row">Component A</th>
						<td>
							<input type="text" name="A1" />
						</td>
						<td>
							<input type="text" name="A2" />
						</td>
						<td>
							<input type="text" name="A3" />
						</td>
					</tr>
					<tr>
						<th scope="row">Component B</th>
						<td>
							<input type="text" name="B1" />
						</td>
						<td>
							<input type="text" name="B2" />
						</td>
						<td>
							<input type="text" name="B3" />
						</td>
					</tr>
					<tr>
						<th scope="row">Component C</th>
						<td>
							<input type="text" name="C1" />
						</td>
						<td>
							<input type="text" name="C2" />
						</td>
						<td>
							<input type="text" name="C3" />
						</td>
					</tr>
					<tr>
						<th scope="row">Component D</th>
						<td>
							<input type="text" name="D1" />
						</td>
						<td>
							<input type="text" name="D2" />
						</td>
						<td>
							<input type="text" name="D3" />
						</td>
					</tr>
					<tr>
						<th scope="row">Component E</th>
						<td>
							<input type="text" name="E1" />
						</td>
						<td>
							<input type="text" name="E2" />
						</td>
						<td>
							<input type="text" name="E3" />
						</td>
					</tr>
				</tbody>
			</Table>
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

export default Submission