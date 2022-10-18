import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';


export default function Prompts({user, setUser}) {
	const params = useParams();
	const [prompts, setPrompts] = useState([])
	const {promptAnswer, setPromptAnswers} = useState('')

//fetch prompt.all 
// if user and user.prompts != null ;
// fetch one prompt (id)
// fetch 
// if user id == prompt id, prompt answer csn be deleted, updated, or made 
/// if prompt id != to user id, cannot delete ro update
//  if user_id != to prompt_answer id, you cannot star/rate 


const blankState = {
	content: ""
}
	useEffect(() => {
	 setPrompts([]);
		if (user) {
			fetch(`http://localhost:3000/prompt/prompts`)
			.then((res) => {
				if (res.ok) {
					res.json().then((prompts) => {
						setPrompts(prompts);
					});
				} else {
					res.json().then((data) => console.log(data));
				}
			})
		}
	}, [user]);






  return (
    <div>Prompts</div>
  )
}
