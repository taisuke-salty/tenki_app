class ApplicationController < ActionController::Base
  def after_sign_in_path_for(resource)
    conditions_index_path
  end

  # 白本p 392  recordが見つからないときの例外処理
  rescue_from ActiveRecord::RecordNotFound, with: :id_invalid

private
    def sign_in_required
        redirect_to new_user_session_url unless user_signed_in?
    end

    def id_invalid(e)
      render 'shared/record_not_found', status: 404
    end

end
