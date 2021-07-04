class AnalyzeController < ApplicationController
  def a_day
    p params

    @a_day = params[:a_day]
    # binding.pry
    set_cards

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
    def set_cards
      # binding.pry
      @conditions = Condition.where(evaluate_on: @a_day, user_id: current_user.id)
      @cards = Card.where(feel_on: @a_day.in_time_zone.all_day, user_id: current_user.id)
          # https://techracho.bpsinc.jp/hachi8833/2016_08_19/24876
    end


end

