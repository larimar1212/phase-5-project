class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :profile_picture, :prompt_answers
  has_many :ratings
  
  def prompt_answers
    nested_answers = []
    object.prompt_answers.each do |answer|
      nested_answer = Hash.new
      nested_answer[:id] = answer.id
      nested_answer[:avgstar] = answer.avgstar
      nested_answer[:content] = answer.content
      nested_answer[:created_at] = answer.created_at
      nested_answer[:prompt] = answer.prompt.slice(:id, :content, :category, :name)
      nested_answers << nested_answer
    end
    nested_answers
  end

end
