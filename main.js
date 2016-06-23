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
var operate = [''];
var oc = 0;

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
pointbtn.addEventListener('click', function(e) {
    num[counter] = num[counter] + e.srcElement.value;
    console.log(num[counter]);
});

//clearout stuff!

clearbtn.addEventListener('click', function() {
    num[counter] = '';
    clearOut();
});

function clearOut() {
    while (counter >= 0) {
        num[counter] = '';
        operate[oc] = 0;
        counter--;
        oc--;
    }
    counter++;
    oc++;
    final = 0;
}

//
plusbtn.addEventListener('click', function() {
    oc++;
    operate[oc] = 1;

    counter++;
    num[counter] = '';
});
minusbtn.addEventListener('click', function() {
    oc++;
    operate[oc] = 2;

    counter++;
    num[counter] = '';
});
multiplybtn.addEventListener('click', function() {
    oc++;
    operate[oc] = 3;

    counter++;
    num[counter] = '';
});
dividebtn.addEventListener('click', function() {
    oc++;
    operate[oc] = 4;

    counter++;
    num[counter] = '';
});


//calculations!

calculate.addEventListener('click', function() {
    for (i = 0; i <= oc; i++) {
        num[i] = Number(num[i]);
        if (i === 0) {
            final = num[i];
        } else
        if (operate[i] === 1) {
            final = final + num[i];
        } else if (operate[i] === 2) {
            final = final - num[i];
        } else if (operate[i] === 3) {
            final = final * num[i];
        } else if (operate[i] === 4) {
            final = final / num[i];
        }
    }

    console.log(final);
    clearOut();
    num[counter] = String(num[counter]);

});
