import React,{useEffect, useState} from 'react'

function CountEffect() {
	const [count, setCount] = useState(0);
	useEffect(()=>{
      document.title = `betty ${count}`
	})
  return (
	<div>
		<button onClick={()=>setCount(count+1)}>count{count}</button>
	</div>
  )
}

export default CountEffect