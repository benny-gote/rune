console.log("gucci")

const t = document.getElementById("test");

const chars = [
  '\u16a0',
  '\u16a2',
  '\u16a6',
  '\u16a8',
  '\u16a9',
  '\u16ab',
  '\u16ac',
  '\u16ad',
  '\u16ae',
  '\u16af',

  '\u16b1',
  '\u16b2',
  '\u16b3',
  '\u16b4',
  '\u16b7',
  '\u16b9',
  '\u16ba',
  '\u16bb',
  '\u16bc',
  '\u16be',
  '\u16bf',

  '\u16c1',
  '\u16c3',
  '\u16c4',
  '\u16c5',
  '\u16c6',
  '\u16c7',
  '\u16c9',
  '\u16ca',
  '\u16cb',
  '\u16cc',
  '\u16ce',
  '\u16cf',

  '\u16d0',
  '\u16d2',
  '\u16d3',
  '\u16d6',
  '\u16d7',
  '\u16d8',
  '\u16da',

  '\u16e0',
  '\u16e1',
  '\u16e2',
  '\u16e3',
  '\u16e4',
  '\u16e6',
  '\u16e7',
  '\u16e8',
  '\u16e9'
];

function randomElement (arr){
    return arr[Math.floor(Math.random() * arr.length)];
}

//***********************************************************
//***********************************************************
//***********************************************************

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const width = canvas.width, height = canvas.height;

function rect(x,y,w,h){
  ctx.fillRect(x,y,w,h);
}

function Color(r,g,b,a){
  this.r = r;
  this.g = g;
  this.b = b;
  this.a = a;
  this.v = () => {
    return `rgba(${this.r},${this.g},${this.b},${this.a}%)`
  };
}

function random(a, b){
  return Math.random() * a + (b - a);
}

function Rune (x, y, z, value){
  this.x = x;
  this.y = y;
  this.z = z;
  this.speed = z/10;
  this.value = value;
  this.c = new Color(194, 250, 254, (this.z/maxZ) * 100 + 20);
  this.update = () => {
    this.x += this.speed;

    if(this.x >= width+20){
      this.value = randomElement(chars);
      this.x = -40;
    }
  };

  this.render = () => {
    ctx.fillStyle = this.c.v();
    ctx.font = `${this.z}px Helvetica`;
    ctx.fillText(this.value, this.x, this.y);
  };

}

let maxZ = 50

let runes = [];
for(let i = 0; i < 50; i++){
  runes.push(
    new Rune(
      Math.random()* width,
      Math.random()*height,
      random(40, maxZ),
      randomElement(chars))
    );
}

// ctx.fillStyle="#420057";
ctx.fillStyle="rgba(58, 32, 65, 1)"

rect(0,0,width,height)

setInterval(() => {
  ctx.fillStyle="rgba(58, 32, 65, 65%)";
  rect(0,0,width,height)

  // ctx.fillStyle="rgba(194, 250, 254, 1)";
  runes.forEach((item) => {
    item.update();
    item.render();
  })
}, 25)
