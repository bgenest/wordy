Rails.application.routes.draw do

  root 'homes#index'
  devise_for :users

  default_url_options :host => "google.com"
  
  devise_scope :user do 
    root to: 'static_pages#home'
    match '/sessions/user', to: 'devise/sessions#create', via: :post
  end
  
  resources :sessions, only: [:index, :create, :show, :new]
  resources :users, only: [:index, :create, :show, :new]
  resources :games, only: [:index, :create, :show, :new]
  resources :guesses, only: [:index, :create, :show, :new]
  resources :errors, only: [:index]

  namespace :api do
    namespace :v1 do
      resources :games, only: [:show] 
      end
    end

  namespace :api do
    namespace :v1 do
      resources :guesses, only: [:index, :create, :new] 
      end
    end

  namespace :api do
    namespace :v1 do
      resources :sessions, only: [:index, :create, :new] 
      end
    end

    get "/games", to: "games#index"
    get "/tutorial", to: "tutorial#index"
    get "/games/daily", to: "games#show"
    get "/api/v1/forecast"
    post "/api/v1/sessions"
    
end
