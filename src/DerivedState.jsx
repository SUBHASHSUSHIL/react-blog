import { useState } from "react";

function DerivedState(){
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState('');
    const handleAddUsers=()=>{
        setUsers([...users, user])
    }
    const total = users.length;
    const last = users[users.length-1];
    const unique = [...new Set(users)].length;

    return (
        <>
        <h1>use derived state in react js</h1>
        <h2>Total User : {total}</h2>
        <h2>Last user : {last}</h2>
        <h2>Unique total users : {unique}</h2>

        <input type="text" onChange={(event)=>setUser(event.target.value)} placeholder="Add new users" />
        <button onClick={handleAddUsers}>Add User</button>
        {
            users.map((item, index) => (
                <h4 key={index}>{item}</h4>
            ))
        }
        </>
    )
}

export default DerivedState;