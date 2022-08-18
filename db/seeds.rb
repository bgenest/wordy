# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


game1 = Game.create(answer:"Banana")
user1 = User.create(email: "test1@gmail.com",password: "111111")
session1 = Session.create(user: user1, game: game1)

guess1 = Guess.create(user: user1, session: session1, guess:"green")
guess2 = Guess.create(user: user1, session: session1, guess:"yellow")
guess3 = Guess.create(user: user1, session: session1, guess:"browny")
guess4 = Guess.create(user: user1, session: session1, guess:"boonys")

game2 = Game.create(answer:"apples")
user2 = User.create(email: "test2@gmail.com",password: "111111")
session2 = Session.create(user: user2, game: game2)

guess5 = Guess.create(user: user2, session: session2, guess:"green")
guess6 = Guess.create(user: user2, session: session2, guess:"yellow")
guess7 = Guess.create(user: user2, session: session2, guess:"browny")
guess8 = Guess.create(user: user2, session: session2, guess:"boonys")

game3 = Game.create(answer:"Gnomes")
user3 = User.create(email: "test3@gmail.com",password: "111111")
session3 = Session.create(user: user3, game: game3)

guess9 = Guess.create(user: user3, session: session3, guess:"green")
guess10 = Guess.create(user: user3, session: session3, guess:"yellow")
guess11 = Guess.create(user: user3, session: session3, guess:"browny")
guess12 = Guess.create(user: user3, session: session3, guess:"boonys")
