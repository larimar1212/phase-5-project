puts "🌱 Seeding spices..."

User.destroy_all
Prompt.destroy_all
PromptAnswer.destroy_all
Rating.destroy_all
Comment.destroy_all

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
  name: "Backfires",
  category: "FALLING ACTION",
  content: "INT, NANCY'S LIVING ROOM - DAY 
  Wind from outside the window howls. Small branches smack the outside walls of the house. 
  NANCY bundles herself in a fourth blanket. She sits inches awway from the electric fireplace and sips from a mug of tea.
  The front door flings open and FRED stumbles in. He's covered in dirt and blood, his right hand pushing down on what seems to be
  an open wound. 
  
  NANCY
  What the -
  
  FRED .. "
)

Prompt.create!(
  name: "A Judgement in Stone",
  category: "CLIMAX",
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
  the background. "
  
)

Prompt.create!(
  name: "Mulholland Drive",
  category: "INCITING INCIDENT",
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
      Get out of the car."

      
      )
      


Prompt.create!(
  name: "Froth on the Daydream",
  category: "EXPOSITION",
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

Prompt.create!(
  name: "Mulholland Drive",
  category: "DENOUEMENT",
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
      Get out of the car."

      
      )
      


PromptAnswer.create!(
  prompt_id: 1,
  user_id: 1,
  content: "Turpis cursus in hac habitasse platea dictumst quisque sagittis. Scelerisque fermentum dui faucibus in ornare quam. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam. Eget arcu dictum varius duis at consectetur. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. Non curabitur gravida arcu ac tortor dignissim convallis aenean et. Aliquet nibh praesent tristique magna sit amet. Aliquet lectus proin nibh nisl condimentum id venenatis. Egestas integer eget aliquet nibh praesent. Mauris pellentesque pulvinar pellentesque habitant morbi. Pellentesque pulvinar pellentesque habitant morbi tristique. Hendrerit gravida rutrum quisque non tellus orci ac."

)

PromptAnswer.create!(
  prompt_id: 2,
  user_id: 1,
  content: "Massa ultricies mi quis hendrerit dolor. Cras adipiscing enim eu turpis egestas pretium aenean. Semper quis lectus nulla at volutpat diam. Morbi tincidunt augue interdum velit euismod. Interdum posuere lorem ipsum dolor sit amet consectetur. Sed euismod nisi porta lorem. Mi quis hendrerit dolor magna eget est lorem ipsum dolor. Nullam eget felis eget nunc lobortis. Nisl nisi scelerisque eu ultrices vitae auctor. Libero volutpat sed cras ornare arcu dui. Turpis egestas integer eget aliquet nibh praesent tristique. Vestibulum lorem sed risus ultricies tristique nulla. Tellus integer feugiat scelerisque varius morbi enim."

)

PromptAnswer.create!(
  prompt_id: 3,
  user_id: 1,
  content: "Magna fringilla urna porttitor rhoncus dolor. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Massa tincidunt dui ut ornare lectus sit amet. Eget mi proin sed libero enim sed faucibus. Non sodales neque sodales ut etiam sit. Congue mauris rhoncus aenean vel elit scelerisque mauris. Sed sed risus pretium quam vulputate dignissim suspendisse in est. Nunc mattis enim ut tellus elementum sagittis vitae. Vestibulum sed arcu non odio. At risus viverra adipiscing at in tellus integer. At erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Diam in arcu cursus euismod quis. Sem fringilla ut morbi tincidunt. Nam libero justo laoreet sit amet cursus sit amet. Mattis vulputate enim nulla aliquet porttitor. Justo eget magna fermentum iaculis eu non diam. Dui sapien eget mi proin sed libero."
)


PromptAnswer.create!(
  prompt_id: 4,
  user_id: 1,
  content: "At varius vel pharetra vel turpis nunc eget lorem dolor. Porttitor leo a diam sollicitudin tempor. Suspendisse in est ante in. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Mauris pharetra et ultrices neque ornare aenean euismod. Nunc consequat interdum varius sit. Arcu bibendum at varius vel pharetra vel turpis. Aliquet porttitor lacus luctus accumsan tortor posuere ac. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Ornare aenean euismod elementum nisi quis eleifend quam. In vitae turpis massa sed. Blandit libero volutpat sed cras ornare arcu dui vivamus arcu. Ultricies tristique nulla aliquet enim tortor."

)

PromptAnswer.create!(
  prompt_id: 5,
  user_id: 1,
  content: "At varius vel pharetra vel turpis nunc eget lorem dolor. Porttitor leo a diam sollicitudin tempor. Suspendisse in est ante in. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Mauris pharetra et ultrices neque ornare aenean euismod. Nunc consequat interdum varius sit. Arcu bibendum at varius vel pharetra vel turpis. Aliquet porttitor lacus luctus accumsan tortor posuere ac. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Ornare aenean euismod elementum nisi quis eleifend quam. In vitae turpis massa sed. Blandit libero volutpat sed cras ornare arcu dui vivamus arcu. Ultricies tristique nulla aliquet enim tortor."

)


PromptAnswer.create!(
  prompt_id: 1,
  user_id: 2,
  content: "At varius vel pharetra vel turpis nunc eget lorem dolor. Porttitor leo a diam sollicitudin tempor. Suspendisse in est ante in. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Mauris pharetra et ultrices neque ornare aenean euismod. Nunc consequat interdum varius sit. Arcu bibendum at varius vel pharetra vel turpis. Aliquet porttitor lacus luctus accumsan tortor posuere ac. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Ornare aenean euismod elementum nisi quis eleifend quam. In vitae turpis massa sed. Blandit libero volutpat sed cras ornare arcu dui vivamus arcu. Ultricies tristique nulla aliquet enim tortor."

)

PromptAnswer.create!(
  prompt_id: 2,
  user_id: 2,
  content: "Pellentesque nec nam aliquam sem et tortor consequat id porta. Massa enim nec dui nunc. Aliquet sagittis id consectetur purus. Non enim praesent elementum facilisis leo vel. Consectetur libero id faucibus nisl tincidunt eget. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Scelerisque fermentum dui faucibus in ornare. Consectetur purus ut faucibus pulvinar. Non blandit massa enim nec dui. In cursus turpis massa tincidunt dui. A condimentum vitae sapien pellentesque habitant morbi tristique senectus et. Ligula ullamcorper malesuada proin libero nunc consequat. Nulla at volutpat diam ut venenatis tellus."

)

PromptAnswer.create!(
  prompt_id: 3,
  user_id: 2,
  content: "Auctor eu augue ut lectus arcu. Massa sed elementum tempus egestas sed sed. Tristique magna sit amet purus gravida quis blandit. Congue nisi vitae suscipit tellus mauris a. Nulla facilisi etiam dignissim diam quis. Lectus quam id leo in vitae turpis massa sed. Purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus. Cursus vitae congue mauris rhoncus aenean. Cursus in hac habitasse platea. Maecenas ultricies mi eget mauris pharetra. In pellentesque massa placerat duis ultricies lacus sed. Integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Felis bibendum ut tristique et. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Facilisis magna etiam tempor orci eu lobortis. Urna condimentum mattis pellentesque id nibh tortor."
)


PromptAnswer.create!(
  prompt_id: 4,
  user_id: 2,
  content: "Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Diam sit amet nisl suscipit adipiscing bibendum est ultricies. Lacinia at quis risus sed. Et malesuada fames ac turpis egestas integer. Ut faucibus pulvinar elementum integer. Habitasse platea dictumst quisque sagittis. Facilisis volutpat est velit egestas dui id ornare arcu odio. A erat nam at lectus urna. Odio tempor orci dapibus ultrices in iaculis. Faucibus vitae aliquet nec ullamcorper sit amet. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula. Turpis nunc eget lorem dolor sed. Turpis egestas sed tempus urna et pharetra pharetra. Nisi est sit amet facilisis magna etiam tempor orci. Purus viverra accumsan in nisl nisi. Sed augue lacus viverra vitae."

)

PromptAnswer.create!(
  prompt_id: 5,
  user_id: 2,
  content: "At varius vel pharetra vel turpis nunc eget lorem dolor. Porttitor leo a diam sollicitudin tempor. Suspendisse in est ante in. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Mauris pharetra et ultrices neque ornare aenean euismod. Nunc consequat interdum varius sit. Arcu bibendum at varius vel pharetra vel turpis. Aliquet porttitor lacus luctus accumsan tortor posuere ac. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Ornare aenean euismod elementum nisi quis eleifend quam. In vitae turpis massa sed. Blandit libero volutpat sed cras ornare arcu dui vivamus arcu. Ultricies tristique nulla aliquet enim tortor."

)


PromptAnswer.create!(
  prompt_id: 1,
  user_id: 3,
  content: "Vitae proin sagittis nisl rhoncus mattis rhoncus. Iaculis at erat pellentesque adipiscing commodo elit. Bibendum arcu vitae elementum curabitur vitae nunc sed. At tempor commodo ullamcorper a lacus vestibulum. Gravida arcu ac tortor dignissim. Lacinia quis vel eros donec ac odio tempor orci dapibus. At quis risus sed vulputate odio ut enim blandit volutpat. Viverra nibh cras pulvinar mattis. Amet est placerat in egestas erat. Condimentum id venenatis a condimentum vitae sapien. Sed arcu non odio euismod lacinia at. Sodales ut eu sem integer vitae justo eget magna fermentum. Suscipit adipiscing bibendum est ultricies integer quis. In hendrerit gravida rutrum quisque non tellus. Ultrices tincidunt arcu non sodales neque sodales ut. Vitae congue eu consequat ac felis donec et."

)

PromptAnswer.create!(
  prompt_id: 2,
  user_id: 3,
  content: "Aliquet bibendum enim facilisis gravida neque convallis a cras. Nunc sed id semper risus in hendrerit. Pretium lectus quam id leo in vitae turpis massa sed. Semper eget duis at tellus. Vehicula ipsum a arcu cursus vitae congue mauris. Vitae aliquet nec ullamcorper sit. Cras adipiscing enim eu turpis. Morbi tristique senectus et netus. Viverra vitae congue eu consequat ac felis donec. Faucibus scelerisque eleifend donec pretium vulputate sapien. Arcu non sodales neque sodales ut etiam. Lorem ipsum dolor sit amet consectetur. Tortor condimentum lacinia quis vel eros. Eu mi bibendum neque egestas congue. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate ut pharetra sit amet aliquam id. Neque egestas congue quisque egestas diam in arcu cursus. Est lorem ipsum dolor sit amet consectetur adipiscing."

)

PromptAnswer.create!(
  prompt_id: 3,
  user_id: 3,
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris cursus mattis molestie a iaculis. Ultricies tristique nulla aliquet enim tortor. Morbi tincidunt augue interdum velit. Porttitor eget dolor morbi non arcu risus. Dictum at tempor commodo ullamcorper a lacus vestibulum sed. Viverra nibh cras pulvinar mattis. In metus vulputate eu scelerisque felis imperdiet proin. Commodo elit at imperdiet dui accumsan sit. Mus mauris vitae ultricies leo integer. Nisl rhoncus mattis rhoncus urna neque viverra justo. Blandit cursus risus at ultrices mi tempus. Sed lectus vestibulum mattis ullamcorper velit. Turpis tincidunt id aliquet risus feugiat in ante. Tempor orci dapibus ultrices in iaculis nunc sed. Amet consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Senectus et netus et malesuada fames ac turpis egestas. "
)


PromptAnswer.create!(
  prompt_id: 4,
  user_id: 3,
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

)

PromptAnswer.create!(
  prompt_id: 5,
  user_id: 3,
  content: "At varius vel pharetra vel turpis nunc eget lorem dolor. Porttitor leo a diam sollicitudin tempor. Suspendisse in est ante in. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Mauris pharetra et ultrices neque ornare aenean euismod. Nunc consequat interdum varius sit. Arcu bibendum at varius vel pharetra vel turpis. Aliquet porttitor lacus luctus accumsan tortor posuere ac. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Ornare aenean euismod elementum nisi quis eleifend quam. In vitae turpis massa sed. Blandit libero volutpat sed cras ornare arcu dui vivamus arcu. Ultricies tristique nulla aliquet enim tortor."

)

Rating.create!(
  prompt_answer_id: 1,
  user_id: 1, 
  stars: 3
  
)


Rating.create!(
  prompt_answer_id: 1,
  user_id: 2,
  stars: 3
  
)


Rating.create!(
  prompt_answer_id: 1,
  user_id: 3,
  stars: 4

)

Rating.create!(
  prompt_answer_id: 1,
  user_id: 4,
  stars: 5
)


Rating.create!(
  prompt_answer_id: 1,
  user_id: 5,
  stars: 3
  
)


Rating.create!(
  prompt_answer_id: 2,
  user_id: 1,
  stars: 3
  
)


Rating.create!(
  prompt_answer_id: 2,
  user_id: 2,
  stars: 4

)

Rating.create!(
  prompt_answer_id: 2,
  user_id: 3,
  stars: 5
)

Rating.create!(
  prompt_answer_id: 2,
  user_id: 4,
  stars: 3
)

Rating.create!(
  prompt_answer_id: 2,
  user_id: 5,
  stars: 2
)

Rating.create!(
  prompt_answer_id: 3,
  user_id: 1,
  stars: 2
)
Rating.create!(
  prompt_answer_id: 3,
  user_id: 2,
  stars: 2
)

Rating.create!(
  prompt_answer_id: 3,
  user_id: 3,
  stars: 3
)
Rating.create!(
  prompt_answer_id: 3,
  user_id: 4,
  stars: 2
)
Rating.create!(
  prompt_answer_id: 3,
  user_id: 5,
  stars: 3
)
Rating.create!(
  prompt_answer_id: 4,
  user_id: 1,
  stars: 3
)
Rating.create!(
  prompt_answer_id: 4,
  user_id: 2,
  stars: 2
)
Rating.create!(
  prompt_answer_id: 4,
  user_id: 3,
  stars: 3
)
Rating.create!(
  prompt_answer_id: 4,
  user_id: 4,
  stars: 2
)
Rating.create!(
  prompt_answer_id: 4,
  user_id: 5,
  stars: 3
)
Rating.create!(
  prompt_answer_id: 5,
  user_id: 1,
  stars: 4
)
Rating.create!(
  prompt_answer_id: 5,
  user_id: 2,
  stars: 3
)
Rating.create!(
  prompt_answer_id: 5,
  user_id: 3,
  stars: 5
)

Rating.create!(
  prompt_answer_id: 5,
  user_id: 4,
  stars: 4
)

Rating.create!(
  prompt_answer_id: 5,
  user_id: 5,
  stars: 5
)

Comment.create!(
  prompt_answer_id: 1,
  user_id: 1, 
  comment: "It was ok"

)
Comment.create!(
  prompt_answer_id: 2,
  user_id: 1, 
  comment: "It was ok"

)
Comment.create!(
  prompt_answer_id: 3,
  user_id: 1, 
  comment: "It was ok"

)
Comment.create!(
  prompt_answer_id: 4,
  user_id: 1, 
  comment: "It was ok"

)
Comment.create!(
  prompt_answer_id: 5,
  user_id: 1, 
  comment: "It was ok"

)

Comment.create!(
  prompt_answer_id: 1,
  user_id: 2, 
  comment: "It was ok"

)
Comment.create!(
  prompt_answer_id: 2,
  user_id: 2, 
  comment: "It was ok"

)
Comment.create!(
  prompt_answer_id: 3,
  user_id: 2, 
  comment: "It was ok"

)
Comment.create!(
  prompt_answer_id: 4,
  user_id: 2, 
  comment: "It was ok"

)
Comment.create!(
  prompt_answer_id: 5,
  user_id: 2, 
  comment: "It was ok"

)
Comment.create!(
  prompt_answer_id: 1,
  user_id: 3, 
  comment: "It was ok"

)
Comment.create!(
  prompt_answer_id: 2,
  user_id: 3, 
  comment: "It was ok"

)
Comment.create!(
  prompt_answer_id: 3,
  user_id: 3, 
  comment: "It was ok"

)
Comment.create!(
  prompt_answer_id: 4,
  user_id: 3, 
  comment: "It was ok"

)
Comment.create!(
  prompt_answer_id: 5,
  user_id: 3, 
  comment: "It was ok"

)

Comment.create!(
  prompt_answer_id: 1,
  user_id: 4, 
  comment: "It was ok"

)
Comment.create!(
  prompt_answer_id: 2,
  user_id: 4, 
  comment: "It was ok"

)
Comment.create!(
  prompt_answer_id: 3,
  user_id: 4, 
  comment: "It was ok"

)
Comment.create!(
  prompt_answer_id: 4,
  user_id: 4, 
  comment: "It was ok"

)
Comment.create!(
  prompt_answer_id: 5,
  user_id: 4, 
  comment: "It was ok"

)
Comment.create!(
  prompt_answer_id: 1,
  user_id: 5, 
  comment: "It was ok"

)
Comment.create!(
  prompt_answer_id: 2,
  user_id: 5, 
  comment: "It was ok"

)
Comment.create!(
  prompt_answer_id: 3,
  user_id: 5, 
  comment: "It was ok"

)
Comment.create!(
  prompt_answer_id: 4,
  user_id: 5, 
  comment: "It was ok"

)
Comment.create!(
  prompt_answer_id: 5,
  user_id: 5, 
  comment: "It was ok"

)






#user_id can rate other prompts_answer ids 