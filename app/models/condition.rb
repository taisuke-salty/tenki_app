class Condition < ApplicationRecord
  validates :evaluate_on, {presence: true}

  belongs_to :user

end
