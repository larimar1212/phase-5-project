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
end
