import { useState } from "react";
import Clock from "./Clock";


function App() {  
    const [color, setColor] = useState('red');
  return (
    <div>
     <h1>Digital Clock in React js</h1>
     <select onChange={(event) => setColor(event.target.value)}>
      <option value="yellow">Yellow</option>
      <option value="red">Red</option>
      <option value="orange">Orange</option>
      <option value="green">Green</option>
     </select>
     <Clock color={color} />
    </div>
  );
}


export default App;