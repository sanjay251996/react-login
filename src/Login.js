import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    navigate('/dashboard');
  };
  return (
    <div>
      <div className="loginParent">
        <div className="loginForm">
          <form onSubmit={handleSubmit}>
            <h3>Login Form</h3>
                  
            <input
              type="text"
              name="Username"
              value={username}
              onChange={(e) => setusername(e.target.value)}
            />
            <br />
                  
            <input
              type="password"
              name="Password"
              onChange={(e) => setpassword(e.target.value)}
            />
            <br />
                  
            <input className="submit" type="submit" value="Submit" />
                  
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
