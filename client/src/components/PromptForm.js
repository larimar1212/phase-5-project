import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import './PromptForm.css'
//import { useNavigate } from 'react-router-dom'


/// PROMPTS/ANSWER_FORM
export default function PromptForm({user, prompt}) {
  //const initialState = {content: ""}
  const [formContent, setFormContent] = useState("")

  //const navigate = useNavigate()
  
//fetching prompt #show method (method  works, just include auth token and header)
// post creating a prompt answer, updating, deleting 

const handleChange = (e) => {
  const {name, value} = e.target; 
setFormContent(value)

}

//POST /prompt_answers 
 const handleSubmit = (e) => {
   e.preventDefault()
    console.log(user)
   console.log(prompt)
   let token = localStorage.getItem('token')
   if (token) {
    fetch('http://localhost:3000/prompt_answers', {
  			method: "POST",
 			headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
 			},
 			body: JSON.stringify({
        user_id: user.id,
        prompt_id: prompt.id,
        content: formContent
        
      }),
 		})
 			.then((res) => {
 				setFormContent('');
 				if (res.ok) {
					res.json().then((data) => {
 						//localStorage.getItem("token", data.token);
 						console.log(data)
 						//navigate('/')	
 					});
 				} else {
 					res.json().then((data) => {
					console.log(data);
						// setErrors...
 					});
 				}
 			})
    }
	}


  return (
    <div>
<div className='body-for-prompt'>
<div className="wrap-pf">
   <div className="toolbar">
   </div>
   {/* <div className="editor"></div> */}

      <div className='head-pf'>What comes next?</div>
      <div className='editor'>
        <div className='p-f-contain'>
        </div>
        <form onSubmit={handleSubmit}>

          <div>
          <textarea className='text-input'
          id="lari"
          required 
          type="text"
          name="name"
          placeholder='Write Your Response'
          value={formContent.name}
          onChange={handleChange} 
          
          />
          </div>
        <input className="form-menu-submit" type="submit" value="Submit" />
        </form>

      </div>

      </div>
      </div>
    </div>
  )
}