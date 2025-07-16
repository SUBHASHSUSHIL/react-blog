
function ClickEventFunction() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  function callFun(){
    alert("Function called!");
  }

  const fruits = (name) => {
    alert(`Hello ${name}`);
    }

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
        <button onClick={callFun}>Call Function</button>
        <button onClick={() => fruits("Apple")}>Apple</button>
        <button onClick={() => fruits("Banana")}>Banana</button>
        <button onClick={() => fruits("Orange")}>Orange</button>
        <button onClick={() => fruits("Mango")}>Mango</button>
    </div>
  );
}

export default ClickEventFunction;