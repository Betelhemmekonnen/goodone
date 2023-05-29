import React from 'react'

function Listname() {
  /*const name=["betty","rich","kale","mekdi"]
  return (
    <div>{name.map(names=><h2>{names}</h2>)}</div>
  )*/
  const person=[
	{name:"betty",age:20, year:3}, {name:"betty",age:20, year:3}, {name:"betty",age:20, year:3}];
	const pers=person.map(persons=>(<h1>hello{persons.name}</h1>))
	return(
	   <div>{pers}</div>
	)
}

export default Listname;