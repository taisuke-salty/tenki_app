class NikkiController < ApplicationController
  def index
    @date1 = Date.current.strftime("%Y/%m/%d")
  end
end
