import { AtomicOriginRuntime } from "../runtime/main";
import { AtomicRouteDecoratorOptions } from "../types";

export function Get(args?: AtomicRouteDecoratorOptions) {
  AtomicOriginRuntime
    .instance()
    .runtimeLogger
    .system(`Registering route at base path: ${args?.url}`);
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    // console.log(Reflect.getMetadataKeys(descriptor));
    console.log(propertyKey);
    console.log(descriptor);
    console.log(descriptor.value());
  }
}
export function Post(args?: AtomicRouteDecoratorOptions) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  }
}
export function Delete(args?: AtomicRouteDecoratorOptions) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  }
}
export function Put(args?: AtomicRouteDecoratorOptions) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  }
}
export function Patch(args?: AtomicRouteDecoratorOptions) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  }
}
export function Options(args?: AtomicRouteDecoratorOptions) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  }
}