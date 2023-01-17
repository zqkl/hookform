import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmPassword, setConfirmPassword] = useState("");
    const[firstNameError,setFirstNameError] = useState("");
    const[lastNameError,setlastNameError] = useState("");
    const[emailError,setEmailError] = useState("");
    const[passwordError,setPasswordError] =useState("");
    const[confirmPasswordError,setConfirmPasswordError] = useState("");
    
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName,lastName, email, password,confirmPassword,firstNameError,lastNameError,emailError,passwordError,confirmPasswordError };
        console.log("Welcome", newUser);
    };

    const handleFirstName = (e) => {
        setfirstName(e.target.value) 
        if (e.target.value.length < 2){
            setFirstNameError("First Name field must be longer than 2 characters!")
        }else{
            setFirstNameError(null)
        } 
    }

    const handleLastName = (e) => {
        setlastName(e.target.value)
        if (e.target.value.length < 2){
            setlastNameError("Last Name field must be longer than 2 characters!")
        }else{
            setlastNameError(null)
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
        if (e.target.value.length < 5){
            setEmailError("Email must be longer than 5 characters")
        }else{
            setEmailError(null)
        } 
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 8){
            setPasswordError("Passwords must be longer than 8 characters")
        }else{
            setPasswordError(null)

        }
    }
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
        if(e.target.value != password){
            setConfirmPasswordError("Passwords must match!")
        }else{
            setConfirmPasswordError(null)
        }
    }


    
    return(
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label>
                {firstNameError&&<p style={{color:'red'}}>{firstNameError}</p>} 
                <input type="text" onChange  = {handleFirstName} />
            </div>
            <div>
                <label>Last Name: </label>
                {lastNameError&&<p style={{color:'red'}}>{lastNameError}</p>} 
                <input type="text" onChange= {handleLastName} />
            </div>
            <div>
                <label>Email Address: </label>
                {emailError&&<p style={{color:'red'}}>{emailError}</p>} 
                <input type="text" onChange= {handleEmail} />
            </div>
            <div>
                <label>Password: </label>
                {passwordError&&<p style={{color:'red'}}>{passwordError}</p>} 
                <input type="text" onChange= {handlePassword} />
            </div>
            <div>
                <label>Confirm Password: </label>
                {confirmPasswordError&&<p style={{color:'red'}}>{confirmPasswordError}</p>} 
                <input type="text" onChange= {handleConfirmPassword}/>
            </div>
            <input type="submit" value="Create User" />
            <h1>Your Data</h1>
            <p>First Name:{firstName}</p>
            <p>Last Name:{lastName}</p>
            <p>Email:{email}</p>
            <p>Password:{password}</p>
            <p>Confirm Password:{confirmPassword}</p>
        </form>
    );
};
    
export default UserForm;