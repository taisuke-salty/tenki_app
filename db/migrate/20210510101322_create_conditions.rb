class CreateConditions < ActiveRecord::Migration[6.0]
  def change
    create_table :conditions do |t|
      t.integer :evaluation
      t.integer :motivation
      t.date :evaluate_on

      t.timestamps
    end
  end
end
