import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function FeedCard({ answer, prompt, user }) {
const [author, setAsAuthor] = useState({})
console.log(user)

// o
// Link to PromptAnswersPage navigate(`/answers/${id}`)
 

  return (
    <div className="feed-card-div">
      <div
        key={answer.id}>
         </div> 
        <div>
          <h3>{prompt.name}</h3>
          <h4>{prompt.content}</h4>
        </div>
        <div>
          <h3>{answer.content}</h3>
        </div>
        <div className="feed-username">
          <h3>{answer.avgstar}</h3>
          <h3>{}</h3>
        </div>
        <Link /> 
    

    
    </div>
  );
}
