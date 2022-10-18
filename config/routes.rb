Rails.application.routes.draw do
  resources :prompts, only: [:index, :show]
  resources :users, only: [:index, :show, :update, :create, :destroy]
  resources :prompt_answers  
  resources :ratings
  



#####auth 
  post '/login', to: 'auth#create' 
  ## initial fetch req 
  get '/profile', to: 'users#profile'
  patch '/edit', to: 'users#update'
  get '/answers', to: 'prompt_answers#prompts_answers'
  #post '/new' to 'prompt_answers#create'
  #patch '/update' to 'prompt_answers#update'
  #delete '/:id' to 'prompt_answers' 


  

# user.prompt_answers.all 




  #render json: users, include: [:user_ratings]

  #resources :prompts do
   # resources :prompt_answers
  end