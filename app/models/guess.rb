class Guess < ApplicationRecord
  validates :guess_count, presence: true
  validates :guess, presence: true

  belongs_to :session
  belongs_to :user
end