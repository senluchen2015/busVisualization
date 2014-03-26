class CreateCta < ActiveRecord::Migration
  def change
    create_table :cta do |t|
      t.integer :stop_id
      t.string :on_street
      t.string :cross_street
      t.integer :routes
      t.float :boardings
      t.float :alightings
      t.date :month_beginning
      t.string :daytype
      t.string :location

      t.timestamps
    end
  end
end
