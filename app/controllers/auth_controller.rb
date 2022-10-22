class AuthController < ApplicationController
    skip_before_action :authorized, only: [:create]


    ##LOGIN
    def create 
        @user = User.find_by(username: login_params[:username])
        #user authenticate comes from bcrypt 
        if @user&.authenticate(login_params[:password])
          #encode token comes from APPcontroller
            token = generate_token(@user.id)       
      render json: {user: @user, token: token }, status: :accepted
    else
      render json: { message: 'Invalid username or password' }, status: :unauthorized
    end
  end

        
  private 

        def login_params
            params.permit(:username, :password, :password_confirmation)
        end

end
