class CardsController < ApplicationController
before_action :set_card, only: [:show, :edit, :destroy, :update]

  def index
    @cards = Card.all.order(feel_on: :desc)
  end

  def show

  end

  def edit
    @card_time = @card.feel_on.strftime("%Y-%m-%dT%H:%M")

  end

  def new

    # @card_time = Time.current.strftime("%Y-%m-%dT%H:%M")
    # binding.pry
  end

  def create
    @card = Card.new(card_params)
    # , user_id: current_user.id)
    @card.user_id = current_user.id
    if @card.save
      # binding.pry
      flash[:notice] = "感情カードが投稿されました"
      redirect_to("/cards/index")
    else
      # binding.pry
      render("cards/new")
    end
  end

  def update
    if @card.update(card_params)
      # binding.pry

      flash[:notice] = "感情カードが編集されました"
      redirect_to("/cards/index")
    else
      # binding.pry
      render("cards/edit")
    end
  end

  def destroy
    @card.destroy
    flash[:notice] = "感情カードが削除されました"
    # binding.pry
    redirect_to("/cards/index")
    # binding.pry

  end

  private
    def set_card
      @card = Card.find(params[:id])
    end

    def card_params
      params.require(:card).permit(:feeling, :feel_on, :detail)
    end

end
