class Rating < ApplicationRecord
    belongs_to :prompt_answer
    belongs_to :user
    validates :stars, numericality: {in: 1..5}

end
