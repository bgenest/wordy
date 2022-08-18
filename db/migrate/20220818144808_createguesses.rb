class Createguesses < ActiveRecord::Migration[5.2]
  def change
      create_table :guesses do |t|
        t.string :guess
        t.belongs_to :user
        t.belongs_to :session
      
        t.timestamps
      end
      
  end
end
