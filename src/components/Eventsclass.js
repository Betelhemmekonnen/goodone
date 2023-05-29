import React, { Component } from 'react'

class Eventsclass extends Component {
	betty(){
		alert("beutifull day!")
	}
  render() {
	return (
	  <div><button onClick={()=>{this.betty()}}>message for betty</button></div>
	)
  }
}

export default Eventsclass