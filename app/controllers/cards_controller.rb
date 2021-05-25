class CardsController < ApplicationController
  def index
    @cards = Card.all.order(feel_on: :desc)
  end

  def show
  end

  def edit
  end

  def new
    @card_time = Time.current.strftime("%Y-%m-%dT%H:%M")
    # binding.pry
  end

  def create
    @card = Card.new(feel_on: Time.parse(params[:feel_on]), feeling: params[:feeling], detail: params[:detail])
binding.pry
    if @card.save
      flash[:notice] = "感情カードが投稿されました"
      redirect_to("/cards/index")
    else
      render("cards/new")
    end
  end
end
