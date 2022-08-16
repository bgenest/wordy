# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


game1 = Game.create(answer:"Apples")
user1 = User.create(email: "emailtest55@gmail.com",password: "111111")
session1 = Session.create(user_id: user1.id, game: game1)
guess1 = Guess.create(session_id: session1.id , guess_count: 2 , guess: ["yellow, pencil"], user_id: user1.id)


binding.pry