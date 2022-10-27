import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Nav.css";

function Nav({ user, setUser }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
    navigate("/");
  };

// NEED LOGO 
//NEED FIRE SIGN FOR HOT LIST 
// dont forget hover over link
  return (
    <div className="header-component">
      <div className="container header__container">
        <div className="header__logo">
          <img src="https://image.ibb.co/kcVou6/path3000.png"></img>
          <h1 className="header__title">
            ScreenRight
            <span className="header__light">.io</span>
          </h1>
        </div>
        <div className="header__menu">
        {user ? (
          <div className="loggedin__header collapse">
            <Link to={`/user/${user.username}`}className="header__loggedin header__link">Your Profile

            </Link>
            <Link to={"/feed/answers"} className="header__loggedin header__link">The HotList
             </Link>
            <Link to={"/prompts"} className="header__loggedin header__link">Test Your Skills
            </Link>
            <button className="btn--loggedin " onClick={handleLogout}>
              Log Out
            </button>
          </div>
        ) : (
          <div className="header__elenco">
            
              <Link to={"/login"}className="header__el header__link">Login
              </Link>
              <Link to={"/"}className="header__el header__link">Success Stories</Link>
              <Link to={"/signup"}>
              <button className="btn btn--white ">SignUp →</button>
              </Link>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}

export default Nav;

/* 

*/
// '/user/:username/answers/:prompt_answer_id'