class PromptSerializer < ActiveModel::Serializer
  attributes :id, :name, :category, :content
  has_many :prompt_answers
end
