class NikkiController < ApplicationController
  def index
    @date1 = Date.current.strftime("%Y/%m/%d")
    @evaluation = 3
    @motivation = 2
    @feel = 1
    @date2 = Date.new(2020,11,13).strftime("%Y/%m/%d")
  end
end
