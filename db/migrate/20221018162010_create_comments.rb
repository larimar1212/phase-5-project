class CreateComments < ActiveRecord::Migration[7.0]
  def change
    create_table :comments do |t|
      t.integer :prompt_answer_id
      t.integer :user_id
      t.text :comment

      t.timestamps
    end
  end
end
