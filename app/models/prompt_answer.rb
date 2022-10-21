class PromptAnswer < ApplicationRecord
    belongs_to :prompt 
    belongs_to :user
    has_many :ratings 
    #makes sure every rating has a unique user + answer pair
    validates :user_id, uniqueness: { scope: prompt_id }

  
    
     ### custom method to get the average rating 
     def avgstar
        self.ratings.sum(:stars) / self.ratings.size
      end
end
