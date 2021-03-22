<div class="evaluation-img-area">
<%= image_tag "happy1@2x.png", class:"evaluation-img" %>
</div>

<%= react_component("Evaluation") %>

render () {
  img1 = '/assets/happy1@2x.png'
  img2 = '/assets/happy2@2x.png'
  img3 = '/assets/happy3.png'
  img4 = '/assets/happy4.png'
  return (
    <React.Fragment>
        <div className="evaluation-img-area" >
          <img src={img1} className="evaluation-img" />
        </div>
    </React.Fragment>
  );
}

<div class="motivation-area">
<p class="index-title">モチベーション</p>
<div class="motivation-img-area">
  <%= image_tag  "motivated@2x.png", class:"motivation-img"  %>
  <%= image_tag  "motivated@2x.png", class:"motivation-img"  %>
  <%= image_tag  "not_motivated@2x.png", class:"motivation-img"  %>
  <%= image_tag  "not_motivated@2x.png", class:"motivation-img"  %>
</div>
</div>


<div class="card card-happy">
<div class="card-emotion emotion-happy">
  楽しい
</div>
<div class="card-day day-1">
  日時：2020/11/13
</div>
<div class="card-detail-title">詳細：</div>
<div class="card-detail-text text-card1">昔の友だちとリモート飲み。<br>懐かしくて楽しかったー。
</div>
</div>


, cardEmt: @cardEmt

<div className={'card ' + emts[1].cardCls}>
<div className={'card-emotion ' + emts[1].emtCls}>
  {emts[1].emtTxt}
</div>
<div className="card-day day-1">
  日時：{this.props.cardDate}
</div>
{/* reactでは改行＜br＞に特別な処理必要。今は改行を入れないようにする。 */}
<div className="card-detail-title">詳細：</div>
<div className="card-detail-text text-card1">
  {this.props.cardText}
</div>
</div>

<div class="card card-happy">
<div class="card-emotion emotion-happy">
  楽しい
</div>
<div class="card-day day-1">
  日時：2020/11/13
</div>
<div class="card-detail-title">詳細：</div>
<div class="card-detail-text text-card1">昔の友だちとリモート飲み。<br>懐かしくて楽しかったー。
</div>
</div>
<div class="card card-happy">
<div class="card-emotion emotion-happy">
  楽しい
</div>
<div class="card-day day-1">
  日時：2020/11/13
</div>
<div class="card-detail-title">詳細：</div>
<div class="card-detail-text text-card1">昔の友だちとリモート飲み。<br>懐かしくて楽しかったー。
</div>
</div>
<div class="card card-happy">
<div class="card-emotion emotion-happy">
  楽しい
</div>
<div class="card-day day-1">
  日時：2020/11/13
</div>
<div class="card-detail-title">詳細：</div>
<div class="card-detail-text text-card1">昔の友だちとリモート飲み。<br>懐かしくて楽しかったー。
</div>
</div>
<div class="card card-happy">
<div class="card-emotion emotion-happy">
  楽しい
</div>
<div class="card-day day-1">
  日時：2020/11/13
</div>
<div class="card-detail-title">詳細：</div>
<div class="card-detail-text text-card1">昔の友だちとリモート飲み。<br>懐かしくて楽しかったー。
</div>
</div>
<div class="card card-happy">
<div class="card-emotion emotion-happy">
  楽しい
</div>
<div class="card-day day-1">
  日時：2020/11/13
</div>
<div class="card-detail-title">詳細：</div>
<div class="card-detail-text text-card1">昔の友だちとリモート飲み。<br>懐かしくて楽しかったー。
</div>
</div>

<%= react_component("Card", cardDate: @cardDate, cardText: @cardText, cardEmt: @cardEmt) %>
<%= react_component("Card", cardDate: @cardDate, cardText: @cardText, cardEmt: @cardEmt) %>
<%= react_component("Card", cardDate: @cardDate, cardText: @cardText, cardEmt: @cardEmt) %>
<%= react_component("Card", cardDate: @cardDate, cardText: @cardText, cardEmt: @cardEmt) %>
<%= react_component("Card", cardDate: @cardDate, cardText: @cardText, cardEmt: @cardEmt) %>
<%= react_component("Card", cardDate: @cardDate, cardText: @cardText, cardEmt: @cardEmt) %>


<div class="card card-grad">
<div class="card-emotion emotion-grad">
  嬉しい
</div>
<div class="card-day day-1">
  日時：2020/11/13
</div>
<div class="card-detail-title">詳細：</div>
<div class="card-detail-text text-card1">昔の友だちとリモート飲み。<br>懐かしくて楽しかったー。
</div>
</div>
<div class="card card-grad">
<div class="card-emotion emotion-grad">
  嬉しい
</div>
<div class="card-day day-1">
  日時：2020/11/13
</div>
<div class="card-detail-title">詳細：</div>
<div class="card-detail-text text-card1">昔の友だちとリモート飲み。<br>懐かしくて楽しかったー。
</div>
</div>
<div class="card card-grad">
<div class="card-emotion emotion-grad">
  嬉しい
</div>
<div class="card-day day-1">
  日時：2020/11/13
</div>
<div class="card-detail-title">詳細：</div>
<div class="card-detail-text text-card1">昔の友だちとリモート飲み。<br>懐かしくて楽しかったー。
</div>
</div>
<div class="card card-grad">
<div class="card-emotion emotion-grad">
  嬉しい
</div>
<div class="card-day day-1">
  日時：2020/11/13
</div>
<div class="card-detail-title">詳細：</div>
<div class="card-detail-text text-card1">昔の友だちとリモート飲み。<br>懐かしくて楽しかったー。
</div>
</div>
<div class="card card-grad">
<div class="card-emotion emotion-grad">
  嬉しい
</div>
<div class="card-day day-1">
  日時：2020/11/13
</div>
<div class="card-detail-title">詳細：</div>
<div class="card-detail-text text-card1">昔の友だちとリモート飲み。<br>懐かしくて楽しかったー。
</div>
</div>
<div class="card card-grad">
<div class="card-emotion emotion-grad">
  嬉しい
</div>
<div class="card-day day-1">
  日時：2020/11/13
</div>
<div class="card-detail-title">詳細：</div>
<div class="card-detail-text text-card1">昔の友だちとリモート飲み。<br>懐かしくて楽しかったー。
</div>
</div>
