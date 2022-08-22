class SessionsController < ApplicationController

  def index
    @sessions = Session.all
  end

  def create
  end

  def new
  end
  

end
