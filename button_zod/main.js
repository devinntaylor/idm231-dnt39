let heroObj = document.getElementById('hero');

let ariObj = document.getElementById('ari');
let tauObj = document.getElementById('tau');
let gemObj = document.getElementById('gem');
let canObj = document.getElementById('can');
let leoObj = document.getElementById('leo');
let virObj = document.getElementById('vir');
let libObj = document.getElementById('lib');
let scoObj = document.getElementById('sco');
let sagObj = document.getElementById('sag');
let capObj = document.getElementById('cap');
let aquObj = document.getElementById('aqu');
let pisObj = document.getElementById('pis');

ariObjObj.addEventListener('click', function () {
    swapZodInfo(1);
}, false);

tauObj.addEventListener('click', function () {
    swapZodInfo(2);
}, false);

gemObj.addEventListener('click', function () {
    swapZodInfo(3);
}, false);

canObj.addEventListener('click', function () {
    swapZodInfo(4);
}, false);

leoObj.addEventListener('click', function () {
    swapZodInfo(5);
}, false);

virObj.addEventListener('click', function () {
    swapZodInfo(6);
}, false);

libObj.addEventListener('click', function () {
    swapZodInfo(7);
}, false);

scoObj.addEventListener('click', function () {
    swapZodInfo(8);
}, false);

sagObj.addEventListener('click', function () {
    swapZodInfo(9);
}, false);

capObjObj.addEventListener('click', function () {
    swapZodInfo(10);
}, false);

aquObj.addEventListener('click', function () {
    swapZodInfo(11);
}, false);

pisObj.addEventListener('click', function () {
    swapZodInfo(12);
}, false);


function swapZodInfo(whichOne) {
    console.log('swap zod info called ' + whichOne);
    // swap out zodiac image 
    // swap out zodiac description with date range
    // play a zodiac sound 
    if (whichOne == 1) {
        heroObj.src = 'imgs/image1.jpg';
    } else if (whichOne == 2) {
        heroObj.src = 'imgs/image2.jpg';
    } else if (whichOne == 3) {
        heroObj.src = 'imgs/image3.jpg';
    } else {
        console.log('Error in swapZodiacInfo');
    }
}
