import "reflect-metadata";

export function Controller(args?: {name?: string}) {
  console.log(args);
  return function(constructor: Function) {
    Reflect.getMetadataKeys(constructor);
    constructor();
  }
}