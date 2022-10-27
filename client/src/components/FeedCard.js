import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./FeedCard.css";
export default function FeedCard({ answer, prompt, user }) {
  const [author, setAsAuthor] = useState({});
  const [limit, setLimit] = useState(`${answer.content.substring(0, 300)}...`);
  const [promptLimit, setPromptLimit] = useState((prompt.content.substring(0, 100)))
  console.log(user);
  

  // o
  // Link to PromptAnswersPage navigate(`/answers/${id}`)
  // here put fire sign to say hot list everythign that is trending
  // prompts also limited by number state 
  // prompts outside the feed logue 
  // edit seed data 
  

  const navigate = useNavigate();
  const params = useParams();

  console.log(limit);
  const handleClick = (id) => {
    navigate(`/answers/${id}`);
  };

  console.log(answer.content.length);
  //
  return (
    <div className="feed-card-div"> 
      <div className="feed-title">
      <div className="prompt-name">
        {/* <h4>{prompt.name}</h4> */}
      </div>
      <div
        className="feed-logue"
        onClick={(e) => {
          handleClick(answer.id);
        }}
        key={answer.id}
      >
        <div>
           <h3>{prompt.name}</h3> 
          <h4>{promptLimit}</h4>
        </div>
        <div>
          <h3>{limit}</h3>
        </div>
      </div>
      <div className="feed-username">
        <Link to={`/user/${user.username}`} className="submit-by"> Submitted by {answer.user.username} </Link>
        {/* <h3>{answer.avgstar}</h3> */}
      </div>
      </div>
    </div>
  );
}

// const [limit, setLimit] =
// {setLimit(answer.content)}

// if(answer.conten)
//const showString
// answer.content(0 , 50)

// set state to substringvalue of answer
// {prompt.}
