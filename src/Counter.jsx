import { useEffect } from "react";

const Counter=({count, data})=>{

    const HandleCount=()=>{
        console.log("HandlerCount called.")
    }


    useEffect(()=>{
    HandleCount();
    },[])

    const Hander=()=>{
        console.log("Hi Mr.Das")
    }

    useEffect(()=>{
        Hander();
    },[data])

    return(
        <div>
            <h1>Counter value {count}</h1>
            <h1>Data value {data}</h1>
        </div>
    )
}

export default Counter;