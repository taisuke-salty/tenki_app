class Condition < ApplicationRecord
  validates :evaluate_on, {presence: true}
end
