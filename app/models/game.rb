class Game < ApplicationRecord
  validates :answer, presence: true

  has_many :sessions
  has_many :users
end