class AnalyzeController < ApplicationController
  def a_day
    p params

    @a_day = params[:a_day]
    # binding.pry
    set_condition
    set_cards
    # binding.pry

    respond_to do |format|
      format.html
      format.js
    end

    # render "analyze/a_day"
  end

  def today_day
    @a_day = Date.current
    set_cards
    render("analyze/a_day")

  end

  private
    def set_condition
      @conditions = Condition.where(evaluate_on: @a_day, user_id: current_user.id)
    end

    def set_cards
      # binding.pry
      @cards = Card.where(feel_on: @a_day.in_time_zone.all_day, user_id: current_user.id)
      @cardsHappy = @cards.where(feeling: 1)
      @cardsGrad = @cards.where(feeling: 2)
      @cardsSad = @cards.where(feeling: 3)
      @cardsAngry = @cards.where(feeling: 4)
          # https://techracho.bpsinc.jp/hachi8833/2016_08_19/24876
    end


end

