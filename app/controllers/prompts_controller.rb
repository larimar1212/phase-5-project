class PromptsController < ApplicationController

    def index
        @prompts = Prompt.all 
        render json: @prompts 
    end

    #show 
    def show 
        @prompts = Prompt.find_by(params[:id])
        render json: @prompts
    end

    # Need to declare categories as an array with "=> []" ?? 
end

#maybe need something that will 