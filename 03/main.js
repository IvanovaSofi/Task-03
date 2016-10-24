"use strict";


var array = [{
        pancake: '1'
    }, {
        pancake: '1'
    }, {
        pancake: '1'
    }],
    queue1 = [],
    queue2 = [];

var i = 0,
    k = 0;
while (array[i].pancake != "111") {
    if (queue1.length != 0) {
      queue1.shift();
    }
    if (queue1.length == 0){
        queue1.push(array[i]);
        array[i].pancake = array[i].pancake + "1";
        i = i + 1;
        if (i => array.length-1) {
            i = 1;
        }
    }

    if (queue2.length != 0) {
      queue2.shift();
    }
    if (queue2.length == 0)
    {
        array[i].pancake = array[i].pancake + "1";
        queue2.push(array[i]);
    }
    if (i => array.length-1) {
        i = 1;
    }
    i = i + 1;
    k = k + 1;
}

console.log("Кол-во итераций " + k);
