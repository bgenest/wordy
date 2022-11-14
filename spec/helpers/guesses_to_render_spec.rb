require_relative "../../app/services/app_services/guesses_to_render.rb"

describe GuessToRender do
  
  context "input guess" do
    it "converts guess to renderable object" do

      attempt = "Honest"
      answer = "Haggle"
      guess = GuessToRender.new(attempt,answer)
      guess_object = guess.format_word
      
      expect(guess_object[0][:letter]).to eq("h")
      expect(guess_object[0][:color]).to eq("green")
      expect(guess_object[1][:letter]).to eq("o")
      expect(guess_object[1][:color]).to eq("gray")
      expect(guess_object[3][:letter]).to eq("e")
      expect(guess_object[3][:color]).to eq("yellow")

    end
  end

  context "input guess" do
    it "converts guess to renderable object" do

      attempt = "haggle"
      answer = "smugly"
      guess = GuessToRender.new(attempt,answer)
      guess_object = guess.format_word

      #can be re-factored
      
      expect(guess_object[0][:letter]).to eq("h")
      expect(guess_object[0][:color]).to eq("gray")
      expect(guess_object[1][:letter]).to eq("a")
      expect(guess_object[1][:color]).to eq("gray")
      expect(guess_object[2][:letter]).to eq("g")
      expect(guess_object[2][:color]).to eq("gray")
      expect(guess_object[3][:letter]).to eq("g")
      expect(guess_object[3][:color]).to eq("green")
      expect(guess_object[4][:letter]).to eq("l")
      expect(guess_object[4][:color]).to eq("green")
      expect(guess_object[5][:letter]).to eq("e")
      expect(guess_object[5][:color]).to eq("gray")

    end
  end

  context "input guess" do
    it "converts guess to renderable object" do

      attempt = "haggle"
      answer =  "sugars"
      guess = GuessToRender.new(attempt,answer)
      guess_object = guess.format_word

      #can be re-factored
      
      expect(guess_object[0][:letter]).to eq("h")
      expect(guess_object[0][:color]).to eq("gray")
      expect(guess_object[1][:letter]).to eq("a")
      expect(guess_object[1][:color]).to eq("yellow")
      expect(guess_object[2][:letter]).to eq("g")
      expect(guess_object[2][:color]).to eq("green")
      expect(guess_object[3][:letter]).to eq("g")
      expect(guess_object[3][:color]).to eq("gray")
      expect(guess_object[4][:letter]).to eq("l")
      expect(guess_object[4][:color]).to eq("gray")
      expect(guess_object[5][:letter]).to eq("e")
      expect(guess_object[5][:color]).to eq("gray")

    end
  end

end