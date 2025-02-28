const images=['../images/coffee-slider-1.png','../images/coffee-slider-2.png','../images/coffee-slider-3.png']
const h3s=['S’mores Frappuccino','Caramel Macchiato','Ice coffee']
const ps=['This new drink takes an espresso and mixes it with brown sugar and cinnamon before being topped with oat milk.','Fragrant and unique classic espresso with rich caramel-peanut syrup, with cream under whipped thick foam.','A popular summer drink that tones and invigorates. Prepared from coffee, milk and ice.']
const costs=['$5.50','$5.00','$4.50'];

const p = document.querySelector('.coffee .center-part p');
const title = document.querySelector('.coffee .center-part .title');
const cost = document.querySelector('.coffee .center-part .cost');
const img = document.querySelector('.coffee .center-part img');
const line_1 = document.querySelector('.coffee .slider .lines .line_1');
const line_2 = document.querySelector('.coffee .slider .lines .line_2');
const line_3 = document.querySelector('.coffee .slider .lines .line_3');
const lines = [line_1,line_2,line_3]

let i = 0;

document.querySelector('.coffee .slider .left').addEventListener('click', function () {
    if(i == 0) i = images.length - 1
    else i = i - 1 
    img.src = images[i];
    title.textContent = h3s[i];
    cost.textContent = costs[i];
    p.textContent = ps[i];

    for (let ind = 0; ind < lines.length; ind++) {
        lines[ind].style.background = (ind == i) ? '#665F55' : '#C1B6AD';
    }
});

document.querySelector('.coffee .slider .right').addEventListener('click', function () {
    if(i == images.length - 1) i = 0
    else i = i + 1
    img.src = images[i];
    title.textContent = h3s[i];
    cost.textContent = costs[i];
    p.textContent = ps[i];

    for (let ind = 0; ind < lines.length; ind++) {
        lines[ind].style.background = (ind === i) ? '#665F55' : '#C1B6AD';
    }
});

