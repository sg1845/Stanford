#!/usr/bin/env node

var fs = require('fs');
var outfile = "prime.txt";

// Find first 100 prime numbers via basic for loop
var firstkprime = function(k) {
     var i = 1;
     var arr = [];
     for (i = 1; i < k+1; i++) {
         arr.push(getPrimes(k,1));
     }
     return arr;
};

//print to console
var fmt = function(arr) {
    return arr.join(",");
};

var k = 550;
console.log(" " +getPrimes(550,1)+ " ");
console.log(fmt(getPrimes(550,1)));

fs.writeFileSync(outfile, getPrimes(550,1));

function getPrimes(max,min){
	var n= Math.floor(max);
	min= min|| 2;
	var notP= [1, 1];
	var pA= [], i, j;
	var limit= Math.sqrt(n)+1;
	for(j= 3; j<= limit; j= j+2){
		if(!notP[j]){
			for(i= j+j; i<= n; i= i+j) notP[i]= 1;
		}
	}
	i= min
	while(i< n){
		if(!notP[i] && i%2) pA[pA.length]= i;
		i+= 1;
	}
	if(min<= 2) pA.unshift(2);
	return pA;
}

