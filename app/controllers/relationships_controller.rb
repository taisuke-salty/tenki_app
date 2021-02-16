class RelationshipsController < ApplicationController
  def create
    @user = "taisuke"
    relationship = "Follow"
    @relationship = relationship
    respond_to do |format|
    format.json { render json: @relationship }
    end
  end

  def destroy
    relationship = "Unfollow"
    @relationship = relationship
    respond_to do |format|
    format.json { render json: @relationship }
    end
  end
end
