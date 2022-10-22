import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

export default function PromptAnswersPage({ user }) {
 const [currentUser, setCurrentUser] = useState(false);
  const [rating, setRating] = useState(false); // number
  const [comment, setComment] = useState(false);
  const [prompt, setPrompt] = useState({});
  const [profile, setProfile] = useState({});
  const [answer, setAnswer] = useState({});
  const [stars, setStars] = useState(0);
  const [hasRated, setHasRated] = useState(false)

  const params = useParams();
  const navigate = useNavigate();

  const id = params.prompt_answer_id

  //TODO
  // if a user has already rated a prompt
  // when they click a different star it doesn't
  //create a new rating, iT updates the existing rating for
  // that user
  // ADD state that keeps track of whether or not a user has rated a particular answer

  //
  // this will be used to show the prompt answers card (with prompt)
  // when clicked on from Feed, or from another user Profile..
  //and then also when you click on your own prompts in ur profile
  // method that returns the prompt id and prompt answer onClick //
  // prompt id should have prompt answer

  //have to make it so that when you .. click from the top list oh no iy doesnt
  /// mstter because it will

  //GET /prompt_answers/1
  useEffect(() => {
    let token = localStorage.getItem('token')
    fetch(`http://localhost:3000/prompt_answers/${id}`, {
       headers: {
          Authorization: `Bearer: ${token}`
     }

    })
      .then((res) => res.json())
      .then((data) => {
        console.log('data', data)
        console.log('user', user)
        setPrompt(data.prompt);
        setProfile(data.user);
        setAnswer(data); // prompt_answer
        setComment(data.comments);

        if (user) {
          if (data.user_id === user.id) {
            setCurrentUser(true);
          } else {
            const rating = user.ratings?.find((rating) => {
              // console.log('user has rated', rating.user_id === data.user.id);
              return rating.user_id === data.user.id;
            });
            setRating(rating);
          }
        }
      })
      .catch((e) => console.error(e));
  }, [params, user]);

  // fix for onclick aka make one functionza    
  // PATCH if user has already rated 
  useEffect(() => {
    if (rating) {
      let token = localStorage.getItem('token')
      fetch(`http://localhost:3000/ratings/${rating.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer: ${token}`
        },
        body: JSON.stringify({
          stars: stars,
        }),
      }).then((res) => {
        if (res.ok) {
          res.json().then((rating) => {
            setRating({ rating: rating });
            setStars(stars);
          });
        }
      });
    } else {
      if (!rating && hasRated) { // POST if its new
        const handleRating = (e) => {
          const newRating = {
            user_id: user.id,
            prompt_answer_id: answer.id,
            stars: stars,
          };
           let token = localStorage.getItem('token')
          fetch("http://localhost:9292/ratings ", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
                Authorization: `Bearer: ${token}`
            },
            body: JSON.stringify(newRating),
          })
            .then((res) => res.json())
            .then((newRating) => setRating(newRating))
            .catch((e) => console.error(e));
        };
      }
    }
  }, [stars]);

  //INCREMENT AND DECREMENT RATING
  const handleIncrementStars = () => {
    setHasRated(true)
    if (stars < 5) {
      setStars((stars) => stars + 1);
    }
    if (stars === 5) {
      setStars(5);
    }
  };
  const handleDecrementStars = () => {
    setHasRated(true)
    if (stars > 1) setStars((stars) => stars - 1);
  };

  // if (!rating) {} // dp the post
  // if (rating) {
  //PATCH REQ.
  // rating.id in url

  // in the useEffect

  // const myRating = data.prompt_answer.ratings.find(rating => {
  //   return myRating.user_id === user.id; (edited)
  // 9:31
  // if (myRating) {
  // 9:32
  // setHasBeenRated(true)
  // eyes
  // heavy_check_mark
  // call_me_hand

  // in the handleRating
  //if (!hasBeenRated) { (edited)

  // ratings and comments are [] arrays

  //

  // const initialState = {
  //   : item.name,
  //   image: item.image,
  //   description: item.description,
  //   tags: item.tags.join("; ") + ";"
  // }

  // function handleDeleteAnswer() {
  //   fetch(`http://localhost:9292/menus/${params.prompt_id}`, {
  //     method: "DELETE",
  //   })
  //     .then(res => res.json())
  //     .then(() => navigate(`/user/${user.username}`))
  //     .catch(e => console.error(e));
  // }



  // if user.id === soemthing id rates
  /// if newRating === user_id:
  //return null?

  //const changeRating = (newPlant) => {
  //const updatedPlants = [...plants, newPlant]
  //setPlants(newPlant)

  // function handleComments() {
  //   fetch(`http://localhost:9292/likes/${like.id}`, {
  //     method: "DELETE",
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       setLike(false);
  //     })
  //     .catch(e => console.error(e));
  // }

  ///handleRating (post )
  //handle deeletr activeuser? deletebutton : null (delete)
  //

  //prompt id as an argument
  /// rails method only: :answers

  /// is user?

  return (
    <div>
      {prompt ? (
        <div>
          <div className="menu-page-container-div">
            {currentUser ? null : (
              <>
                {rating ? (
                  <button className="rating-button" >
                  </button>
                ) : (
                  <button className="like-button" >
                    Like Menu
                  </button>
                )}

                <br />
              </>
            )}
            {!currentUser ? (
              <h3 className="dish-name">
                by{" "}
                <Link to={`/user/${profile.username}`}>
                  {profile.first_name} {profile.last_name}
                </Link>
              </h3>
            ) : null}

            <p className="small-text-menu">
              Plated on
            </p>
            <p className="small-text-menu">
              <em></em>
            </p>
            <p className="small-date-menu">
              Published 
            </p>

            {currentUser ? (
              <button className="delete-button">
                Delete Menu
              </button>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
}
