class PromptAnswer < ApplicationRecord
    belongs_to :prompt 
    belongs_to :user
    has_many :ratings 
    
     ### custom mehod to get the average rating 
     def avgstar
        self.ratings.sum(:stars) / self.ratings.size
      end
end
