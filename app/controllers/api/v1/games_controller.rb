class Api::V1::GamesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def show
    render json: Game.find(1)
  end

  def index
    render json: Game.all
  end

end