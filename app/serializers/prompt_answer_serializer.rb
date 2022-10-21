class PromptAnswerSerializer < ActiveModel::Serializer
  attributes :id, :prompt_id, :avgstar
  has_one :user 
  belongs_to :prompt

  
end
