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
var neg_posbtn = document.getElementById('negpos');

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
var viewStore = '';

function buttonTime(e) {
  num[counter] = num[counter] + e.srcElement.value;
  document.getElementById('view').value = viewStore + num[counter];
}
function keyTime(k) {
  num[counter] = num[counter] + k;
  document.getElementById('view').value = viewStore +num[counter];
}

onebtn.addEventListener('click', buttonTime);
twobtn.addEventListener('click', buttonTime);
threebtn.addEventListener('click', buttonTime);
fourbtn.addEventListener('click', buttonTime);
fivebtn.addEventListener('click', buttonTime);
sixbtn.addEventListener('click', buttonTime);
sevenbtn.addEventListener('click', buttonTime);
eightbtn.addEventListener('click', buttonTime);
ninebtn.addEventListener('click', buttonTime);
zerobtn.addEventListener('click', buttonTime);
pointbtn.addEventListener('click', buttonTime);

// document.addEventListener('keyup', function (e){
//     if (e.keyCode>=48 && e.keyCode<=57) {
//       var getValue = (48 - e.keyCode) * -1;
//       keyTime(getValue);}
// });

neg_posbtn.addEventListener('click', function(e) {
    var i = Number(num[counter]);
    if (i>0) {
        num[counter] = '-'+ num[counter];

    } else {
        num[counter] = String(num[counter]);
        num[counter] = num[counter].replace('-','');
    }
    console.log(num[counter]);
    document.getElementById('view').value = viewStore + num[counter];
});

clearbtn.addEventListener('click', function() {
    num[counter] = '';
    clearOut();
    document.getElementById('view').value = '';
});

function clearOut() {
    while (counter >= 0) {
        num[counter] = '';
        operate[oc] = 0;
        counter--;
        oc--;
    }
    counter++;
    oc = 0;
    final = 0;
    viewStore = '';
}

function nextNum() {

    counter++;
    num[counter] = '';
}

plusbtn.addEventListener('click', function() {
    oc++;
    operate[oc] = 1;
    viewStore = viewStore + num[counter] + '+';
    nextNum();
    document.getElementById('view').value = num[counter] + viewStore;
});
minusbtn.addEventListener('click', function() {
    oc++;
    operate[oc] = 2;
    viewStore = viewStore + num[counter] + '-';
    nextNum();
    document.getElementById('view').value = viewStore + num[counter];
});
multiplybtn.addEventListener('click', function() {
    oc++;
    operate[oc] = 3;
    viewStore = viewStore + num[counter] + '*';
    nextNum();
    document.getElementById('view').value = viewStore + num[counter];
});
dividebtn.addEventListener('click', function() {
    oc++;
    operate[oc] = 4;
    viewStore = viewStore + num[counter] + '/';
    nextNum();
    document.getElementById('view').value = viewStore + num[counter];
});

// NEW CALCULATOR GOD HELP US ALL

function calculateAll() {
  var holder = 0;
  for (i = 1; i <= oc; i++) {

      num[i]=Number(num[i]);

      if (operate[i] > 2) {

        if (operate[i]===3) {
            holder = num[(i-1)] * num[i];
        }   else if (operate[i]===4){
            holder = num[(i-1)] / num[i];
        }
        num[(i-1)] = holder;

        for (k = i; k <= (oc-1); k++) {
            num[k] = num[k+1];
            operate[k] = operate[k+1];
        }
        num[oc]='';
        operate[oc]=0;
        oc--;
        i--;
      }
  }

  final = Number(num[0]);

  for (i = 1; i <= oc; i++) {
    if (operate[i] === 1) {
      final = final + num[i];
    } else if (operate[i] === 2){
      final = final - num [i];
    }
  }

  document.getElementById('view').value = final;
  clearOut();
  num[counter] = '';

}

calculate.addEventListener('click', function() {
      calculateAll();
});
// document.addEventListener('keyup', function (e) {
//     if (e.keyCode===13) {
//       calculateAll();
//       }
// });
