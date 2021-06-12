

window.addEventListener("load", () => {
  var btn = document.querySelector(".foo");
  var p = document.querySelector(".btnis");

  btn.addEventListener("click", () => {
    console.log("fooooooo");
    p.innerText = "クリックされた";
  });
});


