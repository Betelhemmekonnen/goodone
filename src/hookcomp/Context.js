import React from 'react'
import {userContex} from '../App'
import Context2 from './Context2'
function Context() {
  return (
	<div>
		<userContex.Consumer>
			{
				user=>{
					return <div>{user}context</div>
				}
			}
		</userContex.Consumer>
		<Context2/>
	</div>
  )
}

export default Context