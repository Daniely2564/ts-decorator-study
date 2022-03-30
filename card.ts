// Method Decorator

/**
 * Method Decorator
 *
 * @param target current prototype object. Prototype of chain
 * @param propertyKey name of the function
 * @param propertyDescriptor Describes the method
 */
function ReadCardDecorator(
  target: Object,
  propertyKey: string,
  propertyDescriptor: PropertyDescriptor
) {
  console.log({ target });
  console.log({ propertyKey });
  console.log({ propertyDescriptor });
  propertyDescriptor.value = function (...args: any[]) {
    console.log({ args });
    return `Hello ${args}`;
  };
}

class ReadCard {
  cards: string[] = ["a1", "b"];

  @ReadCardDecorator
  printCards(prefix: string = "", rand: string) {
    return "random thing!!"; // if propertyDescriptor.value is set, this will be overwritten
  }
}

console.log(new ReadCard().printCards("These are the cards : ", "rand.."));
