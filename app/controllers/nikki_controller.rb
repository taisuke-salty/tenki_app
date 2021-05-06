class NikkiController < ApplicationController
  def index



    @date1 = Date.current.strftime("%Y/%m/%d")
    @evaluation = 3
    @motivation = 2
    # cardDate = Date.new(2020,11,13).strftime("%Y/%m/%d")
    # @cardText ="昔の友だちとリモート飲み。懐かしくて楽しかったー。"
    # @cardEmt = 0

    @cardsHappy = [
      {
        cardDate: @date1,
        cardText: "昔の友だちとリモート飲み。懐かしくて楽しかったー。",
        cardEmt: 0
      },{
        cardDate: @date1,
        cardText: "テキスト2テキスト2テキスト2テキスト2テキスト2テキスト2",
        cardEmt: 0
      },{
        cardDate: @date1,
        cardText: "テキスト3テキスト3テキスト3テキスト3テキスト3テキスト3",
        cardEmt: 0
      },{
        cardDate: @date1,
        cardText: "テキスト4テキスト4テキスト4テキスト4テキスト4テキスト4",
        cardEmt: 0
      },{
        cardDate: @date1,
        cardText: "テキスト5テキストテキストテキストテキストテキスト",
        cardEmt: 0
      },{
        cardDate: @date1,
        cardText: "テキスト6テキストテキストテキスト",
        cardEmt: 0
      }
    ]

    @cardsGrad= [
      {
        cardDate: @date1,
        cardText: "昔の友だちとリモート飲み。懐かしくて楽しかったー。",
        cardEmt: 1
      },{
        cardDate: @date1,
        cardText: "テキスト2テキスト2テキスト2テキスト2テキスト2テキスト2",
        cardEmt: 1
      },{
        cardDate: @date1,
        cardText: "テキスト3テキスト3テキスト3テキスト3テキスト3テキスト3",
        cardEmt: 1
      },{
        cardDate: @date1,
        cardText: "テキスト4テキスト4テキスト4テキスト4テキスト4テキスト4",
        cardEmt: 1
      },{
        cardDate: @date1,
        cardText: "テキスト5テキストテキストテキストテキストテキスト",
        cardEmt: 1
      }
    ]

    @cardsSad= [
      {
        cardDate: @date1,
        cardText: "昔の友だちとリモート飲み。懐かしくて楽しかったー。",
        cardEmt: 2
      },{
        cardDate: @date1,
        cardText: "テキスト2テキスト2テキスト2テキスト2テキスト2テキスト2",
        cardEmt: 2
      },{
        cardDate: @date1,
        cardText: "テキスト3テキスト3テキスト3テキスト3テキスト3テキスト3",
        cardEmt: 2
      },{
        cardDate: @date1,
        cardText: "テキスト4テキスト4テキスト4テキスト4テキスト4テキスト4",
        cardEmt: 2
      }
    ]
    @cardsAngry= [
      {
        cardDate: @date1,
        cardText: "昔の友だちとリモート飲み。懐かしくて楽しかったー。",
        cardEmt: 3
      },{
        cardDate: @date1,
        cardText: "テキスト2テキスト2テキスト2テキスト2テキスト2テキスト2",
        cardEmt: 3
      },{
        cardDate: @date1,
        cardText: "テキスト3テキスト3テキスト3テキスト3テキスト3テキスト3",
        cardEmt: 3
      }
    ]
  end
end
