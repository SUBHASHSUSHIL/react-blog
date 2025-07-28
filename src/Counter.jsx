import { useEffect } from "react";

const Counter=({count, data})=>{

    // const HandleCount=()=>{
    //     console.log("HandlerCount called.")
    // }


    // useEffect(()=>{
    // HandleCount();
    // },[])

    // const Hander=()=>{
    //     console.log("Hi Mr.Das")
    // }

    // useEffect(()=>{
    //     Hander();
    // },[data])

    useEffect(()=>{
        console.log("mounting phase only");  //example in mounting one time call in display ui
    },[])

    useEffect(()=>{
        console.log("update phase only");    //example in updating multiple times hits  in multiple times call
    },[data])

    useEffect(()=>{
        return () => {
            console.log("unmounting phase only");
        }
    },[])

    return(
        <div>
            <h1>Counter value {count}</h1>
            <h1>Data value {data}</h1>
        </div>
    )
}

export default Counter;