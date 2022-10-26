import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import PromptForm from './PromptForm'

//PROMPTS/1
// 404 == frontend issue 
export default function SinglePrompt({user}) {
    const [prompt, setPrompt] = useState({})

    const params = useParams()
    
    useEffect(() => {
        console.log(params.prompt_id)
        let token = localStorage.getItem('token')
        fetch(`http://localhost:3000/prompts/${params.prompt_id}`, {
            headers: {
                Authorization: `Bearer: ${token}`
            }
        })

        .then((res) => res.json())
        .then((data) => {
            console.log('data', data)
            setPrompt(data)
        })
        .catch((e) => console.error(e));
    }, [params, user])
    


    // prompts/1  GET req. params/prompt_id 
    //malke form child of this component 
    // click on prompt nsvigstr to prompt form


    
  return (
    <div>SinglePrompt
        <div className='single-prompt-container'>
            <div key={prompt.id}>
                <h3>{prompt.name}
                <p>{prompt.content}</p>
                </h3>
                <p>
                    <PromptForm 
                    prompt={prompt}
                    user={user}/>
                </p>

            </div>

        </div>
    </div>
  )
}
