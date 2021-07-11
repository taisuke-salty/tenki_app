class Card < ApplicationRecord
  validates :feeling, {presence: true}
  validates :feel_on, {presence: true}

  belongs_to :user
end
