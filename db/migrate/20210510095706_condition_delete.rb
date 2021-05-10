class ConditionDelete < ActiveRecord::Migration[6.0]
  def change
    drop_table :conditions
    drop_table :cards
  end
end
