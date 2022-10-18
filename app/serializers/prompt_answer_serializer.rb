class PromptAnswerSerializer < ActiveModel::Serializer
  attributes :id, :prompt_id, :avgstar
  has_one :user 
end
