import React, { useEffect } from 'react'
import { useParams, Link } from "react-router-dom";


export default function Profile({user, setUser}) {
// Profile will keep track of user, whether user is active user
// TODO : 
// THIS IS YOUR PROFILE OR OTHERS PROFILES 

  // fetches last 5 user.prompts and user.prompt answers 
  // (CUSTOM METHOD IN BACKEND)
  // maps through them => returns a ProfileAnswerCard component
  // DATA = PROMPT ANSWER 

  const [profile, setProfile] = useState(null)
	const [promptAnswers, setPromptAnswers] = useState({})
	const [activeUser, setIsActiveUser] = useState(false)
	
	const params = useParams();

useEffect(() => {
	fetch(`http://localhost:9292/find_by_username/${params.username}`)
	.then(res => res.json())
	.then(user => {
		setProfile(user)
		setPromptAnswers(user.prompt_answers)
		if(activeUser) {
			if (user.id === activeUser.id) {
				setIsActiveUser(true)
			}
		}
	})
}, [activeUser, params])

// useEffect(() => {
// 	// if user is on their own page 
// 	if (user.id === parseInt(params.user_id)) {
// 		setProfile({
// 			user: user
// 		});
// 	} else { // if not user id != profile, then no 
// 		fetch()
// 	}

// }

// IN USE EFFECT ..
// if user, on profile.js u should be able to edit, and see your 
// recently uploaded 

// ,mayve in useefffect hook 
// FIRST YOU FETCH THE USER _PROMPT ANSEWERS PARAMS. ID
// fwrch is /profile/recent/${params.prompt_answer_id} 
// then if user .. you can edit, ect 



// 	useEffect(() => {
// 		fetch(`http://localhost:9292/find_by_username/${params.username}`)
// 			.then(res => res.json())
// 			.then(user => {
// 				setProfile(user);
// 				setPrompts(user.prompt_answers);
// 				if (user) {
// 					if (user.id === activeUser.id) {
// 						setIsActiveUser(true)
// 					}
// 				}
// 			})
// 	},[activeUser, params])

// 	return ( 
//     <div className="profile-container">
// 			{profile ? (

// 				<>
// 					<h1 className="profile-heading">{isActiveUser ? "Your Profile |" : null } {`${profile.first_name} ${profile.last_name}`}</h1>

// 					<div className="profile-pic-div">
// 						<img className="user-picture-in-profile"
// 						src={profile.image_url}
// 						alt="profile"
// 						/>

// 						{isActiveUser ? (
// 							<Link className="link-to-edit" to={`/edit-user/${profile.username}`}><button className="edit-button">Edit Profile</button></Link>
// 						) : null}
// 					</div>

// 					<h2 className="headings-for-profile-images">{isActiveUser ? "Your Menus" : `${profile.first_name}'s Menus`}</h2>

// 					<div>
// 						{prompt_answers.map(prompt_answer => (
// 							<div key={prompt_answer.id} className="your-menus">
// 							 className="your-menu-images" prompt_answer={prompt_answer} tag={"prompt_answer"}/>
// 							</div>
// 						))}
// 					</div>

// 					<h2 className="headings-for-profile-images"> Liked Menus </h2>


// 					<div>
// 						 {likes.map(like => (
// 						<div key={like.id} className="liked-menus">
// 							= className="liked-menu-images" menu={like} tag={"like"}/>
// 						</div>
// 					))}
						
// 					</div>


// 				</>

				




// 			) : null}

				

//     </div>    
//   )
}
