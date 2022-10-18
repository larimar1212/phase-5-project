class UsersController < ApplicationController
    skip_before_action :authorized, only: [:create]
     before action :set_user, only: %i[show update destroy]

     
     def index 
      @users = User.all
      render json: @users 
      
      # GET /profile 
   def profile
    puts "user id: #{@user_id}"
    @user_id = decode_token
    if @user_id
      @user = User.find_by!(id: @user_id)
      render json: @user
    else 
      render json: {error: "401 incorrect token"}, status: 401
    end
  end
     
    # GET /users/:id
    def show 
      @user = User.find_by(params[:id])
      render json: @user, serializer: UserSerializer 
    end


  # POST /users
  def create
    @user = User.create!(user_params)
    render json: {user: @user, jwt: @token}, status: :created 
  end 
   
  # TODO: Allow users to update their user info and delete their account

  #PATCH /users/1 
  def update 
    current_user.update!(user_params)
    render json: current_user 
  end
  
   # DELETE /users/1
   def destroy
    @user.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
   def set_user
     @user = User.find_by!(id:params[:id])
   end
  # Only allow a list of trusted parameters through.

  def user_params
    params.permit(:email, :username, :password, :first_name, :last_name, :profile_picture)
  end

    
end
