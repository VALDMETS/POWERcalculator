var onebtn = document.getElementById('one');
var twobtn = document.getElementById('two');
var threebtn = document.getElementById('three');
var fourbtn = document.getElementById('four');
var fivebtn = document.getElementById('five');
var sixbtn = document.getElementById('six');
var sevenbtn = document.getElementById('seven');
var eightbtn = document.getElementById('eight');
var ninebtn = document.getElementById('nine');
var zerobtn = document.getElementById('zero');
var pointbtn = document.getElementById('point');
var neg_posbtn = document.getElementById('neg-pos');

var plusbtn = document.getElementById('plus');
var minusbtn = document.getElementById('minus');
var multiplybtn = document.getElementById('multiply');
var dividebtn = document.getElementById('divide');
var clearbtn = document.getElementById('clear');

var calculatebtn = document.getElementById('calculate');

var num = [''];
var counter = 0;

var final = 0;

onebtn.addEventListener('click', function(e) {
  num[counter] = num[counter] + e.srcElement.value;
  console.log(num[counter]);
});

twobtn.addEventListener('click', function(e) {
  num[counter] = num[counter] + e.srcElement.value;
  console.log(num[counter]);
});

threebtn.addEventListener('click', function(e) {
  num[counter] = num[counter] + e.srcElement.value;
  console.log(num[counter]);
});

fourbtn.addEventListener('click', function(e) {
  num[counter] = num[counter] + e.srcElement.value;
  console.log(num[counter]);
});

fivebtn.addEventListener('click', function(e) {
  num[counter] = num[counter] + e.srcElement.value;
  console.log(num[counter]);
});

sixbtn.addEventListener('click', function(e) {
  num[counter] = num[counter] + e.srcElement.value;
  console.log(num[counter]);
});

sevenbtn.addEventListener('click', function(e) {
  num[counter] = num[counter] + e.srcElement.value;
  console.log(num[counter]);
});

eightbtn.addEventListener('click', function(e) {
  num[counter] = num[counter] + e.srcElement.value;
  console.log(num[counter]);
});

ninebtn.addEventListener('click', function(e) {
  num[counter] = num[counter] + e.srcElement.value;
  console.log(num[counter]);
});

zerobtn.addEventListener('click', function(e) {
  num[counter] = num[counter] + e.srcElement.value;
  console.log(num[counter]);
});

//clearout stuff!

clearbtn.addEventListener('click', function(){
  num[counter] = '';
  clearOut ();
});

function clearOut() {
  while (counter >= 0) {
    num[counter] = '';
    counter--;
  }
  counter++;
  final = 0;
}


plusbtn.addEventListener('click', function() {
  counter++;
  num[counter] = '';
 });


//calculations!

 calculate.addEventListener('click', function(){
   for (cn = 0; cn<=counter; cn++){
     num[cn]=Number(num[cn]);
     final = final + num[cn];
     num[cn]=String(num[cn]);
   }
   console.log(final);
   clearOut();
   num[counter] = String(num[counter]);

 });
