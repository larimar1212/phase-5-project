class User < ApplicationRecord
    has_secure_password
    has_many :prompt_answers 
    has_many :ratings 
    has_many :comments
    has_many :prompts, through: :prompt_answers
    validates_presence_of :email, :first_name, :last_name, :username
    validates_uniqueness_of :username, :email

    def recent_answers
        answers = self.prompt_answers.order(created_at: :desc).limit(5)
    end

end
