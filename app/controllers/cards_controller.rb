class CardsController < ApplicationController
  def index
  end

  def show
  end

  def edit
  end

  def new
    @card_time = Time.current.strftime("%Y-%m-%dT%H:%M")
    # binding.pry
  end
end
