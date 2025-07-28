import { useEffect } from "react";


const HandleProps = ({count, data}) => {
    const HandleCounter=()=>{
        console.log("HandleCounter Called");
    }

    useEffect(() => {
        HandleCounter();
    })

    return(
        <div>
            <h1>Counter Value {count}</h1>
            <h1>Counter Value {data}</h1>
        </div>
    )
}

export default HandleProps;