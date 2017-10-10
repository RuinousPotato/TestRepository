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
  zmiennaData();
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

function zmiennaData(){
  $('#identyfikator').data('var1',4);

  let go1 = $('#identyfikator').data('var1');
  let go2 = $('#identyfikator').data('var2');
  let wynik = go1 + go2;
  $('#identyfikator').html('Wynik wynosi: ' + wynik);
  //alert('Wynik wynosi: ' + wynik);
}

function odczyt(){
  let imie = $('#imie').val();
  $('#wypiszImie').html('Twę imię, hrabio: ' + imie);
  //alert('Witaj, ' + imie);
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
