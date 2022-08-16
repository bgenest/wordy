Rails.application.routes.draw do

  root 'homes#index'
  devise_for :users

  resources :sessions, only: [:index, :create, :show, :new]
  resources :users, only: [:index, :create, :show, :new]
  resources :games, only: [:index, :create, :show, :new]
  resources :guesses, only: [:index, :create, :show, :new]

  get "/words", to:"homes#index"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
