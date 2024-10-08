
let dogumYili = (Number)(prompt("Doğum yılını girin"));
let dogumAy = (Number)(prompt("Doğum ayını girin "));
let dogumGun = (Number)(prompt("Doğum gününü girin"));
let doğumdakikasi = (Number)(prompt("Doğum dakıkası girin"));

let gunumuz = new Date();
let şuankiYil = gunumuz.getFullYear() ;
let şuankiAy = gunumuz.getMonth() + 1; 
let şuankiGun = gunumuz.getDate() + 8; 
let şuankiDakika = gunumuz.getMinutes() + 40; 


let yil = şuankiYil - dogumYili;
let ay = şuankiAy - dogumAy;
let gun = şuankiGun - dogumGun;
let dakika =  şuankiDakika - doğumdakikasi;

alert (yil + " " + ay + " " + gun  + " " + dakika)




