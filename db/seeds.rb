puts "🌱 Seeding spices..."

User.destroy_all
Prompt.destroy_all
PromptAnswer.destroy_all
Rating.destroy_all

User.create!(
  username: "lari",
  email:"larimarfondeur@gmail.com",
  first_name: "Larimar",
  last_name: "Fondeur",
  password: "123",
  profile_picture:"https://hips.hearstapps.com/countryliving.cdnds.net/17/47/1511194376-cavachon-puppy-christmas.jpg",
  badge: true 
)


User.create!(
  username: "kevin",
  email:"123@gmail.com",
  first_name: "Kevin",
  last_name: "Ma",
  password: "123",
  profile_picture:"https://hips.hearstapps.com/countryliving.cdnds.net/17/47/1511194376-cavachon-puppy-christmas.jpg",
  badge: true 
)

User.create!(
  username: "B",
  email:"12w33@gmail.com",
  first_name: "Kevin",
  last_name: "Ma",
  password: "123",
  profile_picture:"https://hips.hearstapps.com/countryliving.cdnds.net/17/47/1511194376-cavachon-puppy-christmas.jpg",
  badge: false
)

User.create!(
  username: "Basdas",
  email:"12was33@gmail.com",
  first_name: "Kevin",
  last_name: "Ma",
  password: "123",
  profile_picture:"https://hips.hearstapps.com/countryliving.cdnds.net/17/47/1511194376-cavachon-puppy-christmas.jpg",
  badge: false
)
User.create!(
  username: "Kevipn",
  email:"magavakevin10@gmail.com",
  first_name: "Kevin",
  last_name: "Ma",
  password: "123",
  profile_picture:"https://hips.hearstapps.com/countryliving.cdnds.net/17/47/1511194376-cavachon-puppy-christmas.jpg",
  badge: true 
)

User.create!(
  username: "yoursavior",
  email:"12p3@gmail.com",
  first_name: "Jesus",
  last_name: "Christ",
  password: "123",
  profile_picture:"https://hips.hearstapps.com/countryliving.cdnds.net/17/47/1511194376-cavachon-puppy-christmas.jpg",
  badge: true
)

User.create!(
  username: "floridaman",
  email:"12w3a3@gmail.com",
  first_name: "John",
  last_name: "Smith",
  password: "123",
  profile_picture:"https://hips.hearstapps.com/countryliving.cdnds.net/17/47/1511194376-cavachon-puppy-christmas.jpg",
  badge: false
)

User.create!(
  username: "Basdpas",
  email:"12wasa33@gmail.com",
  first_name: "Kevin",
  last_name: "Ma",
  password: "123",
  profile_picture:"https://hips.hearstapps.com/countryliving.cdnds.net/17/47/1511194376-cavachon-puppy-christmas.jpg",
  badge: true
)

Prompt.create!(
  content: "INT, NANCY'S LIVING ROOM - DAY 
  Wind from outside the window howls. Small branches smack the outside walls of the house. 
  NANCY bundles herself in a fourth blanket. She sits inches awway from the electric fireplace and sips from a mug of tea.
  The front door flings open and FRED stumbles in. He's covered in dirt and blood, his right hand pushing down on what seems to be
  an open wound. 
  
  NANCY
  What the -
  
  FRED .. ",
)

Prompt.create!(
  content: "EXT. OCEAN - DAY
  High overhead shot looking down on the Pacific Ocean.
  TITLE: SANTA BARBARA, 1979.
  EXT. SANTA BARBARA - VONS PARKING LOT - DAY
  WIDE ON a plume of black smoke rising high into the air.
  CLOSER ON a 1965 Ford Galaxy engulfed in flames.
  DOROTHEA (55, short grey hair, Amelia Earhart androgyny) and JAMIE
  (15, New-Wave/Punk) jog their shopping cart toward the commotion,
  stunned to find their car in flames. Dorothea looks at the car and
  then at her son Jamie, concerned. People run for help. Sirens in
  the background. ",
)

Prompt.create!(
  content:"    
  INT. BLACK CADILLAC LIMOUSINE - NIGHT
      
  Two men in dark suits are sitting in the front seat. A
  beautiful, younger, dark-haired woman sits in back. She sits
  close up against the door and stares out into the darkness.
  She seems to be thinking about something. Suddenly she turns
  and looks ahead. The car is slowing and moving off to the
  side of the road.
      
          DARK-HAIRED WOMAN
      What are you doing? You don't stop
      here ...
      
  The car stops - half on, half off the road at a dark, blind
  curve. Both men turn to the woman.
      
          DRIVER
      Get out of the car.",

      
      )
      


Prompt.create!(
  content: "    
  INT. BLACK CADILLAC LIMOUSINE - NIGHT
      
  Two men in dark suits are sitting in the front seat. A
  beautiful, younger, dark-haired woman sits in back. She sits
  close up against the door and stares out into the darkness.
  She seems to be thinking about something. Suddenly she turns
  and looks ahead. The car is slowing and moving off to the
  side of the road.
      
          DARK-HAIRED WOMAN
      What are you doing? You don't stop
      here ...
      
  The car stops - half on, half off the road at a dark, blind
  curve. Both men turn to the woman.
      
          DRIVER
      Get out of the car."
)


PromptAnswer.create!(
  prompt_id: 1,
  user_id: 1,

)

PromptAnswer.create!(
  prompt_id: 2,
  user_id: 2,

)

PromptAnswer.create!(
  prompt_id: 3,
  user_id: 3,
)


PromptAnswer.create!(
  prompt_id: 2,
  user_id: 4,

)


Rating.create!(
  prompt_answer_id: 1,
  likes: false,
  ratings: 5,
  user_id: 1,
  comments: "fjifjrfifjif"
)


Rating.create!(
  prompt_answer_id: 1,
  likes: false,
  ratings: 2,
  user_id: 1,
  comments: "fjifjrfifjif"
)


Rating.create!(
  prompt_answer_id: 1,
  likes: true,
  ratings: 3,
  user_id: 1,
  comments: "fjifjrfifjif"
)

Rating.create!(
  prompt_answer_id: 2,
  likes: true,
  ratings: 5,
  user_id: 1,
  comments: "fjifjrfifjif"
)

