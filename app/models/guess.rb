class Guess < ApplicationRecord
  validates :word, presence: true
  
  belongs_to :session
  belongs_to :user
end