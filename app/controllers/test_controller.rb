class TestController < ApplicationController


  def create
    relationship = "Follow"
    @relationship = relationship
    respond_to do |format|
    format.json { render json: nil }
    end
  end
end
