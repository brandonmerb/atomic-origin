export interface RestArguments {
  name?: string;
  path?: string;
}

export function Get(args?: RestArguments) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log(Reflect.getMetadataKeys(target));
  }
}
export function Post(args?: RestArguments) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  }
}
export function Delete(args?: RestArguments) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  }
}
export function Put(args?: RestArguments) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  }
}
export function Patch(args?: RestArguments) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  }
}
export function Options(args?: RestArguments) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  }
}