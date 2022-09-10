require_relative "../services/app_services/guesses_to_render.rb"

class SessionsController < ApplicationController

  def index
    if current_user
      user = current_user.id
      @sessions = Session.where(user: user)

    end

  end

end
