game1 = Game.create(answer:"Banana")
user1 = User.create(email: "test6@gmail.com",password: "111111")
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
guess9 = Guess.create(
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
  session: session1
)
