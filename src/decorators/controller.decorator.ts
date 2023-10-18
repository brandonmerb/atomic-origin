import { Constructable, injectableMixin } from "@atomicdesign/atomic-singularity";
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
    // Wrap the class
    return injectableMixin(constructor);
  }
}