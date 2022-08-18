class Createguesses < ActiveRecord::Migration[5.2]
  def change
      create_table :guesses do |t|
        t.string :word, null: false
        t.belongs_to :user, null: false
        t.belongs_to :session, null: false
      
        t.timestamps
      end
      
  end
end
