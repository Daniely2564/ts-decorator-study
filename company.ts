// Parameter Decorator

/**
 * Parameter Decorator
 *
 * @param _target target object
 * @param propertyName function name
 * @param index index of the parameter
 */
function Param(_target: Object, propertyName: string, index: number) {
  console.log({ _target, propertyName, index });
}

class Company {
  run(@Param prefix: string, @Param wait: number) {
    console.log(prefix + "company is running");
  }
}

const company = new Company();
company.run("Prefix...", 500);
