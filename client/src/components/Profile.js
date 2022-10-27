import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import './Profile.css'

export default function Profile({ user, setUser }) {
  // Profile will keep track of user, whether user is active user
  // TODO :
  // THIS IS YOUR PROFILE OR OTHERS PROFILES

  // fetches last 5 user.prompts and user.prompt answers
  // (CUSTOM METHOD IN BACKEND)
  // maps through them => returns a ProfileAnswerCard component
  // DATA = PROMPT ANSWER

  // TODO -- LINK TO PROMPT ANSWERS WHEN CLICKING ON ANSWER 

  const [profile, setProfile] = useState(null);
  const [promptAnswers, setPromptAnswers] = useState({});
  const [activeUser, setIsActiveUser] = useState(false); // state to determine if user is on their own profile
  const [prompts, setPrompts] = useState({}) // set the prompts too 

  const params = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    let token = localStorage.getItem("token");
    fetch(`http://localhost:3000/users/${params.username}`, {
      headers: {
        Authorization: `Bearer: ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProfile(data);
        console.log(`/${params.username}`, data);
        setPromptAnswers(data.prompt_answers);
		console.log(data.prompt_answers)
        if (user.id === data.id) {
          setIsActiveUser(true);
        }
      });
  }, [activeUser, params]);

  console.log(user)


  const handleClick = (id) => {
   navigate(`/answers/${id}`)
  };

  // make fetch request to get all the prompts as well 

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

  return (
    <div className="profile-container">
      {profile ? (
        <>
          <h1 className="profile-heading">
            {activeUser ? "Your Profile " : `${profile.first_name} ${profile.last_name} Profile`}
          </h1>

          <div className="profile-pic-div">
            <img
              className="user-picture-in-profile"
              src={profile.profile_picture}
              alt="profile"
            />

            {activeUser ? (
              <Link to={'/edit-user/:username'}>
              <button> EDIT PROFILE
              </button>
                  </Link>
            ) : null}
          </div>

		  <div className="profile-badge">
			<img
			className="badge"
			src={profile.badge} />

		  </div>

          <h2 className="headings-for-profile-images">
            {activeUser ? "Recent Prompts" : `${profile.first_name}'s Prompt Answers`}
          </h2>

          <div className="prompt_answers">
            {profile.prompt_answers.map((prompt_answer) => (
              <div key={prompt_answer.id} 
              onClick={(e) => {
                handleClick(prompt_answer.id)
              }}
			  className="prompt-answer">
				<h3 className="prompt_answer_text">{prompt_answer.content}</h3>
								<h3 className="prompt_answer_text">{prompt_answer.rating}</h3>
              </div>
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
