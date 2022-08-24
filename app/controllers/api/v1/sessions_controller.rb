class Api::V1::SessionsController < ApplicationController

  def show

  end

  def index

  end

  def new
    @session = Session.new
    binding.pry
  end
  

  def create

    binding.pry

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