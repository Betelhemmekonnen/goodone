import React ,{Component} from 'react'

class States extends Component{
	constructor(){
		super()
			this.state ={message:"i love gudeta"}
		}
		correctMessage(){
			this.setState({message:"i love betty not rahel"})
		}
	
	render(){
		return(
			<div>
				{this.state.message}
			     <button onClick={()=>this.correctMessage()}>check</button>
			</div>
		)
	}
}

export default States