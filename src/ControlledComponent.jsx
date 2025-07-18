import { useState } from "react";

function ControlledComponent() {
    const [value, setValue] = React.useState("");

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div>
            <input type="text" value={value} onChange={handleChange} />
            <p>Current Value: {value}</p>
        </div>
    );
}

export default ControlledComponent;

export function Controlled() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    return (
        <div>
            <form action="" method="get">
                <h1>Controller Component</h1>
                <br /><br />
                <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Enter your name" />
                <br /><br />
                <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Enter your password" />
                <br /><br />
                <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Enter your email" />
                <br /><br />
                <button>Submit</button>
                <button onClick={() => {setEmail('');setName('');setPassword('')}}>Clear</button>

                <h3>{name}</h3>
                <h3>{password}</h3>
                <h3>{email}</h3>
            </form>
        </div>
    );
}