import React, { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

const loginSubmit = async (e) => {
  e.preventDefault();
  const loginDetails = {
    email,
    password,
  };

  const res = await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginDetails),
  });




  console.log(res, "login res from /login");


  if (res.ok) { 
    // console.log('/login resp json', data)
    const data =await res.json();
    const userType = data.userType;
    // console.log('usertype ', userType)
    toast.success(`Logged in as : ${userType}`);
    return navigate("/home");

  } else {
    toast.error(`Please check your credentials`);
    return navigate("/");
  }

}


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
          Login
        </h2>
        <form onSubmit={loginSubmit}>
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
              type="text"
              id="email"
              name="email"
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div style={{ marginBottom: '1.5rem' }}>
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
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
              Login
            </button>
            <Link to="#" style={{
              color: '#6B21A8',
              textDecoration: 'none',
              transition: 'color 0.2s',
              ':hover': { textDecoration: 'underline' }
            }}>
              Forgot Password?
            </Link>
          </div>
          <p style={{ textAlign: 'center' }}>
            Don't have an account?{' '}
            <Link to="/sign-up" style={{
              color: '#6B21A8',
              textDecoration: 'none',
              transition: 'color 0.2s',
              ':hover': { textDecoration: 'underline' }
            }}>
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};


const getUserType = () => {
  const authToken = document.cookie
    .split("; ")
    .find((row) => row.startsWith("Authtoken"))
    ?.split("=")[1];
  console.log("documemnt.cookie vslue", authToken);

  const decoded = jwtDecode(authToken);
  console.log("decoded", decoded);
  const userType = decoded.userType;
  console.log("usertype", userType);
  return userType;
};

export { LoginPage as default,getUserType  };
// export default LoginPage
