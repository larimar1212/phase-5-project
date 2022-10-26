Rails.application.routes.draw do
  resources :prompts, only: [:index, :show]
  resources :users, only: [:index, :update, :create, :destroy]
  resources :prompt_answers 
  resources :ratings
  

  ## TODO

  #controller and serializers for comments table 

#####auth 
  post '/login', to: 'auth#create' 
  ## initial fetch req to profile 
  get '/profile', to: 'users#profile'
  patch '/edit', to: 'users#update'

  # profile

  get '/users/:username', to: 'users#show_by_username'
  patch "/prompt_answers/:id/update", to: "prompt_answers#update_own_answer"

  #FEED.JS
  get '/feed/answers', to: 'prompt_answers#high_prompt_answers'
  #get '/feed/answers/prompt/id'
end 

  #post '/new' to 'prompt_answers#create'
  #patch '/update' to 'prompt_answers#update'
  #delete '/:id' to 'prompt_answers' 


  

# user.prompt_answers.all 




  #render json: users, include: [:user_ratings]

  #resources :prompts do
   # resources :prompt_answers
  