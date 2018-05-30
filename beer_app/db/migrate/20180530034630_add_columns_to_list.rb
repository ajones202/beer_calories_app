class AddColumnsToList < ActiveRecord::Migration[5.2]
  def change
    add_column :lists, :beer_id, :integer
    add_column :lists, :name, :string
    add_column :lists, :img, :string
    add_column :lists, :calories, :integer
    add_column :lists, :abv, :integer
    add_column :lists, :oz, :integer
    add_column :lists, :carbs, :integer
    add_column :lists, :walking, :integer
    add_column :lists, :running, :integer
    add_column :lists, :biking, :integer

  end
end
