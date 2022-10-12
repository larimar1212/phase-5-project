class Prompt < ApplicationRecord
    has_many :prompt_answers, dependent: :destroy


end
  #index, show 