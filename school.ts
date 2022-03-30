// Property Decorator

/**
 *
 * @param target reflects the object
 * @param propertyName the name of the property
 */
function PropertyDecorator(target: Object, propertyName: string) {
  let value: string;
  const getter = () => {
    console.log("Getting value...");
    return value;
  };
  const setter = (newVal: string) => {
    console.log(`Setting value to ${newVal}`);
    value = newVal;
  };

  Object.defineProperty(target, propertyName, {
    get: getter,
    set: setter,
  });
}

class School {
  @PropertyDecorator
  name: string;
}

const school = new School();
school.name = "something";
console.log(school.name);
