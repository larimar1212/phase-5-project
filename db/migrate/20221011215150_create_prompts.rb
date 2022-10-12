class CreatePrompts < ActiveRecord::Migration[7.0]
  def change
    create_table :prompts do |t|
      t.text :content
      t.string :category

      t.timestamps
    end
  end
end
