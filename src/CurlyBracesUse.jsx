function CurlyBracesUse() {
    const name = "Sushil Thakur";
    const userObject = {
        name: "Sushil Thakur",
        age: 30,
        city: "New York"
    };
    const userArray = ["Sushil Thakur ", 30, " New York"];
    let x = 10;
    let y = 20;

    let path = "https://www.freepik.com/pikaso/explore/1118";

    function fruit() {
        return "Apple";
    }

    function operation(a, b, op) {
        if (op === "+") {
            return a + b;
        } else if (op === "-") {
            return a - b;
        } else if (op === "*") {
            return a * b;
        } else if (op === "/") {
            return a / b;
        } else {
            return "Invalid operation";
        }
    }

    return (
        <div>
            <h1>{name ? name : "name not found"}</h1>
            <h1>{userObject.name}</h1>
            <h1>{userArray}</h1>
            <h1>{x + y}</h1>
            <h1>{x > y ? "x is greater than y" : "y is greater than x"}</h1>
            <h1>{fruit()}</h1>
            <h1>{operation(10, 20, "-")}</h1>
            <input type="text" value={name} />
            <img 
            src={path}
             />
        </div>
    );
}

export default CurlyBracesUse;