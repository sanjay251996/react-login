import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");

    if (!username && !password) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <p>Welcome to your Dashboard</p>
    </div>
  );
};

export default Dashboard;
