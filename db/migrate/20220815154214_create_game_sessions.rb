class CreateGameSessions < ActiveRecord::Migration[5.2]
  def change
    create_table :game_sessions do |t|
      t.string :answer, null: false
      t.integer :guess_count, null: false
      t.string :guesses, null: false

      t.timestamps null: false
    end
  end
end
