class PromptAnswer < ApplicationRecord
    belongs_to :prompt 
    belongs_to :user
    has_many :ratings 
    
     ### custom method to get the average rating of one answer 
     
     #conditional logic if soemhting has no ratings then it should return 0 
     def avgstar 
      if self.ratings.length == 0 
        return 0 
      else 
        self.ratings.sum(:stars) / self.ratings.length
        end

    end

      # class method to get 5 highest rated prompts

      def self.five_answers 
        self.all.max_by(5) { |answer| answer.avgstar }
      end


end
