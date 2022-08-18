class Guess < ApplicationRecord
  validates :guess, presence: true
  
  belongs_to :session
  belongs_to :user
end