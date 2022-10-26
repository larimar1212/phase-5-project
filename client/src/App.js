
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
import PromptAnswersPage from './components/PromptAnswersPage';
import SinglePrompt from './components/SinglePrompt';
import EditAnswer from './components/EditAnswer';


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
          Authorization: `Bearer ${token}`
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

console.log({user})
  


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
					path='/user/:username'
					element={user ? <Profile setUser={setUser} user={user}/> : null}
				/>
				 <Route
					path='/edit-user/:username'
					element={<EditProfileForm setUser={setUser} user={user} />}
				/> 
        <Route 
        path='/prompts' 
        element={<Prompts setUser={setUser} user={user} />} />
         <Route 
        path='/prompts/:prompt_id' 
        element={<SinglePrompt setUser={setUser} user={user} />} />

        <Route
        path='/answers/:prompt_answer_id' 
        element={<PromptAnswersPage setUser={setUser} user={user} />} />
        <Route
        path='/prompts/answer_form' 
        element={<PromptForm setUser={setUser} user={user} />}/>
        <Route 
        path='/edit-user/:prompt_answer_id'
        element={<EditAnswer setUser={setUser} user={user} />} />
        <Route 
        path='/feed/answers' 
        element={<Feed setUser={setUser} user={user} />} />
        
        </Routes>
 
    </div>
  );
}

export default App;

// two comp


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