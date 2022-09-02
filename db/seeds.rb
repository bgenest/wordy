
require "words.rb"

$answer_array.each do |word|
  Game.create(answer: word)
end
