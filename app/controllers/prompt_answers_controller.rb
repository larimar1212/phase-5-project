class PromptAnswersController < ApplicationController
    before_action :set_prompt_answer, only: 

    #index 

    #create


    #destoy
    #update 
    #show 



    #GET /prompt_answers 
    def index 
        @prompt_answers = PromptAnswer.all 
        render json: @prompt_answers
    end

    #GET /prompt_answers/1 
    def show
        render json: @prompt_answer
    end

    #POST /prompt_answers
    
    def create
        @prompt_answer = PromptAnswer.create(prompt_answer_params)
    
        if @prompt_answer.save
          render json: @prompt_answer, status: :created, location: @prompt_answer
        else
          render json: @prompt_answer.errors, status: :unprocessable_entity
        end
      end

      #PATCH /prompt_answers/1 
      def update
        if @prompt_answer.update(prompt_answer_params)
          render json: @prompt_answer
        else
          render json: @prompt_answer.errors, status: :unprocessable_entity
        end
      end


      #DELETE /prompt_answers/1 
      def destroy 
        @prompt_answer.destroy 
      end

      private 
      
        def set_prompt_answers
        @prompt_answer = PromptAnswer.find(params[:id])
     end

     def prompt_answer_params
        params.require(:prompt_answer).permit(:user_id, :prompt_id)
     end

end
