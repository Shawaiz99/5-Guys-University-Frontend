import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoLibrary } from "react-icons/io5";
import { useGlobalStore } from "../../hooks/useGlobalStore";
import { loginUser } from "../../api/auth";
import { saveToken } from "../../utils/auth";
import "./Signin.css";

function SignIn() {
  const navigate = useNavigate();
  const [showForgot, setShowForgot] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showError, setShowError] = useState({
    show: false,
    message: "",
  });

  const { store, dispatch } = useGlobalStore();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Login Form Data:", formData);
    dispatch({ type: "AUTH_START" });

    try {
      const data = await loginUser(formData);
      saveToken(data.token);
      dispatch({
        type: "AUTH_SUCCESS",
        payload: { token: data.token, user: data.user },
      });
      navigate("/home");
    } catch (err) {
      console.log("Login failed:", err.message);
      dispatch({ type: "AUTH_FAILURE", payload: err.message });
      setShowError({
        show: true,
        message: err.message,
      });
    }
  };

  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="container flex-column form-signin shadow p-4 rounded"
    >
      <div className="text-center mb-4">
        <IoLibrary className="fs-1 text-primary mb-3 " />
        <h1 className="text-primary">Welcome Back</h1>
        <p className="text-secondary">Sign in to access your library account</p>
      </div>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
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
      <div className="mb-3 d-flex flex-column">
        <label for="passwordInput" className="form-label">
          Password
        </label>

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
        <button
          className="btn btn-link"
          onClick={() => setShowForgot(!showForgot)}
        >
          Forgot Password?
        </button>
        {showError.show && (
          <div className="alert alert-danger" role="alert">
            {showError.message}
          </div>
        )}
        {/* Forgot password form */}
        {showForgot && (
          <div className="forgot-form mt-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="form-control mb-2"
            />
            <button
              type="button"
              className="btn btn-outline-primary w-100"
              onClick={() => {
                // Logic to handle password reset
                alert("Password reset link sent!");
                setShowForgot(false);
              }}
            >
              Reset Password
            </button>
          </div>
        )}
      </div>
      <button type="submit" className="btn btn-primary mt-2 p-2 w-100">
        Sign In
      </button>
      <div className="text-center mt-3">
        <p className="text-secondary">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </form>
  );
}

export default SignIn;
