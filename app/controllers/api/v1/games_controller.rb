class Api::V1::GamesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def show
    random_index = rand(Game.count + 1)
    render json: Game.find(random_index)
  end

  def index
    render json: Game.all
  end

end