class Api::V1::GamesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def show

    daily_key = "99999"
    random_index = rand(Game.count + 1)
    game = params['id']


    if game == daily_key
      x = Session.where(game_id: daily_key, user_id: current_user.id)
      if x.length > 0
        Session.destroy(x[0].id)
      end
      render json: Game.find(daily_key)

    else
      x = Session.where(game_id: daily_key, user_id: current_user.id)
      if x.length > 0
        Session.destroy(x[0].id)
      end
      render json: Game.find(random_index)
    end
    
  end


  def index
    render json: Game.all
  end

end
