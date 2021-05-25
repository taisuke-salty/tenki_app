class CardsController < ApplicationController
before_action :set_card, only: [:show, :edit, :destroy]

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
    @card = Card.new(feel_on: Time.parse(params[:feel_on]),
                    feeling: params[:feeling],
                    detail: params[:detail],
                    user_id: current_user.id)

    if @card.save
      # binding.pry
      flash[:notice] = "感情カードが投稿されました"
      redirect_to("/cards/index")
    else
      # binding.pry
      render("cards/new")
    end
  end

  def destroy
    @card.destroy
    redirect_to("/cards/index")
  end

  private
    def set_card
      @card = Card.find(params[:id])
    end

end
