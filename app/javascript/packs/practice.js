

// window.addEventListener("load", () => {
//   var btn = document.querySelector(".foo");
//   var p = document.querySelector(".btnis");

//   btn.addEventListener("click", () => {
//     console.log("fooooooo");
//     p.innerText = "クリックされた";
//   });
// });

// window.addEventListener("load", () => {
//   $("li").on("click", function(){
//     console.log(this.id);
//   });
// });

function changeSelect() {
  $("li").on("click", function(){
    $("li.selected").removeClass("selected");
    $(this).addClass("selected");
    $(".contents div").hide();
    $("." + this.id).show();
  });
};

// var changeVisible = () => {
//   $("li").on("click", function(){

//   });
// }
$(window).on("load", changeSelect);
// window.addEventListener("load", changeSelect );