class CreateCards < ActiveRecord::Migration[6.0]
  def change
    create_table :cards do |t|
      t.integer :feeling
      t.time :feel_on
      t.text :detail

      t.timestamps
    end
  end
end