import { useState } from "react";

function LoginForm() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleLogin = () => {

        if (username !== "" && password !== "") {
            setMessage("Login Successful");
        } else {
            setMessage("Please enter username and password");
        }
    };

    return (
        <div className="card">
            <h2>Login Form</h2>

            <label>Username:</label>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            <br /><br />

            <label>Password:</label>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <br /><br />

            <button onClick={handleLogin}>
                Login
            </button>

            <p>{message}</p>
        </div>
    );
}

export default LoginForm;