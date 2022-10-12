class PromptAnswerSerializer < ActiveModel::Serializer
  attributes :id, :prompt_id
  has_one :user 
end
