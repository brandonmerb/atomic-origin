import { Constructable } from "@atomicdesign/atomic-singularity";
import { AtomicOriginRuntime } from "../runtime/main";

export interface ControllerArguments {
  name?: string;
  basePath?: string;
}

export function Controller(args?: ControllerArguments) {
  // console.log(args);
  AtomicOriginRuntime
    .instance()
    .runtimeLogger
    .system(`Registering controller at base path: ${args?.basePath}`);

  return function(constructor: Constructable) {
    //console.log(Reflect.getMetadataKeys(constructor));
    // console.log(Reflect.getMetadata("design:paramtypes", constructor));
    Reflect.getMetadata("design:paramtypes", constructor)
      .forEach((item: Constructable) => {
        console.log(`P: ${item.name}`);
        console.log(`P: ${item.toString()}`);
      });
    new constructor();
  }
}