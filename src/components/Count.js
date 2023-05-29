 import React , {Component} from "react";
class Count extends Component{
	constructor(){
		super()
		 this.state = {count:0}
		
}
timeClock(){
	this.setState({count:this.state.count+1})
}
render(){
	return(
		<>
		<h1>count - {this.state.count}</h1>
		<button onClick={()=>this.timeClock()}>start</button>
		</>
	)
}
}
export default Count;