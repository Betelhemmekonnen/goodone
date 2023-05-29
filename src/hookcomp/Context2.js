import React from 'react'
import {userContex} from '../App'
function Context2() {
  return (
	<userContex.Consumer>
	{
		user=>{
			return <div>hello {user}</div>
		}
	}
</userContex.Consumer>
  )
}

export default Context2