class NikkiController < ApplicationController
  def index
    @date1 = Date.current.strftime("%Y/%m/%d")
    @evaluation = 3
    @motivation = 2
  end
end
