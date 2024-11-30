function dog(){
   let pet = document.getElementById('pet').src = "Img/dog.png";
    document.getElementById("dog").style.display = "block";
    document.getElementById("cat").style.display = "none";
}

function cat(){
   let pet = document.getElementById('pet').src = "Img/kitty.png";
    document.getElementById("cat").style.display = "block";
    document.getElementById("dog").style.display = "none";
}


function Animal(name, breed){
    this.name = name;
    this.breed = breed;
}

Animal.prototype.greet = function(){
    document.getElementById("talk").innerHTML = "Hello my name" + this.name + "and i am " + this.breed;
};

Animal.prototype.play = function(){
    document.getElementById("talk").innerHTML = "Yes";
}

function Dog(name, breed){
    Animal.call(this, name, breed);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.bark = function(){
    document.getElementById("talk").innerHTML = "woafffff";
    document.getElementById("pet").src = "Img/dog_stand.png";
};

Dog.prototype.sit = function(){
    document.getElementById("pet").src = "Img/running.png";
}


function Cat(name, breed){
    Animal.call(this, name, breed);
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.meow = function(){
    document.getElementById("talk").innerHTML = "meow";
    document.getElementById("pet").src = "Img/happy.png";
};

Cat.prototype.sit = function(){
    document.getElementById("pet").src = "Img/happy.png";
}


const myDog = new Dog("Aspin", "Adobo");
const myCat = new Cat("Pusacat", "siya");
