class User < ApplicationRecord
    has_secure_password
    has_many :prompt_answers 
    has_many :prompts, through: :prompt_answers
    validates_presence_of :email, :first_name, :last_name, :username
    validates_uniqueness_of :username, :email



end
