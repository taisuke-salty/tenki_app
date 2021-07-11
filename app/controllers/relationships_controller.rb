class RelationshipsController < ApplicationController
  def create
    @user = "taisuke"
    relationship = 1
    @relationship = relationship
    respond_to do |format|
    format.json { render json: @relationship }
    end
  end
end
