import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {FaStar} from 'react-icons/fa'
import './PromptAnswersPage.css'


//FEED/ANSWERS 

export default function PromptAnswersPage({ user }) {
  const [currentUser, setCurrentUser] = useState(false);
  const [rating, setRating] = useState(false); // number
  const [comment, setComment] = useState(false);
  const [prompt, setPrompt] = useState({});
  const [profile, setProfile] = useState({});
  const [answer, setAnswer] = useState({});
  const [stars, setStars] = useState(0);
  const [hover, setHover] = useState(null);
  const [hasRated, setHasRated] = useState(false);
  const [hasUsername, setHasUsername] = useState('')

  const params = useParams();
  const navigate = useNavigate();
  console.log(user);

  const id = params.prompt_answer_id;

  //TODO

  // this will be used to show the prompt answers card (with prompt)
  // when clicked on from Feed, or from another user Profile..
  //and then also when you click on your own prompts in ur profile
  // method that returns the prompt id and prompt answer onClick //
  // prompt id should have prompt answer
  // once clicked links to
  //if user. can edit

  //is grabbing a view of prompt and prompt answer plus ratings
  // if user? link to edit your promptanswer. => EditAnswer.js ,: null
  // if user? !ratings , input : can edit ratings


  // state called username empty string 
  //set USERNAME IN THE FETCH 
  //GET /prompt_answers/1
  useEffect(() => {
    let token = localStorage.getItem("token");
    fetch(`http://localhost:3000/prompt_answers/${id}`, {
      headers: {
        Authorization: `Bearer: ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        console.log("user", user);
        setPrompt(data.prompt);
        console.log(data.prompt);
        setProfile(data.user);
        setAnswer(data); // prompt_answer
        setComment(data.comments);
        setHasUsername(data.user.username)
        console.log(data.user.username)

        //console.log(data.user.id, user.id)
        if (user) {
          let existingRating = user.ratings?.find((rating) => {
            return rating.prompt_answer_id === data.id;
          });
          console.log("existing rating", existingRating);
          if (existingRating) {
            setRating(existingRating);
          }
          if (data.user.id === user.id) {
            setCurrentUser(true);
          }
        }
      })
      .catch((e) => console.error(e));
  }, [params, user, rating]);


  // fix for onclick aka make one functionza
  // PATCH if user has already rated
  useEffect(() => {
    if (rating) {
      let token = localStorage.getItem("token");
      fetch(`http://localhost:3000/ratings/${rating.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer: ${token}`,
        },
        body: JSON.stringify({
          stars: stars,
        }),
      }).then((res) => {
        if (res.ok) {
          res.json().then((rating) => {
            setRating(rating);
            setStars(stars);
          });
        }
      });
    } else {
      if (!rating && hasRated) {
        // POST if its new
        const newRating = {
          user_id: user.id,
          prompt_answer_id: answer.id,
          stars: stars,
        };
        let token = localStorage.getItem("token");
        if (token)
          fetch("http://localhost:3000/ratings ", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer: ${token}`,
            },
            body: JSON.stringify(newRating),
          })
            .then((res) => res.json())
            .then((data) => setRating(data))
            .catch((e) => console.error(e));
      }
    }
  }, [stars, hasRated]);

  //INCREMENT AND DECREMENT RATING
  const handleStars = () => {
    setHasRated(true);
    if (stars < 5) {
      setStars((stars) => stars + 1);
    }
    if (stars === 5) {
      setStars(5);
    }
    if (stars > 1) setStars((stars) => stars - 1);
  };

  console.log(stars);

  // if active User. edit option link to edit prompts

  ///handleRating (post )
  //handle deeletr activeuser? deletebutton : null (delete)
  // if 0 no show stars has not beenr ated state  //
  // if rated show rating on fetch ... show yellow stars
  // maybe show average raing in string state string interpolation

  // const [limit, setLimit] = useState(`${answer.content.substring(0, 300)}...`)

  // const [showAvgStars, setShowAvgStars] = useState(`${answer.avgstar})

  // if user Your prompt.name answer : else 
  // answer.user.username's answer to prompt.name
  console.log(currentUser);
  console.log(user);
  return (
    <div>
      <div className="answers-page-container">
        <div className="centering-answer-div">
          <div className="boo">
            <div className="prompt-only-div">
              <h3 className="prompt-a-name">{prompt.name}</h3>
              <h3>{prompt.content}</h3>
            </div>
            <div className="prompt-in-answer-div answer-flex">
              <h4>{answer.content}</h4>
            </div>
            {/* <div>
              <h4 className="prompt-in-rating-div">{answer.avgstar}</h4>
            </div> */}
          </div>
          {currentUser ? (
            
               <Link to={`/user/${user.username}/answers/${answer.id}`} >
                <button className="edit-answer-button">Edit</button>
               </Link>
          ) : null}
           <div>
            {`${user.username}'s average rating is ${rating.stars}`} </div>  
          <div className="stars-div">
            {[...Array(5)].map((star, i) => {
              const ratingValue = i + 1;

              return (
                <label>
                  <input
                    onChange={(e) => {
                      setHasRated(true);
                      setStars(e.target.value);
                      console.log(e.target.value);
                    }}
                    type="radio"
                    name="rating"
                    value={ratingValue} 
                  />
                  <FaStar
                    className="star"
                    size={50}
                    color={
                      ratingValue < (hover || stars) ? "#ffc107" : "#e4e5e9"
                    }
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(null)}
                  />
                </label>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}




//   return (
//     <div>
//       {prompt ? (
//         <div>
//           <div className="menu-page-container-div">
//             {currentUser ? null : (
//               <>
//                 {rating ? (
//                   <button className="rating-button" >
//                   </button>
//                 ) : (
//                   <button className="like-button" >
//                     Like Menu
//                   </button>
//                 )}

//                 <br />
//               </>
//             )}
//             {!currentUser ? (
//               <h3 className="dish-name">
//                 by{" "}
//                 <Link to={`/user/${profile.username}`}>
//                   {profile.first_name} {profile.last_name}
//                 </Link>
//               </h3>
//             ) : null}

//             <p className="small-text-menu">
//               Plated on
//             </p>
//             <p className="small-text-menu">
//               <em></em>
//             </p>
//             <p className="small-date-menu">
//               Published 
//             </p>

//             {currentUser ? (
//               <button className="delete-button">
//                 Delete Menu
//               </button>
//             ) : null}
//           </div>
//         </div>
//       ) : null}
//     </div>
//   );
// }
