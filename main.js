$(document).ready(function(){
  // odniesienia do identyfikatorów
  $("#box1").css('color','#008000');
  $("#box2").css('color','#6082B6');
  $("#box3").css('color','#A57C00');
  // odniesienia do klas
  $(".box").css('font-size','30px');
  // zczytywanie do konsoli
  console.log($("#box1").css('color'));
  console.log($(".box").css('font-size'));
  fun1();
  wypisz_lata();
});

function fun1(){
  console.log('Ten kod został wywołany za pomocą funkcji po wczytaniu dokumentu');
};
function fun2(){
  alert('Ta funkcja musi byc wywołana ręcznie.')
};

function kolor(kolor, local){
  $(local).css('color', kolor);
}

function wypisz_lata() {
  let lata = 8258;
  $('#liczba_lat').html(lata);
}

/*
document.addEventListener("DOMContentLoaded",function(event){
  let elem = document.getElementById("box1");
  elem.style.color = '#FE5A1D'
});
*/

/*
$('#box1').css('color','#FE5A1D');
document.write('Hello world1');
document.write('Hello world2');
*/

/*
$("#tu").html("Dakka dakka");
$(".tu2").html("More dakka");
*/
