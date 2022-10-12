Rails.application.routes.draw do
  resources :prompts, only: [:index]
  resources :users, only: [:create]
  resources :prompt_answers
  resources :ratings
end

  #post '/login', to 'auth#create'
  #get '/profile', to 'users#profile'
  #patch '/edit'  to 'users#update '
