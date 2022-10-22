class PromptAnswerSerializer < ActiveModel::Serializer
  attributes :id, :avgstar, :content
  belongs_to :user 
  belongs_to :prompt

  
end
