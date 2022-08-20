class Addletterstoguesses < ActiveRecord::Migration[5.2]
  def change
    add_column :guesses, :letter1, :string
    add_column :guesses, :letter2, :string
    add_column :guesses, :letter3, :string
    add_column :guesses, :letter4, :string
    add_column :guesses, :letter5, :string
    add_column :guesses, :letter6, :string
    add_column :guesses, :class1, :string
    add_column :guesses, :class2, :string
    add_column :guesses, :class3, :string
    add_column :guesses, :class4, :string
    add_column :guesses, :class5, :string
    add_column :guesses, :class6, :string

    remove_column :guesses, :word
  end
end
