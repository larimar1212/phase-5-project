import React from 'react'
import { useParams, Link } from "react-router-dom";
import PromptAnswersCard from './PromptAnswersCard';

export default function Profile({user, setUser}) {


  // fetches all user.prompts and user.prompt answers 
  const [profile, setProfile] = useState({})
	const [prompts, setPrompts] = useState([])
	const [isActiveUser, setIsActiveUser] = useState(false)
	
	const params = useParams();

	useEffect(() => {
		fetch(`http://localhost:9292/find_by_username/${params.username}`)
			.then(res => res.json())
			.then(user => {
				setProfile(user);
				setMenus(user.prompt_answers);
				if (user) {
					if (user.id === activeUser.id) {
						setIsActiveUser(true)
					}
				}
			})
	},[activeUser, params])

	return ( 
    <div className="profile-container">
			{profile ? (

				<>
					<h1 className="profile-heading">{isActiveUser ? "Your Profile |" : null } {`${profile.first_name} ${profile.last_name}`}</h1>

					<div className="profile-pic-div">
						<img className="user-picture-in-profile"
						src={profile.image_url}
						alt="profile"
						/>

						{isActiveUser ? (
							<Link className="link-to-edit" to={`/edit-user/${profile.username}`}><button className="edit-button">Edit Profile</button></Link>
						) : null}
					</div>

					<h2 className="headings-for-profile-images">{isActiveUser ? "Your Menus" : `${profile.first_name}'s Menus`}</h2>

					<div>
						{prompt_answers.map(prompt_answer => (
							<div key={prompt_answer.id} className="your-menus">
							<PromptAnswersCard className="your-menu-images" prompt_answer={prompt_answer} tag={"prompt_answer"}/>
							</div>
						))}
					</div>

					<h2 className="headings-for-profile-images"> Liked Menus </h2>


					<div>
						 {likes.map(like => (
						<div key={like.id} className="liked-menus">
							<PromptAnswersCard className="liked-menu-images" menu={like} tag={"like"}/>
						</div>
					))}
						
					</div>


				</>

				




			) : null}

				

    </div>    
  )
}
