import { useState } from "react"; // Importing useState from React to manage state in functional components, which is a key feature of React Hooks.
                               

function UseStateAndHooks() {
  const [count, setCount] = useState(0);

  const increment = () => {     //Array function to increment the count
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default UseStateAndHooks;

export function Fruit(){
    const [fruit, setFruit] = useState("Apple");
    const changeFruit = () => {
        setFruit(fruit ==="Apple"? "Banana" : "Apple"); // Toggle between Apple and Banana
    };

    return (
        <div>
            <h1>Fruit: {fruit}</h1>
            <button onClick={changeFruit}>Change Fruit</button>
        </div>
    );

}