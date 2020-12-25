const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'red';

function draw (x, y) {
    const circle = new Path2D();
    circle.arc(x, y, 25, 0, 2 * Math.PI);
    ctx.fill(circle);
}

let isMouseDown = false;

canvas.addEventListener ('mousedown', (e) => {
    isMouseDown = true;
});

canvas.addEventListener ('mouseup', (e) => {
    isMouseDown = false;
    console.log('mouseup');
});

canvas.addEventListener ('mousemove', (e) => {
    if (!isMouseDown) {
        return;
    }

    const {
        clientX, 
        clientY,
    } = e;
    
    const react = canvas.getBoundingClientRect();
    draw (clientX - react.left, clientY - react.top);
});

/*querySelectorAll => select all class or id or tag ~ same same getElementBy...*/
/*[...] => An array of all class 'color-picker' has been selected*/
// forEach => for each element in this array => click => change color.
const colorPickers = [ ... document.querySelectorAll('.color-picker')];
colorPickers.forEach (colorPickers => {
    colorPickers.addEventListener('click', (e) => {
        ctx.fillStyle = e.target.style.backgroundColor;
    });
});

var x = document.getElementById('clear');
x.addEventListener('click', () => {
    ctx.clearRect(0, 0, 600, 600);
});
