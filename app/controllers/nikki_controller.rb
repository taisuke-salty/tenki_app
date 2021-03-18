class NikkiController < ApplicationController
  def index
    @date1 = Date.current.strftime("%Y/%m/%d")
    @evaluation = 3
    @motivation = 2
    cardDate = Date.new(2020,11,13).strftime("%Y/%m/%d")
    # @cardText ="昔の友だちとリモート飲み。懐かしくて楽しかったー。"
    # @cardEmt = 0

    @cardsHappy = [
      {
        cardDate: cardDate,
        cardText: "昔の友だちとリモート飲み。懐かしくて楽しかったー。",
        cardEmt: 0
      },{
        cardDate: cardDate,
        cardText: "テキスト2テキスト2テキスト2テキスト2テキスト2テキスト2",
        cardEmt: 0
      },{
        cardDate: cardDate,
        cardText: "テキスト3テキスト3テキスト3テキスト3テキスト3テキスト3",
        cardEmt: 0
      },{
        cardDate: cardDate,
        cardText: "テキスト4テキスト4テキスト4テキスト4テキスト4テキスト4",
        cardEmt: 0
      },{
        cardDate: cardDate,
        cardText: "テキスト5テキストテキストテキストテキストテキスト",
        cardEmt: 0
      },{
        cardDate: cardDate,
        cardText: "テキスト6テキストテキストテキスト",
        cardEmt: 0
      }
    ]

    @cardsGrad= [
      {
        cardDate: cardDate,
        cardText: "昔の友だちとリモート飲み。懐かしくて楽しかったー。",
        cardEmt: 1
      },{
        cardDate: cardDate,
        cardText: "テキスト2テキスト2テキスト2テキスト2テキスト2テキスト2",
        cardEmt: 1
      },{
        cardDate: cardDate,
        cardText: "テキスト3テキスト3テキスト3テキスト3テキスト3テキスト3",
        cardEmt: 1
      },{
        cardDate: cardDate,
        cardText: "テキスト4テキスト4テキスト4テキスト4テキスト4テキスト4",
        cardEmt: 1
      },{
        cardDate: cardDate,
        cardText: "テキスト5テキストテキストテキストテキストテキスト",
        cardEmt: 1
      }
    ]

    @cardsSad= [
      {
        cardDate: cardDate,
        cardText: "昔の友だちとリモート飲み。懐かしくて楽しかったー。",
        cardEmt: 2
      },{
        cardDate: cardDate,
        cardText: "テキスト2テキスト2テキスト2テキスト2テキスト2テキスト2",
        cardEmt: 2
      },{
        cardDate: cardDate,
        cardText: "テキスト3テキスト3テキスト3テキスト3テキスト3テキスト3",
        cardEmt: 2
      },{
        cardDate: cardDate,
        cardText: "テキスト4テキスト4テキスト4テキスト4テキスト4テキスト4",
        cardEmt: 2
      }
    ]
    @cardsAngry= [
      {
        cardDate: cardDate,
        cardText: "昔の友だちとリモート飲み。懐かしくて楽しかったー。",
        cardEmt: 3
      },{
        cardDate: cardDate,
        cardText: "テキスト2テキスト2テキスト2テキスト2テキスト2テキスト2",
        cardEmt: 3
      },{
        cardDate: cardDate,
        cardText: "テキスト3テキスト3テキスト3テキスト3テキスト3テキスト3",
        cardEmt: 3
      }
    ]
  end
end
