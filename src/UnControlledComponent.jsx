import { useRef } from "react";

function UnControlledComponent(){

    const handleForm = (event)=>{
        event.preventDefault();
        const user = document.querySelector("#user").value;    //use in dom manipulation
        const password = document.querySelector("#password").value;
        console.log(user, password);
    }

    const handleFormref =(event) =>{
        event.preventDefault();
        const user = userref.current.value;                    // use in useRef
        const password = passwordref.current.value;
        console.log("HandlerFormRef", user, password);
    }

    const userref = useRef();
    const passwordref = useRef();

    return (
        <>
        <h1>use in unControlled Component in React js</h1>
        <form action="" method="post" onSubmit={handleForm}>
            <input type="text" id="user" placeholder="Enter your name" />
            <br /><br />
            <input type="password" id="password" placeholder="Enter your password" />
            <br /><br />
            <button>Submit</button>
        </form>
        <hr />

        <h1>use in unControlled Component</h1>

        <form action="" method="post" onSubmit={handleFormref}>
            <input type="text" ref={userref} placeholder="Enter your name" />
            <br /><br />
            <input type="password" ref={passwordref} placeholder="Enter your password" />
            <br /><br />
            <button>Submit</button>
        </form>
        </>
    )
}

export default UnControlledComponent;