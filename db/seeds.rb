
require "words.rb"


$answer_array.each do |word|
  Game.create(answer: word)
end



game1 = Game.create(answer:"Banana")
user1 = User.create(email: "test@gmail.com",password: "111111")
session1 = Session.create(user: user1, game: game1)

guess1 = Guess.create(
  letter1: "b",
  letter2: "a",
  letter3: "t",
  letter4: "t",
  letter5: "l",
  letter6: "e",
  class1: "correct-letter-spot",
  class2: "correct-letter-spot",
  class3: "Incorrect",
  class4: "Incorrect",
  class5: "Incorrect",
  class6: "Incorrect",
  user: user1,
  session: session1
)
guess2 = Guess.create(
  letter1: "b",
  letter2: "a",
  letter3: "d",
  letter4: "g",
  letter5: "e",
  letter6: "r",
  class1: "correct-letter-spot",
  class2: "correct-letter-spot",
  class3: "Incorrect",
  class4: "Incorrect",
  class5: "Incorrect",
  class6: "Incorrect",
  user: user1,
  session: session1
)
guess3 = Guess.create(
  letter1: "b",
  letter2: "a",
  letter3: "n",
  letter4: "n",
  letter5: "e",
  letter6: "r",
  class1: "correct-letter-spot",
  class2: "correct-letter-spot",
  class3: "correct-letter-spot",
  class4: "correct-letter",
  class5: "Incorrect",
  class6: "Incorrect",
  user: user1,
  session: session1
)
guess4 = Guess.create(
  letter1: "b",
  letter2: "a",
  letter3: "l",
  letter4: "l",
  letter5: "e",
  letter6: "r",
  class1: "correct-letter-spot",
  class2: "correct-letter-spot",
  class3: "Incorrect",
  class4: "Incorrect",
  class5: "Incorrect",
  class6: "Incorrect",
  user: user1,
  session: session1
)
guess5 = Guess.create(
  letter1: "b",
  letter2: "a",
  letter3: "n",
  letter4: "a",
  letter5: "n",
  letter6: "a",
  class1: "correct-letter-spot",
  class2: "correct-letter-spot",
  class3: "correct-letter-spot",
  class4: "correct-letter-spot",
  class5: "correct-letter-spot",
  class6: "correct-letter-spot",
  user: user1,
  session: session1
)
game2 = Game.create(answer:"Creams")
session2 = Session.create(user: user1, game: game2)

guess6 = Guess.create(
  letter1: "s",
  letter2: "p",
  letter3: "e",
  letter4: "a",
  letter5: "r",
  letter6: "s",
  class1: "Incorrect",
  class2: "Incorrect",
  class3: "correct-letter-spot",
  class4: "correct-letter-spot",
  class5: "correct-letter",
  class6: "correct-letter-spot",
  user: user1,
  session: session2
)
guess7 = Guess.create(
  letter1: "g",
  letter2: "l",
  letter3: "e",
  letter4: "a",
  letter5: "m",
  letter6: "s",
  class1: "Incorrect",
  class2: "Incorrect",
  class3: "correct-letter-spot",
  class4: "correct-letter-spot",
  class5: "correct-letter-spot",
  class6: "correct-letter-spot",
  user: user1,
  session: session2
)
guess8 = Guess.create(
  letter1: "d",
  letter2: "r",
  letter3: "e",
  letter4: "a",
  letter5: "d",
  letter6: "s",
  class1: "Incorrect",
  class2: "correct-letter-spot",
  class3: "correct-letter-spot",
  class4: "correct-letter-spot",
  class5: "Incorrect",
  class6: "correct-letter-spot",
  user: user1,
  session: session2
)
guess9 = Guess.create(
  letter1: "d",
  letter2: "r",
  letter3: "e",
  letter4: "a",
  letter5: "m",
  letter6: "s",
  class1: "Incorrect",
  class2: "correct-letter-spot",
  class3: "correct-letter-spot",
  class4: "correct-letter-spot",
  class5: "correct-letter-spot",
  class6: "correct-letter-spot",
  user: user1,
  session: session2
)
guess10 = Guess.create(
  letter1: "c",
  letter2: "r",
  letter3: "e",
  letter4: "a",
  letter5: "m",
  letter6: "s",
  class1: "correct-letter-spot",
  class2: "correct-letter-spot",
  class3: "correct-letter-spot",
  class4: "correct-letter-spot",
  class5: "correct-letter-spot",
  class6: "correct-letter-spot",
  user: user1,
  session: session2
)


game3 = Game.create(answer:"Haggle")
session3 = Session.create(user: user1, game: game3)

guess11 = Guess.create(
  letter1: "s",
  letter2: "w",
  letter3: "o",
  letter4: "r",
  letter5: "d",
  letter6: "s",
  class1: "Incorrect",
  class2: "Incorrect",
  class3: "Incorrect",
  class4: "Incorrect",
  class5: "Incorrect",
  class6: "Incorrect",
  user: user1,
  session: session3
)
guess12 = Guess.create(
  letter1: "g",
  letter2: "l",
  letter3: "e",
  letter4: "a",
  letter5: "m",
  letter6: "s",
  class1: "correct-letter",
  class2: "correct-letter",
  class3: "correct-letter",
  class4: "Incorrect",
  class5: "Incorrect",
  class6: "Incorrect",
  user: user1,
  session: session3
)
guess13 = Guess.create(
  letter1: "l",
  letter2: "e",
  letter3: "m",
  letter4: "o",
  letter5: "n",
  letter6: "s",
  class1: "correct-letter",
  class2: "correct-letter",
  class3: "correct-letter-spot",
  class4: "correct-letter-spot",
  class5: "correct-letter-spot",
  class6: "correct-letter-spot",
  user: user1,
  session: session3
)
guess14 = Guess.create(
  letter1: "h",
  letter2: "a",
  letter3: "l",
  letter4: "l",
  letter5: "o",
  letter6: "w",
  class1: "correct-letter-spot",
  class2: "correct-letter-spot",
  class3: "correct-letter",
  class4: "Incorrect",
  class5: "Incorrect",
  class6: "Incorrect",
  user: user1,
  session: session3
)
guess15 = Guess.create(
  letter1: "h",
  letter2: "a",
  letter3: "r",
  letter4: "r",
  letter5: "o",
  letter6: "w",
  class1: "correct-letter-spot",
  class2: "correct-letter-spot",
  class3: "Incorrect",
  class4: "Incorrect",
  class5: "Incorrect",
  class6: "Incorrect",
  user: user1,
  session: session3
)

game4 = Game.create(answer:"Morons")
session4 = Session.create(user: user1, game: game4)

guess16 = Guess.create(
  letter1: "U",
  letter2: "M",
  letter3: "P",
  letter4: "I",
  letter5: "R",
  letter6: "E",
  class1: "Incorrect",
  class2: "Incorrect",
  class3: "Incorrect",
  class4: "Incorrect",
  class5: "correct-letter",
  class6: "Incorrect",
  user: user1,
  session: session4
)
guess17 = Guess.create(
  letter1: "R",
  letter2: "o",
  letter3: "o",
  letter4: "m",
  letter5: "b",
  letter6: "a",
  class1: "correct-letter",
  class2: "correct-letter-spot",
  class3: "correct-letter",
  class4: "correct-letter",
  class5: "Incorrect",
  class6: "Incorrect",
  user: user1,
  session: session4
)
guess18 = Guess.create(
  letter1: "m",
  letter2: "a",
  letter3: "r",
  letter4: "o",
  letter5: "o",
  letter6: "n",
  class1: "correct-letter-spot",
  class2: "Incorrect",
  class3: "correct-letter-spot",
  class4: "correct-letter-spot",
  class5: "correct-letter",
  class6: "correct-letter",
  user: user1,
  session: session4
)
guess19 = Guess.create(
  letter1: "m",
  letter2: "a",
  letter3: "r",
  letter4: "r",
  letter5: "o",
  letter6: "w",
  class1: "correct-letter-spot",
  class2: "Incorrect",
  class3: "correct-letter-spot",
  class4: "Incorrect",
  class5: "correct-letter",
  class6: "Incorrect",
  user: user1,
  session: session4
)
guess20 = Guess.create(
  letter1: "M",
  letter2: "o",
  letter3: "r",
  letter4: "o",
  letter5: "n",
  letter6: "s",
  class1: "correct-letter-spot",
  class2: "correct-letter-spot",
  class3: "correct-letter-spot",
  class4: "correct-letter-spot",
  class5: "correct-letter-spot",
  class6: "correct-letter-spot",
  user: user1,
  session: session4
)
game5 = Game.create(answer:"Ghouls")
session5 = Session.create(user: user1, game: game5)

guess21 = Guess.create(
  letter1: "b",
  letter2: "a",
  letter3: "n",
  letter4: "a",
  letter5: "n",
  letter6: "a",
  class1: "Incorrect",
  class2: "Incorrect",
  class3: "Incorrect",
  class4: "Incorrect",
  class5: "Incorrect",
  class6: "Incorrect",
  user: user1,
  session: session5
)
guess22 = Guess.create(
  letter1: "T",
  letter2: "i",
  letter3: "m",
  letter4: "b",
  letter5: "e",
  letter6: "r",
  class1: "Incorrect",
  class2: "Incorrect",
  class3: "Incorrect",
  class4: "Incorrect",
  class5: "Incorrect",
  class6: "Incorrect",
  user: user1,
  session: session5
)
guess23 = Guess.create(
  letter1: "T",
  letter2: "a",
  letter3: "l",
  letter4: "o",
  letter5: "n",
  letter6: "s",
  class1: "Incorrect",
  class2: "Incorrect",
  class3: "correct-letter",
  class4: "correct-letter",
  class5: "Incorrect",
  class6: "correct-letter-spot",
  user: user1,
  session: session5
)
guess24 = Guess.create(
  letter1: "g",
  letter2: "r",
  letter3: "o",
  letter4: "u",
  letter5: "n",
  letter6: "d",
  class1: "correct-letter-spot",
  class2: "Incorrect",
  class3: "correct-letter",
  class4: "correct-letter",
  class5: "Incorrect",
  class6: "Incorrect",
  user: user1,
  session: session5
)
guess25 = Guess.create(
  letter1: "G",
  letter2: "h",
  letter3: "o",
  letter4: "u",
  letter5: "l",
  letter6: "s",
  class1: "correct-letter-spot",
  class2: "correct-letter-spot",
  class3: "correct-letter-spot",
  class4: "correct-letter-spot",
  class5: "correct-letter-spot",
  class6: "correct-letter-spot",
  user: user1,
  session: session5
)
game6 = Game.create(answer:"Hoists")
session6 = Session.create(user: user1, game: game6)

guess26 = Guess.create(
  letter1: "b",
  letter2: "r",
  letter3: "o",
  letter4: "w",
  letter5: "n",
  letter6: "s",
  class1: "Incorrect",
  class2: "Incorrect",
  class3: "correct-letter",
  class4: "Incorrect",
  class5: "Incorrect",
  class6: "correct-letter-spot",
  user: user1,
  session: session6
)
guess27 = Guess.create(
  letter1: "p",
  letter2: "r",
  letter3: "o",
  letter4: "w",
  letter5: "e",
  letter6: "l",
  class1: "Incorrect",
  class2: "Incorrect",
  class3: "correct-letter",
  class4: "Incorrect",
  class5: "Incorrect",
  class6: "Incorrect",
  user: user1,
  session: session6
)
guess28 = Guess.create(
  letter1: "f",
  letter2: "a",
  letter3: "r",
  letter4: "r",
  letter5: "o",
  letter6: "w",
  class1: "Incorrect",
  class2: "Incorrect",
  class3: "Incorrect",
  class4: "Incorrect",
  class5: "correct-letter",
  class6: "Incorrect",
  user: user1,
  session: session6
)
guess29 = Guess.create(
  letter1: "g",
  letter2: "r",
  letter3: "o",
  letter4: "u",
  letter5: "n",
  letter6: "d",
  class1: "correct-letter-spot",
  class2: "Incorrect",
  class3: "correct-letter",
  class4: "correct-letter",
  class5: "Incorrect",
  class6: "Incorrect",
  user: user1,
  session: session6
)
guess30 = Guess.create(
  letter1: "H",
  letter2: "o",
  letter3: "i",
  letter4: "s",
  letter5: "t",
  letter6: "s",
  class1: "correct-letter-spot",
  class2: "correct-letter-spot",
  class3: "correct-letter-spot",
  class4: "correct-letter-spot",
  class5: "correct-letter-spot",
  class6: "correct-letter-spot",
  user: user1,
  session: session6
)