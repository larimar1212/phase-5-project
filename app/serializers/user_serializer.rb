class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :username, :first_name, :last_name, :profile_picture
  has_many :prompt_answers 
  
end
