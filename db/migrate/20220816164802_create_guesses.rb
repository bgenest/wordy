class CreateGuesses < ActiveRecord::Migration[5.2]
  def change
    create_table :guesses do |t|
      t.integer :guess_count, null: false
      t.string :guess, null: false
      t.belongs_to :session, null: false
      t.belongs_to :user, null: false

      t.timestamps null: false
    end
  end
end
