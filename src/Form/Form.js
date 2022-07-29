import { useState } from "react";


const Form = (props) => {

    const [nameInput, setNameInput] = useState('');
    const [ageInput, setAgeInput] = useState('');
    const [yearsInput, setYearsInput] = useState('');

    const SubmitHandler = (event) => {
        event.preventDefault();
        props.objectTransfer({
            name: nameInput,
            age: ageInput,
            years: yearsInput
        })

    }


    return(
        <div style = {{position: "relative"}}>
            <p>{props.stringTransfer}</p>
            <form onSubmit = {SubmitHandler} style = {{}}>
                <h2>Fill in Data</h2>
                <label>Name: </label>
                <input value = {nameInput} onChange = {(event) => setNameInput(event.target.value)}/>
                <br/>
                <label>Age:</label>
                <input value = {ageInput} onChange = {(event) => setAgeInput(event.target.value)}/>
                <br/>
                <label>Years: </label>
                <input value = {yearsInput} onChange = {(event) => setYearsInput(event.target.value)}/>
                <br/><br/>
                <button>Submit</button>
            </form>
        </div>
    )
}
export default Form;