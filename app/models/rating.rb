class Rating < ApplicationRecord
    belongs_to :prompt_answer
    belongs_to :user
    validates :stars, numericality: {in: 1..5}
    #makes sure every rating has a unique user + answer pair
    validates :user_id, uniqueness: { scope: :prompt_answer_id }

end
