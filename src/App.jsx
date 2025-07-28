import { useState } from "react";
import HandleProps from "./HandleProps";



function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);

  return (
    <div>
      <HandleProps />
      
    </div>
  );
}


export default App;