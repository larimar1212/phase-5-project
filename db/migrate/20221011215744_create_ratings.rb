class CreateRatings < ActiveRecord::Migration[7.0]
  def change
    create_table :ratings do |t|
      t.integer :prompt_answer_id
      t.integer :stars
      t.integer :user_id

      t.timestamps
    end
  end
end

