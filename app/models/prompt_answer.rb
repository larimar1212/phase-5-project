class PromptAnswer < ApplicationRecord
    belongs_to :prompt 
    belongs_to :user
    has_many :ratings 
    
end
