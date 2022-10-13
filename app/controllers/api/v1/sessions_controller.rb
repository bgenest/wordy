class Api::V1::SessionsController < ApplicationController

  def show
    @session = Session.new
  end

  def index
    @sessions = Session.find(user: current_user)

  end

  def new
    @session = Session.new
  end
  

  def create
    @session = Session.new(params[:session])
    @session.user = current_user
    @session.game
    if @session.save
      flash[:success] = "Session successfully created"
      redirect_to @session
    else
      flash[:error] = "Something went wrong"
      render 'new'
    end
  end
  
end