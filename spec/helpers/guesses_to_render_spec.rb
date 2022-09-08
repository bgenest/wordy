require_relative "../../app/services/app_services/guesses_to_render.rb"

describe GuessToRender do
  
  context "input guess" do
    it "converts guess to renderable object" do

      attempt = "Honest"
      answer = "Haggle"
      guess_1 = GuessToRender.new(attempt,answer)
      guess_object = guess_1.format_word
      
      expect(guess_object[0][:letter]).to eq("h")
      expect(guess_object[0][:color]).to eq("green")
      expect(guess_object[1][:letter]).to eq("o")
      expect(guess_object[1][:color]).to eq("gray")
      expect(guess_object[3][:letter]).to eq("e")
      expect(guess_object[3][:color]).to eq("yellow")

    end
  end
end