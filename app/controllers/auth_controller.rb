class AuthController < ApplicationController
    skip_before_action :authorized, only: [:create]

    def create 
        @user = User.find_by(username: login_params[:username])
        if @user&.authenticate(login_params[:password])
            token = generate_token(@user_id)

             
      render json: { user:@user, jwt: token, prompt_answers: @user.prompt_answers, ratings:@user.ratings}, status: :accepted
    else
      render json: { message: 'Invalid username or password' }, status: :unauthorized
    end
  end

        
        private 

        def login_params
            params.require(:user).permit(:username, :password, :password_confirmation)
        end

end
