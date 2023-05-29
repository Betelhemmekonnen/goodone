import './App.css';
/*import Greet from './components/Greet'
import Welcome from './components/Welcome'
import States from './components/States'
import Count from './components/Count';
import Events from './components/Eventsfunc';
import Eventsclass from './components/Eventsclass';
import Condi from './components/Condi';
import Formone from './components/Formone';
import Counts from './hookcomp/Counts';
import CounterTwo from './hookcomp/CounterTwo';
import CountEffect from './hookcomp/CountEffect';
import Effectone from './hookcomp/Effectone';
import Datafeching from './hookcomp/Datafeching'
*/
import React from 'react';
import Context from './hookcomp/Context'
export const userContex = React.createContext()
function App() {
  return (
    <div className="App">
      <userContex.Provider value={'betty'}>
        <Context/>
      </userContex.Provider>
      </div>
    /*<>
    <div/* className="App">
      <Greet part1="nege"/>
      <Welcome/>
      <States/>
      <Count/>
      <div><Events/></div>
      <div><Eventsclass/></div>
      <Condi/>
       <Formone/>
    </div>
    </div>
    <div>
      <Counts/>
      <CounterTwo/>
      <CountEffect/>
      <Effectone/>
      <Datafeching/>
    </div>
    </>
*/

  );
}

export default App;
