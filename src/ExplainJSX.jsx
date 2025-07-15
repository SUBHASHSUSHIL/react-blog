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

export function TrafficLight() {
    function callFun(){
    return(
        alert("Function called")
    )
}
    return (
        <div>
            <h1>Sushil Kumar Thakur</h1>
            <img src="https://fastly.picsum.photos/id/237/250/250.jpg" alt="Sushil Thakur" class="photo" />
            <ul>
                <li>Invent new traffic lights</li>
                <li>Rehearse a movie scene</li>
                <li>Improve the spectrum technology</li>
            </ul>
            <button onClick={callFun}>Click Me</button>
        </div>
    );
}

