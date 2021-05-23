class Card < ApplicationRecord
  validates :feeling, {presence: true}
  validates :feel_on, {presence: true}
end
