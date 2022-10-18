class Rating < ApplicationRecord
    belongs_to :prompt_answer
    belongs_to :user
end
