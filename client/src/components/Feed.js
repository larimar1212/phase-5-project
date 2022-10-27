import React from 'react'
import { useEffect, useState } from 'react'
import FeedCard from './FeedCard'
import { useParams } from 'react-router-dom'
import {FaFire} from 'react-icons/fa'
import './Feed.css'

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
          console.log('top 5 answers', data)
        });
      } else {
        res.json().then((data) => console.log(data));
      }
    })
}, [user]);


// fetchinf the prompts controller and prompt answers here 


return (
  <div id="feed-container">
    <div className="feed-card-container">
	
	<div className="page" data-num="one">
		<div className="feed-card-title"></div>
		<div className="para">
			<div className="line"></div>
			<div className="line"></div>
			<div className="line"></div>
			<div className="line"></div>
			<div className="line"></div>
		</div>
		<div className="para">
			<div className="line"></div>
			<div className="line"></div>
			<div className="line"></div>
			<div className="line"></div>
			<div className="line"></div>
		</div>
		<div className="para">
			<div className="line"></div>
			<div className="line"></div>
			<div className="line"></div>
			<div className="line"></div>
			<div className="line"></div>
		</div>
	</div>
	<div className="shadow" data-num="one"></div>
	
	<div className="page" data-num="two">
		<div className="feed-card-title"></div>
		<div className="para">
			<div className="line"></div>
			<div className="line"></div>
			<div className="line"></div>
			<div className="line"></div>
			<div className="line"></div>
		</div>
		<div className="para">
			<div className="line"></div>
			<div className="line"></div>
			<div className="line"></div>
			<div className="line"></div>
			<div className="line"></div>
		</div>
		<div className="para">
			<div className="line"></div>
			<div className="line"></div>
			<div className="line"></div>
			<div className="line"></div>
			<div className="line"></div>
		</div>
	</div>
	<div className="shadow" data-num="two"></div>
	
	<div className="page" data-num="three">
		<div className="feed-card-title"></div>
		<div className="para">
			<div className="line"></div>
			<div className="line"></div>
			<div className="line"></div>
			<div className="line"></div>
			<div className="line"></div>
		</div>
		<div className="para">
			<div className="line"></div>
			<div className="line"></div>
			<div className="line"></div>
			<div className="line"></div>
			<div className="line"></div>
		</div>
		<div className="para">
			<div className="line"></div>
			<div className="line"></div>
			<div className="line"></div>
			<div className="line"></div>
			<div className="line"></div>
		</div>
	</div>
	<div className="shadow" data-num="three"></div>
</div>
    <div id="feed-header">
    </div>
	     <h1 className="feed_headline">Minds on Fire<FaFire color='red' />
		 </h1> 

    <div id="feed-list">
      {answers?.map((answer) => (
        <FeedCard
          user={user}
          key={answer.id}
          answer={answer}
          prompt={answer.prompt} 
          
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


//prompt_answer.conter === answer.substring