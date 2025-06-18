import { useNavigate } from "react-router";
import { useState } from "react";
import { IoLibrary } from "react-icons/io5";
import "./SignUp.css";

function SignUp() {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    });


    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }   

        navigate("/signin");
    }

    const handleOnChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

  return (
<form onSubmit={handleSubmit} className="container form-signup shadow p-4 rounded">
   <div className="text-center mb-4">
      < IoLibrary className="fs-1 text-primary mb-3 " />
      <h1 className="text-primary">Create an Account</h1>
      <p className="text-secondary">Join our library community</p>  
    </div>
    <div className="mb-3">
        <label for="textInput" className="form-label">Full Name</label>
        <input
            type="text" 
            className="form-control" 
            id="textInput" 
            aria-describedby="nameHelp"
            placeholder="Enter your name..."
            required
        />
  </div> 
  <div className="mb-3">
    <label 
        for="exampleInputEmail1" 
        className="form-label">
            Email address
    </label>
    <input 
        name="email"
        type="email" 
        onChange={handleOnChange} 
        value={formData.email}
        className="form-control" 
        id="exampleInputEmail1" 
        aria-describedby="emailHelp"
        placeholder="Enter your email..."
        required
        />
  </div>
  <div className="mb-3">
    <label 
        for="passwordInput" 
            className="form-label">Password</label>
    <input 
        name="password"
        type="password" 
        className="form-control" 
        id="passwordInput"
        onChange={handleOnChange}
        value={formData.password}
        minlength="6"
        placeholder="Enter your password..."
        required
        />
    <div id="passwordHelp" className="form-text">Your password must be at least 6 characters long.</div>
  </div>
  <div className="mb-3">
    <label 
        for="confirmPassword" 
        className="form-label">Confirm Password</label>
    <input 
        name="confirmPassword"
        type="password" 
        className="form-control" 
        id="confirmPassword"
        onChange={handleOnChange}
        value={formData.confirmPassword}
        placeholder="Confirm your password..."
        required    
    />
  </div>
  <button type="submit" className="btn btn-primary p-2 w-100">Create Account</button>
    <div className="text-center mt-3">
        <p className="text-secondary">Already have an account? </p>
        <a href="/signin" className="text-primary fw-bold text-decoration-none p-2">Sign In</a>
    </div>
</form>
  )
}

export default SignUp
