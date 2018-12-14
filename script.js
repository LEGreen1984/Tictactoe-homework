$(function(){
  console.log("hello");
var $square = $("td");
var taken = false;
var player2 = false;
need = true
// var cross = $($square[]).addClass("X")
// $($square).addClass("X")
// $($square[0]).addClass("O")

// $square.addEventListener("click"{
//   console.log("I've been clicked")
// })

if (taken != true && player2 == false )
$($square[2]).on("click", function(){
$($square[2]).addClass("X");
 window['taken'] = true
 window['player2'] = true
 console.log(taken);
 console.log(player2);
});

if (taken != true && player2 == true )
$($square[2]).on("click", function(){
$($square[2]).addClass("O");
window['taken'] = true;
window['player2'] = false;
});

if (taken != true && player2 == false )
$($square[0]).on("click", function(){
$($square[0]).addClass("X");
 window['taken'] = true
 window['player2'] = true
 console.log(taken);
});

if (taken != true && player2 == true )
$($square[0]).on("click", function(){
$($square[0]).addClass("O");
window['taken'] = true;
window['player2'] = false;
});




  });
