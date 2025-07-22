import { useState } from "react";

function Checkboxs() {
    const [skills, setSkills] = useState([]);
    const handleSkills=(event)=>{
        console.log(event.target.value, event.target.checked);
        if(event.target.checked){
            setSkills([...skills, event.target.value]);
        }else{
            setSkills(skills.filter(skill => skill !== event.target.value));
        }
    }
    return (
        <div>
            <h3>Select Your Skills</h3>
            <input onChange={handleSkills} type="checkbox" id="php" value="php" />
            <label htmlFor="php">PHP</label>
            <br /><br />

            <input onChange={handleSkills} type="checkbox" id="javascript" value="javascript" />
            <label htmlFor="javascript">JavaScript</label>
            <br /><br />

            <input onChange={handleSkills} type="checkbox" id="python" value="python" />
            <label htmlFor="python">Python</label>
            <br /><br />
            <input onChange={handleSkills} type="checkbox" id="java" value="java" />
            <label htmlFor="java">Java</label>
            <br /><br />
            <input onChange={handleSkills} type="checkbox" id="csharp" value="csharp" />
            <label htmlFor="csharp">C#</label>
             
            <h1>{skills.toString()}</h1>
        </div>
    );
}

export default Checkboxs;