class PromptsController < ApplicationController

    def index
        @prompts = Prompt.all 
        render json: @prompts 
    end

    #show 
    def show 
        @prompts = Prompt.find_by!(id: params[:id])
        render json:@prompts, serializers: PromptSerializer
    end

  


   #when you want to see all prompts and prompt answers method together 



    # Need to declare categories as an array with "=> []" ?? 
end

#maybe need something that will 