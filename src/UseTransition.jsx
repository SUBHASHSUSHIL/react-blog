import { useTransition } from "react";

function UseTransition(){
    const [pending, startTransition] = useTransition();

    const handleButton = () =>{
        startTransition(async ()=>{
            await new Promise(res => setTimeout(res, 5000))
        })
    }

    return (
        <>
        <h1>useTransition in React js</h1>
        <button disabled={pending} onClick={handleButton}>Submit</button>
        </>
    )
}

export default UseTransition;