class NikkiController < ApplicationController
  def index
    @date1 = Date.current.strftime("%Y/%m/%d")
    @evaluation = 3
  end
end
