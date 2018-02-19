	  $( document ).ready(function() {

var num = Math.floor(Math.random() * (8 - 0 + 1)) + 0;

console.log(num);

$('button.play>i:eq('+num+')').show();

 });