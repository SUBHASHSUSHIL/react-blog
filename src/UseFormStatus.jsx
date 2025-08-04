import { useFormStatus } from "react-dom";

function CustomerForm(){
    const {pending} = useFormStatus();
    console.log(pending);

    return (
        <>
        <h1>UseFormStatus Hook in React js</h1>
        <div>
            <input type="text" placeholder="Enter your name" />
            <br /><br />
            <input type="password" placeholder="enter your password" />
            <br /><br />
            <button disabled={pending}>{pending?'Submiting' : 'Submit'}</button>
        </div>
        </>
    )
}



function UseFormStatus(){

    const handleSubmit = () => {
        new Promise(res => setTimeout(res, 2000));
    }

    return (
        <>
        <form action="handleSubmit">
            <input type="text" placeholder="Enter your name" />
            <br /><br />
            <input type="password" placeholder="enyter your password" />
            <br /><br />
            <button>Submit</button>
        </form>

        <CustomerForm />
        </>
    )
}

export default UseFormStatus;