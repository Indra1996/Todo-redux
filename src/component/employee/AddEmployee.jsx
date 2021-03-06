import React, { Component } from 'react'

export default class AddEmployee extends Component {
    state = {
        name: null ,
        age: null ,
        designation: null 
    }
    handleChange = (e) => {

        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.addEmployee(this.state);
        e.target.value = ""
    }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" onChange={this.handleChange} />
            <label htmlFor="age">Age</label>
            <input type="text" id="age" onChange={this.handleChange} />
            <label htmlFor="designation">Designation</label>
            <input type="text" id="designation" onChange={this.handleChange} />
            <button>Submit</button>
        </form>
      </div>
    )
  }
}
