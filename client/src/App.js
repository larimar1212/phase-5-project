
import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, Link } from 'react-router-dom';
import LandingPage from './components/LandingPage'; 
import Nav from './components/Nav';
import Prompts from './components/Prompts';
import PromptForm from './components/PromptForm';
import Feed from './components/Feed';
import EditProfileForm from './components/EditProfile';
import Profile from './components/Profile';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {

  //const [loginData, setLoginData] = useState({...loginBody})
  //const [signupData, setSignUpData] = useState({...signupBody})
  const  [user, setUser] = useState(null)
  

  //login
  useEffect(() => {
    let token = localStorage.getItem('token')
    if (token && !user) {
      fetch('http://localhost:3000/profile', {
        headers: {
          token: token,
					"Content-Type": "application/json"
				}
			})
      .then((res) => {
				if (res.ok) {
					res.json().then((user) => {
						setUser(user);
					});
				} else {
					res.json().then((data) => console.log(data));
				}
			});
		}
	}, [user]);



  /// fetch prompt answers 

  //fetch prompts 


  

  
    // render path depending on user being logged in
    //  const showLanding = () => {
    //   console.log('hi')
    //    return (
    //      !user ? <Feed user={user}/> : <LandingPage />
    //      )
  
    //  }
  
 
  return (
  
    <div className="App">
      <Nav
      user={user}
      setUser={setUser}
      /> 
      <Routes>
        <Route 
        path='/' 
        element={user ? <Feed user={user}/> : <LandingPage />} />
        <Route
					path='/login'
					element={<Login setUser={setUser} user={user} />}
				/>
        <Route
					path='/signup'
					element={<SignUp setUser={setUser} user={user} />}
				/>
        <Route
					path='/user/:user_id'
					element={user ? <Profile setUser={setUser} user={user}/> : null}
				/>
				<Route
					path='/edit-user/:username'
					element={<EditProfileForm setUser={setUser} user={user} />}
				/>
        <Route 
        path='/prompt/prompts' 
        element={<Prompts setUser={setUser} user={user} />} />
        <Route
        path='/prompt/answer_prompt' 
        element={<PromptForm setUser={setUser} user={user} />}/>
        <Route 
        path='/user/feed' 
        element={<Feed setUser={setUser} user={user} />} />
        </Routes>
 
    </div>
  );
}

export default App;



/*  
running into an issue where each rating has a diff 
user_id and diff prompt_answer id

a user has many prompt answers 

so prompt answers belong to prompts 

the prompt can be id 1 
and an answer can be by user_id: 2 
ratning -
rating.find(1).prompt_answer.prompt 

calculation is basrd on info that exists 
on thr server 
not needing to wait for srrvrt to trpsond 

custom method where i find the average rating 

*/