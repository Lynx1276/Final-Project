console.log('hello ');

//object


//Factory Function
function createCircle(radius){
    return {
        radius,
       draw: function(){
        console.log('draw');
       }
    };
}


const circle = new createCircle(1);


// constructor function
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const another = new Circle(1);

let x= 10;
let y = x;

x = 20;

let itStudent  = {
    fname: "juan",
    mname: "d",
    lname: "jose"
}

console.log(itStudent.fname);
console.log(itStudent.mname);
console.log(itStudent.lname);

