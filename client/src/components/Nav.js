import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Nav({ user, setUser }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
    navigate("/");
  };

  return (
    <div className="navbar-div">
      {user ? (
        <div className="nav-item-container">
          <Link to={`/user/${user.username}`}>
            <button className="nav-item">YOUR PROFILE</button>
          </Link>
          <Link to={"/feed/answers"}>
            <button className="nav-item">THE HOTLIST</button>
          </Link>
          <Link to={"/prompts"}>
            <button className="nav-item">TEST YOUR SKILLS</button>
          </Link>
          <button className="nav-item" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      ) : (
        <div className="landing-page-navbar">
          <div className="nav-item">
            <Link to={"/signup"}>
              <button className="nav-button">GET STARTED</button>
            </Link>
            <Link to={"/login"}>
              <button className="nav-button">LOGIN</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Nav;
