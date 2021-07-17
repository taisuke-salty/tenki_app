class HelloController < ApplicationController
  def index
    @ajax_prac_day = params[:ajax_prac_day]

    @condition = Condition.find_by(evaluate_on: @ajax_prac_day)
    if @condition

    @condition_id= @condition.id.to_s
    end
    # binding.pry
        p request.format


    respond_to do |format|
      format.html
      format.js
    end


  end

  def ajax_prac

  end
end
