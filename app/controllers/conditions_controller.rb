class ConditionsController < ApplicationController
  before_action :sign_in_required

  def index
    @conditions = Condition.all.order(evaluate_on: :desc)
  end

  def new
    @evaluate_day = Date.current.strftime("%Y-%m-%d")
  end

  def create
    #find_or_initialize_by: evaluate_onの日付が新しい場合はnewし、すでにDBにある場合はfindする
    # (クラスインスタンス).new_record? クラスインスタンスについて、すでにDBにあるものであればtrue、そうでないならfalse
    # save!は、saveできなかったときにエラーではなく、「例外」を返す。→現時点では例外のメリットがわからないので使わない。
    #find_or_initializeはブロックを渡せるメソッド（引数に &block を持つ）ので、これを使えば、evaluate_on以外の値をかんたんに入力できそうだけど、やり方不明にスルー
    # https://qiita.com/imanau11/items/cf7b21c502fa171ad0be

    motivation = params[:motivation]
    evaluation = params[:evaluation]
    evaluate_on = params[:evaluate_on]

    @condition = Condition.find_or_initialize_by(evaluate_on: evaluate_on
                                                  user_id: current_user.id)
    # TODO
    @condition.motivation = motivation
    @condition.evaluation = evaluation
      # binding.pry
    @condition.save

    # if @condition.new_record?
    # @condition = Condition.new(motivation: motivation,
    #                           evaluation: evaluation,
    #                           evaluate_on: evaluate_on)


    redirect_to("/conditions/index")

  end

  def show
    @condition = Condition.find_by(id: params[:id])
  end

  def edit
    # binding.pry
    @evaluate_day = Condition.find_by(id: params[:id]).evaluate_on.strftime("%Y-%m-%d")
    render("conditions/new")
  end

  def destroy
  end



  def update
  end

end
