class AddColumnToCondition < ActiveRecord::Migration[6.0]
  def change
    add_column :conditions, :evaluate_on, :date
  end
end
