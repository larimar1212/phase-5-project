class CreateRatings < ActiveRecord::Migration[7.0]
  def change
    create_table :ratings do |t|
      t.integer :prompt_answers_id
      t.boolean :likes
      t.integer :ratings
      t.text :comments
      t.integer :user_id

      t.timestamps
    end
  end
end
