
class Api::V1::GuessesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def show
    render json: Guesses.find(1)
  end

  def index
    render json: Guess.all
  end

  def create
    # formattedParams = formatPOST(params)

    guess = Guess.new()
    
    if guess.save
      render json: guess

        else
            render json: {error: guess.errors.full_messages}, status: :unprocessable_entity            
        end
  end

  def new
    guess = Guess.new
  end

  # def formatPOST (object)
  #     formatted_guess = {}

  #     data = object["_json"]
  #     game = data.last
  #     data.delete_at(-1)

  #     data.each {|a|
  #       index = 0
  #       object = {}
  #       while index < 6 do
  #       formatted_guess {
  #       object["letter#{index+1}"] = a["#{index}"]["i"]
  #       object["class#{index+1}"] = a["#{index}"]["status"]
  #       }
     
  #       index +=1

  #       end
  #     }
  #     return formatted_guess,game
  #   end

  private

    def guess_params
        params.require(:guess).permit(:letter1,:letter2,:letter3,:letter4, :letter5, :letter6,:class1,:class2,:class3,:class4, :class5, :class6)
    end
  
end