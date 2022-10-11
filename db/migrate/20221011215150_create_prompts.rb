class CreatePrompts < ActiveRecord::Migration[7.0]
  def change
    create_table :prompts do |t|
      t.text :content
      t.integer :user_id 

      t.timestamps
    end
  end
end