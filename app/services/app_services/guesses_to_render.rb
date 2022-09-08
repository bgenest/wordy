
class GuessToRender

  def initialize(word, answer)
    @word = word.downcase
    @answer = answer.downcase
  end

  def win? 
    @word == @answer ? true : false
  end

  def format_letter(letter, letter_color)
      return {"letter": letter, "color": letter_color}
  end

  def format_word
    rendered_guess = {}
    index = 0
    @word.each_char do |letter|
      if @answer.include? letter
        if @word.index(letter) == @answer.index(letter)  
          rendered_guess[index] = format_letter(letter,"green")
        else 
          rendered_guess[index] = format_letter(letter,"yellow")
        end
      else
        rendered_guess[index] = format_letter(letter,"gray")
      end
      index += 1
    end
    return rendered_guess
  end

  def check_for_redundency(guess_nested_object)
    #if letter is already accounted for (yellow/green)
  end

end 
