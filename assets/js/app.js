

class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}

class Model extends Car {
  constructor(brand, model) {
    super(brand);
    this.model = model;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}

var myCar = new Model("Ford", "Mustang");
console.log(myCar.show());









function Animal(name) {
  this.name = name;
}
function Cat(mestan) {
  Animal.call(this, mestan);    
  

  this.color = "Sarı";
}

var Cat1 = new Cat("Mesi");
console.log(Cat1.name);   
console.log(Cat1.color); 
 

 
