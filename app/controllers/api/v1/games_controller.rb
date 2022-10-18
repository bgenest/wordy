class Api::V1::GamesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def show

    daily_key = "99999"

    if params['id'] == daily_key

      render json: Game.find(daily_key)
    else
      
      random_index = rand(Game.count + 1)
      render json: Game.find(random_index)
    end

  end


  def index
    render json: Game.all
  end

end
