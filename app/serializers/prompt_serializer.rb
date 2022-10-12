class PromptSerializer < ActiveModel::Serializer
  attributes :id, :user_id
  has_many :prompt_answers
end
