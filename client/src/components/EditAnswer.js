import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



export default function EditAnswer({ user, setUser }) {
  const [activeUser, setActiveUser] = useState(false);
  const [formContent, setFormContent] = useState("");
  const [answers, setAnswers] = useState({})
  
  // TAKE IN CURRENT USER AS A PROP
  const params = useParams()

useEffect(() => {
 if (user) {
  let token = localStorage.getItem("token");
  fetch(`http://localhost:3000/prompt_answers/${params.prompt_answer_id}`, {
    headers: {
      Authorization: `Bearer: ${token}`,
    },
  })
  .then((res) => res.json())
  .then((data) => {
    console.log("data", data);
    console.log("user", user);
    setAnswers(data) // maybe make new state
    if (data.user.id === user.id) {
      setActiveUser(true)
      console.log(activeUser)
    }
  })
  .catch((e) => console.error(e))
 }
}, [params, user])

// PATCH 
  const handleSubmit = (e) => {
    e.preventDefault()
    let token = localStorage.getItem("token");
    fetch(`http://localhost:3000/prompt_answers/${params.prompt_answer_id}/update`, {
         method: "PATCH",
        headers: {
         "Content-Type": "application/json",
          Authorization: `Bearer: ${token}`,
        },
        body: JSON.stringify({
          content: formContent

        })
      }
    )
    .then((res) => res.json())
    .then((data) => {
      console.log('data', data)
      console.log('user', user)
      setAnswers(data)

      if (data.user.id === user.id) {
        setActiveUser(true)
      }
     })
  }

  // active user can edit the answer.content 

  
  

  //IF CURRENT USER, EDIT BLAH VLAH.
  // LINK TO PROMPT ANSWER(ID) AFTER

  // GET	/photos/:id/edit	photos#edit	return an HTML form for editing a photo
  // PATCH/PUT	/photos/:id	photos#update	update a specific photo
  // DELETE	/photos/:id	photos#destroy	delete a specific photo

  /// PATCH REQUEST
  /// DELETE REQ
  return (
    <div>
  
      <div>EditAnswer
      <form onSubmit={handleSubmit}>
     <div>
      <textarea>

      </textarea>
      {/* <textarea className='text-input'
        required 
        type="text"
        name="name"
        placeholder='Write Your Response'
        value={answers.content}>

      </textarea> */}
     </div>
      <input type="submit" value="Submit" />
      </form>
      </div>
 
  </div>
  );
}
