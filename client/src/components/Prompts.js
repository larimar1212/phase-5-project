import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

//PROMPTS/  it works when i click on one => prompts/1

export default function Prompts({user, setUser}) {
	const [prompts, setPrompts] = useState([])
	const {promptAnswer, setPromptAnswers} = useState('') 
	
	const navigate = useNavigate()
	
	const params = useParams()
//fetch prompt.all 
// if user and user.prompts != null ;
// fetch one prompt (id)
// fetch 
// if user id == prompt id, prompt answer csn be deleted, updated, or made 
/// if prompt id != to user id, cannot delete ro update
//  if user_id != to prompt_answer id, you cannot star/rate 


//navigate to singlePrompt after click


	useEffect(() => {
		if (user) {
			let token = localStorage.getItem('token')
			fetch(`http://localhost:3000/prompts`, {
        		headers: {
         	 		Authorization: `Bearer ${token}`
				}
			})
			.then((res) => {
				if (res.ok) {
					res.json().then((prompts) => {
						console.log('prompts', prompts)
						setPrompts(prompts);
					});
				} else {
					res.json().then((data) => console.log(data));
				}
			})
		}
	}, [user]);


	const handleClick = (id) => {
		navigate(`/prompts/${id}`)
		console.log(prompts)
		
	}
// (`/prompts/${params.prompt_id}`)



//prompt.category
  return (
    <div className='prompts-div'>
	<div className='prompt-container'>PROMPTS

		{prompts?.map((prompt) => (
			<div onClick={(e) => {handleClick(prompt.id)}}
			key={prompt.id}
			 >
			<h3 className='prompt-name'>
			{prompt.name}
			</h3>
			<h3>
			{prompt.content}
			</h3>
			<h3>
			{prompt.id}
			</h3>
				</div>
		))}
		
	</div>

	
		
	</div>
  )
}



//  <div className="prompt_answers">
//             {profile.prompt_answers.map((prompt_answer) => (
//               <div key={prompt_answer.id} 
// 			  className="prompt-answer">
// 				<h3 className="prompt_answer_text">{prompt_answer.content}</h3>
// 								<h3 className="prompt_answer_text">{prompt_answer.rating}</h3>
//               </div>
//             ))}