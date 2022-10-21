class PromptSerializer < ActiveModel::Serializer
  attributes :id
  has_many :prompt_answers
end
