function Appl(){
    const username="Sushil Thakur";
    let x = 30;
    let y = 20;
    let z = x + y;
    return(
        <>
            <h1>Welcome to Explain JSX</h1>
            <p>This is a simple React application demonstrating JSX syntax.</p>
            <h1>Username: {username}</h1>
            <p>Sum of {x} and {y} is {z}</p>
            <h1>{50 + 100 + 68}</h1>
            <button onClick={() => alert("Hello")}>Click</button>
        </>
    )
}

export default Appl; // This is the default export for the ExplainJSX file