import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function EditAnswer({ user }) {
  const [activeUser, setActiveUser] = useState(false);
  const [formContent, setFormContent] = useState("");
  const [answers, setAnswers] = useState({})


  // TAKE IN CURRENT USER AS A PROP
  const params = useParams()

  useEffect(() => {
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
      setAnswers(data)

      if (data.user.id === user.id) {
        setActiveUser(true)
      }
     })
  }, [params, user]);


  // const handleSubmit = () => {
    
  // }


  

  //IF CURRENT USER, EDIT BLAH VLAH.
  // LINK TO PROMPT ANSWER(ID) AFTER

  // GET	/photos/:id/edit	photos#edit	return an HTML form for editing a photo
  // PATCH/PUT	/photos/:id	photos#update	update a specific photo
  // DELETE	/photos/:id	photos#destroy	delete a specific photo

  /// PATCH REQUEST
  /// DELETE REQ
  return (
  <div>EditAnswer</div>
  );
}
