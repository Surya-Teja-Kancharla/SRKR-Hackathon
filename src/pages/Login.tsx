import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

const Login: React.FC = () => {
    const navigate = useNavigate(); // Initialize the navigate function

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault(); // Prevent default form submission
        navigate('/dashboard'); // Redirect to the dashboard
    };

    return (
        <div>
            <style>
                {`
                    html, body {
                        margin: 0;
                        height: 100%; /* Ensure the body takes full height */
                        font-family: 'Arial', sans-serif;
                    }
                    .container {
                        display: flex;
                        width: 100%;
                        height: 100vh; /* Set the container height to full viewport height */
                    }
                    .left {
                        flex: 1;
                        background-color: #ffffff;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    .right {
                        flex: 1;
                        background-color: #4A6EDB;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        color: #ffffff;
                    }
                    .right h1 {
                        font-size: 2em;
                        margin: 0;
                    }
                    .right p {
                        margin: 10px 0;
                    }
                    .right a {
                        color: #ffffff;
                        text-decoration: underline;
                    }
                    .form {
                        display: flex;
                        flex-direction: column;
                        width: 80%;
                        max-width: 300px;
                    }
                    .form input[type="text"], 
                    .form input[type="password"] {
                        padding: 10px;
                        margin: 10px 0;
                        border: none;
                        border-radius: 5px;
                        font-size: 1em; /* Increase font size for better visibility */
                        color: #333; /* Change text color for better contrast */
                    }
                    .form button {
                        padding: 10px;
                        margin: 20px 0;
                        border: none;
                        border-radius: 5px;
                        background-color: #6C8AE4;
                        color: #ffffff;
                        cursor: pointer;
                    }
                    .form button:hover {
                        background-color: #5A7AD1;
                    }
                `}
            </style>
            <div className="container">
                <div className="left">
                    <img
                        alt="Illustration of a doctor and a patient interacting through mobile screens"
                        height="400"
                        src="https://storage.googleapis.com/a1aa/image/s7fZWseEPFh920LycYnUK9efyBhwY4N8UFeLXTfdtF4a6g45E.jpg"
                        width="400"
                    />
                </div>
                <div className="right">
                    <h1>Welcome Back!</h1>
                    <p>
                        Don't have an account yet? 
                        <a href="/signup">   Create an Account</a>
                    </p>
                    <form className="form" onSubmit={handleSubmit}>
                        <input placeholder="Username" type="text" />
                        <input placeholder="Password" type="password" />
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;