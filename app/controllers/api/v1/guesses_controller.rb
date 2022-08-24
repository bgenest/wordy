class Api::V1::GuessesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def show
    render json: Guesses.find(1)
  end

  def index
    render json: Guess.all
  end

  def create    

    formatted_data = formatJson(params)
    guess = Guess.new(guess_params)
    
    if guess.save
      render json: guess
        else
            render json: {error: guess.errors.full_messages}, status: :unprocessable_entity            
        end
  end

  def new
    guess = Guess.new
  end

def formatJson (object)
  limit = 5
  index = 0
  user_id = current_user["id"]
  game_id =  object['game']
  data_formatted = {}

  while index <= limit
    object['guess']["letter#{index+1}"] = object["#{index}"]['i']
    object['guess']["class#{index+1}"] = object["#{index}"]['status']
    index += 1
  end

  guess = object["guess"]
  guess["guess"]["session"] = Session.find(user:[user_id],game:[game_id])
  binding.pry

end


  private

    def guess_params
        params.require(:guess).permit(:letter1, :letter2, :letter3, :letter4, :letter5, :letter6, 
                                      :class1, :class2, :class3, :class4, :class5, :class6,:session, :user)
    end
  
end