// JSの練習を兼ねたカレンダー描画
// Application.html.erbにid=calendar-pracのdiv要素を足し、それのHTML要素を書き換えるJSを書く。
// https://qiita.com/kan_dai/items/b1850750b883f83b9bee

const weeks = ['日', '月', '火', '水', '木', '金', '土']
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const startDate = new Date(year, month -1 , 1);
const endDate = new Date(year, month, 0);
const startDay = startDate.getDay();
const endDateCount = endDate.getDate();
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
        calendarHtml += "<td></td>";
      } else if(dateCount > endDateCount){
        calendarHtml += "<td></td>";
      } else {
        calendarHtml += "<td>" + dateCount +  "</td>";
        dateCount ++ ;
      }
    }

    calendarHtml += "</tr>" ;
  }

calendarHtml += "</table>" ;

var renderCalender = () => {document.querySelector('#calendar-prac').innerHTML = calendarHtml}

window.addEventListener("load", renderCalender );