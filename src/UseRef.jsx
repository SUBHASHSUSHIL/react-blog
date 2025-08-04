import { useRef } from "react";

function UseRef(){

    const inputRef = useRef(null);
    const inputHandler=()=>{
        console.log(inputRef);
        inputRef.current.focus();
        inputRef.current.style.color='red',
        inputRef.current.placeholder = "enter password",
        inputRef.current.value = "1234"
    }

    const toggleHandler = () =>{
        if(inputRef.current.style.display != 'none'){
            inputRef.current.style.display = 'none'
        }
        else
        {
            inputRef.current.style.display = 'inline'
        }
    }

    return (
        <>
        <h1>use in useRef</h1>
        <button onClick={toggleHandler}>Toggle</button>
        <input ref={inputRef} type="text" placeholder="Enter text" />
        <button onClick={inputHandler}>Focus on input field</button>
        </>
    )
}

export default UseRef;