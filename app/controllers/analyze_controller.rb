class AnalyzeController < ApplicationController
  def a_day
    p params

    @a_day = params[:x]
    set_cards
    # @conditions = Condition.where(evaluate_on: @a_day)
    # @cards = Card.where(feel_on: @a_day.in_time_zone.all_day)

    # https://techracho.bpsinc.jp/hachi8833/2016_08_19/24876
  end

  def today_day
    @a_day = Date.current
    set_cards
    render("analyze/a_day")
    # d= Date.new(params[:year].to_i, params[:month].to_i, params[:day].to_i)
    # @conditions = Condition.where(evaluate_on: d)
  # binding.pry
    # @cards = Card.where(feel_on: d.in_time_zone.all_day)
    # https://techracho.bpsinc.jp/hachi8833/2016_08_19/24876
  end

  private
    def set_cards
      # binding.pry

      @conditions = Condition.where(evaluate_on: @a_day)
      @cards = Card.where(feel_on: @a_day.in_time_zone.all_day)
    end


end

