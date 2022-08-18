class Session < ApplicationRecord
  belongs_to :game
  belongs_to :user

  has_many :guesses
end
