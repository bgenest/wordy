class Api::V1::GuessesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def show
    render json: Guesses.find(1)
  end

  def index
    render json: Guess.all
  end

  def create 
    guess = Guess.new(guess_params)
    guess.user = current_user
    game = params["game"]
    existing_session = Session.find_by("user": guess.user, "game_id": game["id"])
    if existing_session
      guess.session = existing_session
    else
      guess.session = Session.create("user": guess.user, "game_id": game["id"])
    end
    if guess.save
      render json: guess
        else
            render json: {error: guess.errors.full_messages}, status: :unprocessable_entity            
        end
  end

  def new
    guess = Guess.new
  end


  private

    def guess_params
        params.require(:guess).permit('letter1', 'letter2', 'letter3', 'letter4', 'letter5', 'letter6', 
                                      'class1', 'class2', 'class3', 'class4', 'class5', 'class6')
    end
  
end