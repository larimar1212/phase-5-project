import React from 'react'
import { useEffect, useState } from 'react'
import FeedCard from './FeedCard'
import { useParams } from 'react-router-dom'

export default function Feed({user}) {
  const [answers, setAnswers] = useState([])
 //const [count, setCount] = useState(5)

//if user, want to see highest rated prompt answers and can click on the
// individual prompt answers, 

const params = useParams();

// Custom GET #shows top average answers 
useEffect(() => {
  let token = localStorage.getItem('token')
  fetch('http://localhost:3000/feed/answers', {
     headers: {
          Authorization: `Bearer: ${token}`
     }
  })
    .then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setAnswers(data)
          console.log(data)
        });
      } else {
        res.json().then((data) => console.log(data));
      }
    })
}, [user]);


// fetchinf the prompts controller and prompt answers here 


return (
  <div id="feed">
    <div id="feed-header">
      <h1>New Items From Your Friends</h1>
    </div>
    <div id="feed-list">
      {answers.map((answer) => (
        <FeedCard
          key={prompt.id}
          prompt={prompt}  
        />
      ))}
    </div>
  </div>
);
}


// {prompts.map(prompt => (
//   <FeedCard 
//   prompt={prompt} 
//   key={prompt.id} />
// ))}