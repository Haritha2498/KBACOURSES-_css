import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignupPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState("admin");
  const navigate = useNavigate();

  // signup
  const signupSubmit = async (userDetails) => {
    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    });
    // return;
    console.log(res);
    if (res.ok) {
      toast.success(`Signup success`);
      return navigate("/");
    } else {
      toast.error(`Please check the input data`);
      return navigate("/sign-up");
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    const userDetails = {
      userName,
      password,
      email,
      userType
    };

    signupSubmit(userDetails);
  };

  return (
    <div style={{
      backgroundColor: '#FAF5FF',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh'
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '2.5rem',
        borderRadius: '0.5rem',
        boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
        maxWidth: '24rem',
        width: '100%'
      }}>
        <h2 style={{
          fontSize: '1.875rem',
          fontWeight: 'bold',
          color: '#6B21A8',
          marginBottom: '1rem',
          textAlign: 'center'
        }}>
          Sign Up
        </h2>
        <form onSubmit={submitForm}>
          <div style={{ marginBottom: '1rem' }}>
            <label
              htmlFor="name"
              style={{
                display: 'block',
                color: '#4A5568',
                fontWeight: 'bold',
                marginBottom: '0.5rem'
              }}
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              style={{
                width: '100%',
                padding: '0.5rem 0.75rem',
                border: '1px solid #E2E8F0',
                borderRadius: '0.25rem',
                boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
                outline: 'none',
                transition: 'box-shadow 0.2s',
                ':focus': {
                  boxShadow: '0 0 0 2px rgba(139, 92, 246, 0.5)'
                }
              }}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label
              htmlFor="email"
              style={{
                display: 'block',
                color: '#4A5568',
                fontWeight: 'bold',
                marginBottom: '0.5rem'
              }}
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: '100%',
                padding: '0.5rem 0.75rem',
                border: '1px solid #E2E8F0',
                borderRadius: '0.25rem',
                boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
                outline: 'none',
                transition: 'box-shadow 0.2s',
                ':focus': {
                  boxShadow: '0 0 0 2px rgba(139, 92, 246, 0.5)'
                }
              }}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label
              htmlFor="password"
              style={{
                display: 'block',
                color: '#4A5568',
                fontWeight: 'bold',
                marginBottom: '0.5rem'
              }}
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '100%',
                padding: '0.5rem 0.75rem',
                border: '1px solid #E2E8F0',
                borderRadius: '0.25rem',
                boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
                outline: 'none',
                transition: 'box-shadow 0.2s',
                ':focus': {
                  boxShadow: '0 0 0 2px rgba(139, 92, 246, 0.5)'
                }
              }}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label
              htmlFor="userType"
              style={{
                display: 'block',
                color: '#4A5568',
                fontWeight: 'bold',
                marginBottom: '0.5rem'
              }}
            >
              UserType:
            </label>
            <select
              id="userType"
              name="userType"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              style={{
                width: '100%',
                padding: '0.5rem 0.75rem',
                border: '1px solid #E2E8F0',
                borderRadius: '0.25rem',
                outline: 'none',
                transition: 'box-shadow 0.2s',
                ':focus': {
                  boxShadow: '0 0 0 2px rgba(139, 92, 246, 0.5)'
                }
              }}
              required
            >
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '1.5rem'
          }}>
            <button
              type="submit"
              style={{
                backgroundColor: '#6B21A8',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '0.25rem',
                cursor: 'pointer',
                outline: 'none',
                border: 'none',
                transition: 'background-color 0.2s',
                ':hover': { backgroundColor: '#5B1991' }
              }}
            >
              Sign Up
            </button>
          </div>
          <p style={{ textAlign: 'center' }}>
            Already have an account?{' '}
            <Link to="/" style={{
              color: '#6B21A8',
              textDecoration: 'none',
              transition: 'color 0.2s',
              ':hover': { textDecoration: 'underline' }
            }}>
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;