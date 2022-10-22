class PromptAnswersController < ApplicationController
    before_action :set_prompt_answers, only: %i[ show update destroy ]
  

    #GET /prompt_answers 
    def index 
        @prompt_answers = PromptAnswer.all 
        render json: @prompt_answers
    end

    #GET /prompt_answers/1 
    def show
        render json: @prompt_answer
    end




  ##### GET /prompt_answers  ## see all the specific answers for a prompt 
   #  def prompts_answers
   # @prompt_answers = @prompt.prompt_answers
  #  render json: @prompt_answers
 #end


    #POST /prompt_answers
    def create
      # Merge an object containing the prompt_id param with the prompt_answers_params object
        @prompt_answer = PromptAnswer.new(prompt_answer_params) #.merge({prompt_id: params[:prompt_id]}))
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

      # get 5 highest answers
        def high_prompt_answers
          @prompt_answers = PromptAnswer.five_answers
          render json: @prompt_answers
        end

      private 
      # Use callbacks to share common setup or constraints between actions.
      
       def set_prompt_answers
       @prompt_answer = PromptAnswer.find_by!(id:params[:id])
     end

     def prompt_answer_params
        params.require(:prompt_answer).permit(:user_id, :prompt_id, :content)
     end

end

#authorization required to be able to post an answer  
