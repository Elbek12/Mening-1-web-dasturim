// let baho = 1;

// console.log(baho)

// if(baho === 5) {
// 	console.log("A'lo");
// }
// else if(baho === 4) {
// 	console.log("Yaxshi");
// }
// else if(baho === 3) {
// 	console.log("Qoniqarli");
// }
// else if(baho === 2) {
// 	console.log("Qoniqarsiz");
// }
// else if(baho === 1) {
// 	console.log("Yomon")
// }
// else {
// 	console.log("Bunday baho yo'q");
// }


//prompt

// let ism = prompt("ILtimos ismingizni kiriting");

// if(ism === "" || ism === "             "){
// 	console.log('Afsus, ismingizni kiritmadingiz !!!')
// }

// else{
// 	console.log('Salom', ism, "sizni saytda ko'rib turganimizdan xursadmiz");
// }

// let bal = +prompt("Iltimos balinggizni kiriting");
// let s = 'Sizning stipendiyangiz'
// let d = 'ming so\'m'
// if(bal >= 86 && bal <= 100){
// 	console.log(s + ' 800 ' + d);
// }
// else if(bal >= 71 && bal <= 81){
// 	console.log(s + ' 600 ' + d);
// }
// else if(bal >= 56 && bal <= 71){
// 	console.log(s + ' 300 ' + d);
// }
// else if(bal >= 0 && bal <= 56){
// 	console.log(s + ' 0 ' + d);
// }

// else {
// 	console.log('Bunday bal mavjud emas')
// }

// let a = 100000,
// 	b = 1000,
// 	c = 5000;
// let max = a
// if(a > b && a > c){
// 	max = a;
// }

// else if(b > a && b > c){
// 	max = b;
// }

// else {
// 	max = c;
// }

// console.log(max)



// let a = 15;

// if(a % 3=== 0 && a % 5 === 0)console.log('FizzBuzz')

// else if(a % 3 === 0) console.log('Buzz')

// else if(a % 5 === 0) console.log('Fizz')

// else{
// 	console.log("Bunday son bo'linmaydi")
// }


// let a = 'rgb(123, 100, 211)';
// let b = 100;
// let c = 211;
// console.log(Math.random()*255)

// let A = Math.round(Math.random()*255);
// let B = Math.round(Math.random()*255);
// let C = Math.round(Math.random()*255);

// let color = 'rgb('+A+','+B+','+C+')';

// console.log(color)




// let son = 10;

// console.log(son >= 0 && son++ )



/*Amaliy Ish*/


const box = document.getElementsByClassName('box')[0];

box.addEventListener('click' , function(){
	let a = Math.round(Math.random()*255),
		b = Math.round(Math.random()*255),
		c = Math.round(Math.random()*255);

	let color = 'rgb('+a+','+b+','+c+')';

	box.style.background = color;
})









