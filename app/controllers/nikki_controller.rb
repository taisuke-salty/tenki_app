class NikkiController < ApplicationController
  def index
    @date1 = Date.current.strftime("%Y/%m/%d")
    @evaluation = 3
    @motivation = 2
    @cardDate = Date.new(2020,11,13).strftime("%Y/%m/%d")
    @cardText ="昔の友だちとリモート飲み。懐かしくて楽しかったー。"
    @cardEmt = 0
  end
end
