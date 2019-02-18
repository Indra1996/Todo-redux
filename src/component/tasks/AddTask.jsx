import React, { Component } from 'react'

export default class addEmployee extends Component {
    state = {
        name: null ,
        estimation: null ,
        company: null 
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTask(this.state);
        e.target.value = ""
    }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" onChange={this.handleChange} />
            <label htmlFor="estimation">Estimation</label>
            <input type="text" id="estimation" onChange={this.handleChange} />
            <label htmlFor="company">Company</label>
            <input type="text" id="company" onChange={this.handleChange} />
            <button>Submit</button>
        </form>
      </div>
    )
  }
}
