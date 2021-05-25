class ChangeCardsFeelonDataType < ActiveRecord::Migration[6.0]
  def change
    change_column :cards, :feel_on, :datetime
  end
end
