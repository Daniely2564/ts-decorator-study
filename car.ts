// Class Decorator

// Decorator Function For class
function Component(...functions: Function[]) {
  return (target: Function & typeof Car) => {
    for (let f of functions) f(target);
    target.prototype.id = 200;
  };
}

function SetNoOfCars(target: Function & typeof Car) {
  target.noOfCars = 3;
}

@Component(SetNoOfCars)
class Car {
  static noOfCars: number;
  id: string;

  printId(prefix: string = "") {
    console.log(prefix + this.id);
  }
}

console.log(new Car().id);
console.log(Car.noOfCars);
