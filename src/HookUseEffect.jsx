import { useEffect, useState } from "react";


function HookUseEffect(){
    const [counter, setCounter] = useState(0);
    const [data, setData] = useState(0);

    // useEffect(() => {   // only one time call in this function
    //     CallOnce();
    // },[])

    // useEffect(() => {   // This function call every time
    //     CallOnce();
    // })

    function CallOnce(){
        console.log("CallOnce function called");
    }

    function CounterFunction(){
        console.log("CounterFunction", counter);
    }
    //CounterFunction();  // execute apilication call this function and maltiple times call 

    useEffect(() => {
        CounterFunction();
    },[counter, data])


    return(
        <div>
            <h1>useEffect Hook</h1>
            <button onClick={() => setCounter(counter + 1)}>Counter {counter}</button>
            <button onClick={() => setData(data + 1)}>Data {data}</button>
        </div>
    )
}

export default HookUseEffect;