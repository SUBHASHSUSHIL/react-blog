import { useState } from 'react';

function RadioButton() {
    const [gender, setGender] = useState('female');
    const [state, setState] = useState('BR');
  return (
    <div>
        <h2>Radio Button Component</h2>
        <input type="radio" onChange={(event) => setGender(event.target.value)} name="gender" value={'male'} checked={gender == 'male'} id="male" />
        <label htmlFor="male">Male</label>
        <input type="radio" onChange={(event) => setGender(event.target.value)} name="gender" value={'female'} checked={gender == 'female'} id="female" />
        <label htmlFor="female">Female</label> 
        <h2>Selected Gender: {gender}</h2>
<br /><br />
<h2>Select States</h2>
<select defaultValue={"BR"} onChange={(event) => setState(event.target.value)}>
    <option value="UP">Uttar Pradesh</option>
    <option value="MP">Madhya Pradesh</option>
    <option value="MH">Maharashtra</option>
    <option value="DL">Delhi</option>
    <option value="KA">Karnataka</option>
    <option value="TN">Tamil Nadu</option>
    <option value="WB">West Bengal</option>
    <option value="GJ">Gujarat</option>
    <option value="RJ">Rajasthan</option>
    <option value="AP">Andhra Pradesh</option>
    <option value="BR">Bihar</option>
    <option value="HR">Haryana</option>
    <option value="PB">Punjab</option>
    <option value="OR">Odisha</option>
    <option value="KL">Kerala</option>
    <option value="JH">Jharkhand</option>
    <option value="AS">Assam</option>
    <option value="CT">Chhattisgarh</option>
    <option value="UT">Uttarakhand</option>
    <option value="JK">Jammu and Kashmir</option>
    <option value="TR">Tripura</option>
    <option value="NL">Nagaland</option>
    <option value="ML">Meghalaya</option>
    <option value="AR">Arunachal Pradesh</option>
    <option value="MN">Manipur</option>
    <option value="SK">Sikkim</option>
    <option value="HP">Himachal Pradesh</option>
    <option value="GA">Goa</option>
    <option value="CH">Chandigarh</option>
    <option value="PY">Puducherry</option>
</select>
<h2>Selected State: {state}</h2>


    </div> 
  );
}

export default RadioButton;