import React,{useState} from 'react'

function CounterTwo() {
	const initialcount=0;
	const [count, setCount] = useState(initialcount);
	const increamentFive = ()=>{
		for(var i=0;i<5;i++){
			setCount(prevCount=>prevCount+1);
		}
	}
  return (
	<div>
		<button onClick={()=>setCount(count+1)}>count{count}</button>
		<button onClick={()=>setCount(initialcount)}>reset</button>
		<button onClick={increamentFive}>incrementFive</button>
	</div>
  )
}

export default CounterTwo