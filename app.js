// 1
function myFunction(a){
    if (a%2==0){
       return true;
    }else {
        return false;

    }

}

let func= myFunction(7);
// console.log(func);


// 2
function areaFunction(a,b){
    return a*b;

}

let area= areaFunction(8, 7);
// console.log(area);


// 3
function squareFunction(a){
    return a*a;

}
let square= squareFunction(8);
// console.log(square);


// 4
function randomFunction(a){
    return Math.floor(Math.random() * a);
    

}

let rand= randomFunction(100);
// console.log(rand);


// 5
let Obj = [
	{
		name: "mari",
		age: 19,
	},
	{
		name: "ani",
		age: 30,
	},
	{
		name: "nini",
		age: 7,
	},
	{
		name: "qeti",
		age: 67,
	},
	{
		name: "lia",
		age: 22,
	},
];


 let lowest = Obj.sort(function (a, b) {
        return a.age - b.age;
  });

//   console.log(lowest[0]);


// 6

function getCurrencySymbolFromCode (a){
    if (a=="USD"){
        return "$"
    }else if (a=="EUR"){
        return "€"
    }else if(a=="GEL"){
        return "ლ"
    }else{
        return "There is not symbol for this"
    }

}

let sym = getCurrencySymbolFromCode ("GEL")
// console.log(sym);









