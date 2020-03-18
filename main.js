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
let helpObj = document.getElementById('help');
let homeObj = document.getElementById('home');
let soundPlayerObj = document.getElementById("soundPlayer");

ariObj.addEventListener('click', function () {
    swapZodInfo(1);
    playSomething('sounds/amazon.mp3');
}, false);

tauObj.addEventListener('click', function () {
    swapZodInfo(2);
    playSomething('sounds/iphone.mp3');
}, false);

gemObj.addEventListener('click', function () {
    swapZodInfo(3);
    playSomething('sounds/snapchat.mp3');
}, false);

canObj.addEventListener('click', function () {
    swapZodInfo(4);
    playSomething('sounds/twitter.mp3');
}, false);

leoObj.addEventListener('click', function () {
    swapZodInfo(5);
    playSomething('sounds/facebook.mp3');
}, false);

virObj.addEventListener('click', function () {
    swapZodInfo(6);
    playSomething('sounds/tesla.mp3');
}, false);

libObj.addEventListener('click', function () {
    swapZodInfo(7);
    playSomething('sounds/paypal.mp3');
}, false);

scoObj.addEventListener('click', function () {
    swapZodInfo(8);
    playSomething('sounds/lyft.mp3');
}, false);

sagObj.addEventListener('click', function () {
    swapZodInfo(9);
    playSomething('sounds/microsoft.mp3');
}, false);

capObj.addEventListener('click', function () {
    swapZodInfo(10);
    playSomething('sounds/netflix.mp3');
}, false);

aquObj.addEventListener('click', function () {
    swapZodInfo(11);
    playSomething('sounds/discord.mp3');
}, false);

pisObj.addEventListener('click', function () {
    swapZodInfo(12);
    playSomething('sounds/slack.mp3');
}, false);

helpObj.addEventListener('click', function () {
    swapZodInfo(13);
}, false);

homeObj.addEventListener('click', function () {
    swapZodInfo(14);
}, false);

function swapZodInfo(whichOne) {
    console.log('swap zod info called ' + whichOne);

    if (whichOne == 1) {
        showMeObj.innerHTML = "<strong> Jeff Bezos ... December 22 - January 19 </strong> <p>Jeff Bezos is the richest person on the planet, making $2,489 per second. He wrote the business plan for Amazon during a drive from New York to Seattle. Something Jeff firmly believes in is the Two Pizza Rule, which states that in in order to have a successful business venture, form small teams consisting of the number of people that can feed on two pizzas. </p>";
        heroObj.src = 'images/jeffbezos1.jpg';
        playSomething('sounds/amazon.mp3');
    } else if (whichOne == 2) {
        showMeObj.innerHTML = "<strong> Tim Cook ... November 22 - December 21 </strong> <p> Alongside being the CEO of Apple, Cook serves on the board of directors of the National Football Foundation and Nike, Inc. Cook lives his life without a fear of failing. He states if you start fearing things, then you won't try anything new or different.</p>";
        heroObj.src = 'images/timcook1.jpg';
        playSomething('sounds/iphone.mp3');
    } else if (whichOne == 3) {
        showMeObj.innerHTML = "<strong> Evan Spiegel ... October 23 - November 21 </strong> <p> Snapchat was originally a class project of Spiegel's at Stanford University. The original name of the technology was Picaboo. Spiegel dropped out to work on Picaboo, which later became Snapchat. Evan loves the party lifestyle, and has thrown large parties at his house since the beginning of high school. </p>"
        heroObj.src = 'images/evanspiegel1.jpg';
        playSomething('sounds/snapchat.mp3');
    } else if (whichOne == 4) {
        showMeObj.innerHTML = "<strong>Jack Dorsey ... September 23 - October 22 </strong> <p> In 2007 at the Southwest Festival, Dorsey fiercely promoted Twitter. After this one night, Twitter's popularity usage tripled with a growth rate of 1300%, a number most websites can only dream of. When Mark Zuckerberg offered to buy it out, Jack Dorsey and the team decided that they wanted to make it a legend of their own. </p>"
        heroObj.src = 'images/jackdorsey2.jpg';
        playSomething('sounds/twitter.mp3');
    } else if (whichOne == 5) {
        showMeObj.innerHTML = "<strong> Mark Zuckerberg ... August 23 - September 22 </strong> <p> Zuckerberg began inventing  when he was 12 years old, creating a messaging program ZuckNet so his dentist father could know when patients arrived. His house is powered by an AI butler with Morgan Freeman's voice. Facebook's logo is blue because Zuckerberg has red-green color blindness. </p>";
        heroObj.src = 'images/zuckerberg2.jpg';
        playSomething('sounds/facebook.mp3');
    } else if (whichOne == 6) {
        showMeObj.innerHTML = "<strong> Elon Musk ... July 23 - August 22 </strong> <p> Musk taught himself computer programming at the age of 9.  Musk received bachelors degrees from the University of Pennsylvania, he moved to California to study Physics at Stanford but dropped out after just two days and founded his first company, Zip2 Corporation. </p>";
        heroObj.src = 'images/elonmusk1.jpg';
        playSomething('sounds/tesla.mp3');
    } else if (whichOne == 7) {
        showMeObj.innerHTML = "<strong> Dan Schulman ... June 21 - July 22 </strong> <p> Schulman believes in the principle of never standing still. In business, standing still is a good way to embrace stagnancy, which is dangerous in fast-moving fields such as finance and tech. He one time spent 24 hours on the streets of New York City to get a better perspective of what it was like to be homeless. He serves on the board for Autism Speaks and has partnered with StandUp for Kids. </p>";
        heroObj.src = 'images/danschulman3.png';
        playSomething('sounds/paypal.mp3');
    } else if (whichOne == 8) {
        showMeObj.innerHTML = "<strong>Logan Green ... May 21 - June 20 </strong> <p> Despite being a founder of a successful ride sharing business, Green carpools to work in the morning and will usually take a lyft ride home. In the early days of the company, Green lived in a Silicon Valley space referred to as apartice because it served as both an apartment and office. He slept on a couch and survived off of Trader Joes microwaveable meals. </p>";
        heroObj.src = 'images/logangreen.jpg';
        playSomething('sounds/lyft.mp3');
    } else if (whichOne == 9) {
        showMeObj.innerHTML = "<strong> Satya Nadella ... April 20 - May 20 </strong> <p> Alongside being the CEO, Nadella is credited with leading the teams which developed Office 365, SkyDrive, Xbox Live and other Microsoft cloud-centric applications. He is a firm believer that if you are not learning new things, you stop doing great and useful things.  </p>";
        heroObj.src = 'images/nadella1.jpg';
        playSomething('sounds/microsoft.mp3');
    } else if (whichOne == 10) {
        showMeObj.innerHTML = "<strong> Reed Hastings ... March 21 - April 19 </strong> <p>  In the dark days of 2000, Hastings tried to sell Netflix to Blockbuster for $50 million but Blockbuster dismissed his offer. Lucky for him, Netflix has become the world's most popular media streaming and video-on-demand service provider and accounts for over 37% of all internet traffic in the time slot of 9pm to midnight in North America. </p>";
        heroObj.src = 'images/reedhastings.jpg';
        playSomething('sounds/netflix.mp3');
    } else if (whichOne == 11) {
        showMeObj.innerHTML = "<strong> Jason Citron ... February 19 - March 20 </strong> <p> Discord is a chatting server with a mission to  connect people to one another through their love of gaming. Discord recently took the step of integrating Spotify, so that its users could listen to music together. Citron feels some discomfort with describing Discord as a social platform, because the term evokes too many functions that Discord doesn't have. </p>";
        heroObj.src = 'images/jasoncitron.jpg';
        playSomething('sounds/discord.mp3');
    } else if (whichOne == 12) {
        showMeObj.innerHTML = "<strong> Stewart Butterfield ... January 20 - February 18 </strong> <p> Raised by hippie parents, Stewart's birthname was Dharma. He was among the pioneer cohort of children to grow up with a computer. Butterfield does not have any formal education in computer science, holding his B.A. and Masters in Philosophy. Butterfield has described Slack as a giant piece of sh*t and acknowledges his team has a long way to go. </p>";
        heroObj.src = 'images/stewartbutterfield1.jpg';
        playSomething('sounds/slack.mp3');
    } else if (whichOne == 13) {
        showMeObj.innerHTML = "<p> Click the calendar drop-down arrow and select your birthday. Then click 'GO!' and see who you match with as your Tech CEO Twin! You can also click on any of the zodiac computing clouds along the top of the page to explore others! </p>";
        heroObj.src = 'images/questionmark.png';
    } else if (whichOne == 14) {
        showMeObj.innerHTML = ""
        heroObj.src = 'images/questionmark.png';
    } else {
        console.log('Error in swapZodiacInfo');
    }
}

function playSomething(whichOne) {
    console.log('play something called ' + whichOne);
    soundPlayerObj.src = whichOne;
    soundPlayerObj.play();
}
