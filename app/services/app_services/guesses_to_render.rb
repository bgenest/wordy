
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
      color = ""
    
      if @word[index] == @answer[index]  
        color = "green"
        @answer[letter] = "_"
      else
        color = "gray"
      end

      rendered_guess[index] = format_letter(letter,color)
      index += 1
    end

    index = 0
    @word.each_char do |letter|
      color=""
      if @answer.include?(letter) && letter != @answer[index]  
        color = "yellow"
         @answer[letter] = "_"
         rendered_guess[index] = format_letter(letter,color)
      end

      index += 1
  end
    return rendered_guess
  end

end 

