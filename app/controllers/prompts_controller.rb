class PromptsController < ApplicationController

    def index
        @prompts = Prompt.all 
        render json: @prompts 
    end

    #show 
    def show 
        @prompts = Prompt.find_by(params[:id])
        render json:, serializers: PromptSerializer
    end

    def show 

    # get 5 highest answers 
    def high_prompt_answers  
        @self.prompt_answers.max_by(5) { |answer| answer.avgstar }
        render json:, serializers: PromptsWithHighestRatingsSerializer
        
   end 


   #when you want to see all prompts and prompt answers method together 



    # Need to declare categories as an array with "=> []" ?? 
end

#maybe need something that will 