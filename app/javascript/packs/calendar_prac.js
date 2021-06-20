// JSの練習を兼ねたカレンダー描画
// Application.html.erbにid=calendar-pracのdiv要素を足し、それのHTML要素を書き換えるJSを書く。
// https://qiita.com/kan_dai/items/b1850750b883f83b9bee

// const { createElement } = require("react");

const weeks = ['日', '月', '火', '水', '木', '金', '土']
const date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
const config = {
  show: 3,
};


function showCalendar(year, month) {
  console.log("test1");
  for (i = 0; i < config.show; i++) {
    console.log("test i = " + i);
    const calendarHtml = createCalendar(year, month);
    // console.log(calendarHtml)
    const sec = document.createElement('section');
    sec.innerHTML = calendarHtml;
    // console.log(sec.innnerHTML)
    document.querySelector('#calendar-prac').appendChild(sec);

    // calendarHtmls += calendarHtml;

    month++
    if (month > 12) {
      year++;
      month = 1;
    }


    // console.log(calendarHtmls)
  }

}


function createCalendar(year, month) {
  const startDate = new Date(year, month -1 , 1);
  const endDate = new Date(year, month, 0);
  const startDay = startDate.getDay();
  const endDateCount = endDate.getDate();
  const lastMonthEndDate = new Date(year, month - 1, 0);
  const lastMonthEndDay = lastMonthEndDate.getDate();

  let dateCount = 1
  let calendarHtml = "";

  calendarHtml += "<h1>" + year + "/" + month + "</h1>";
  calendarHtml += "<table>";

  // 曜日行
    calendarHtml += "<tr>" ;
      for(let i = 0; i < 7; i++) {
        calendarHtml += "<td>" + weeks[i] + "</td>" ;
      }
    calendarHtml += "</tr>" ;

  // 日にち行
    for(let w = 0; w < 6; w++) {
      calendarHtml += "<tr>" ;

      for(let d = 0; d < 7; d++){
        if(w == 0 && d < startDay){
          let num = lastMonthEndDay - startDay + 1 + d;
          calendarHtml += '<td class="is-disabled">' + num + "</td>";
        } else if(dateCount > endDateCount){
          let num = dateCount - endDateCount
          calendarHtml += '<td class="is-disabled">' + num + "</td>";
          dateCount ++ ;
        } else {
          calendarHtml += '<td>' + dateCount +  "</td>";
          dateCount ++ ;
        }
      }

      calendarHtml += "</tr>" ;
    }

  calendarHtml += "</table>" ;

  return calendarHtml;
}

var moveCalendar =  (e) => {
  document.querySelector('#calendar-prac').innerHTML = "";

  if (e.target.id === "prev" ) {
    month--;
      if(month < 1) {
        year--;
        month = 12;
      }
  }

  if (e.target.id === "next") {
    month++;
      if (month > 12){
        year++;
        month = 1;
      }
  }

  showCalendar(year, month);
}

var onClickFunc = () => {
  document.querySelector('#prev').addEventListener('click', moveCalendar);
  document.querySelector('#next').addEventListener('click', moveCalendar);
}


// var renderCalender = () => {document.querySelector('#calendar-prac').innerHTML = showCalendar(year, month) }

// addEventListenerは、Lister（ = 渡す関数）に引数を直接渡す事ができない。関数そのものだけしか渡せない。
// 渡す場合はhandleEventとか言うのが必要らしい。
// そのため、今回は無名関数にshowCalendar(引数)を渡すことで対応したが、イベントの解除等が必要な場合はこの方法は使えないらしい。
window.addEventListener("load", function(){showCalendar(year, month)});
window.addEventListener("load", onClickFunc);