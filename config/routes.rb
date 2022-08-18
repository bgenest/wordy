Rails.application.routes.draw do

  root 'homes#index'
  devise_for :users

  resources :sessions, only: [:index, :create, :show, :new]
  resources :users, only: [:index, :create, :show, :new]
  resources :games, only: [:index, :create, :show, :new]
  resources :guesses, only: [:index, :create, :show, :new]

  namespace :api do
    namespace :v1 do
      resources :games, only: [:show] 
      end
    end

    get "/games", to: "games#index"

end
