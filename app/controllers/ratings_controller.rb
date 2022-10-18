class RatingsController < ApplicationController
    before_action :set_rating #only: %i[ show update destroy ]

    def index 
        @ratings = Rating.all
        render json: @ratings
    end

    #GET /ratings/1 

    def show 
        render json: @rating
    end

    #POST /ratings 
    def create 
        @rating = Rating.create(rating_params)
        if @rating.save && !@current_user ## checks once
        render json: @rating, status: :created, location: @rating
    end

    #PATCH /ratings/1 
    def update 
        if @rating.update(rating_params)
            render json: @rating
        else 
            render json: @rating.errors, status: :unprocessable_entity
        end
    end

    #DELETE /ratings/1

    def destroy 
        @rating.:destroy
    end


    private 
    def @set_ratings 
        @rating = Rating.find(params[:id])
    end

    def rating_params
        params.require(:rating).permit(:prompt_answers_id, :likes, :ratings, :comments, :user_id)
    end


end
