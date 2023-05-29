import React, { Component } from 'react'

export default class Formone extends Component {
	constructor(props) {
	  super(props)
	
	  this.state = {
		username: '',
		value: ''
	  }
	  this.handleChange=this.handleChange.bind(this);
	  this.handleSubmit=this.handleSubmit.bind(this);
	  this.handleselectChange=this.handleselectChange.bind(this)
	}
	handleChange(event){
     this.setState({
	   username: event.target.value
});
      
}
     handleSubmit(event){
    	event.preventDefault();
	    alert(this.state.username)
		
	}
	handleselectChange(event){
		this.setState({value:event.target.value})
	}
  render() {
	return (
	  <form onSubmit={(this.handleSubmit)}>
		<div> 
			<label>username</label>
			<input type="text" value={this.state.username} onChange={this.handleChange}/>
			<input type="submit" value="submit"/>
		</div>
		<select value={this.state.value} onChange={this.handleselectChange}>
			<option value="react">react</option>
			<option value="angular">angular</option>
			<option value="vue">veu</option>
		</select>
	  </form>
	)
  }
}
