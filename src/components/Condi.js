import React, { Component } from 'react'
 class Condi extends Component {
	constructor(props){
	super()
	this.state={isshe:true}
	}
  render() {
	return (
	  
		this.state.isshe?<div>"boss betty"</div>:<div>"she is not"</div>
	)
  }
}

export default Condi