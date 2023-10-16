import { Constructable } from "..";

export interface ControllerArguments {
  name?: string;
  basePath?: string;
}

export function Controller(args?: ControllerArguments) {
  console.log(args);
  return function(constructor: Constructable) {
    //console.log(Reflect.getMetadataKeys(constructor));
    // console.log(Reflect.getMetadata("design:paramtypes", constructor));
    Reflect.getMetadata("design:paramtypes", constructor)
      .forEach((item: Constructable) => {
        console.log(`P: ${JSON.stringify(item)}`);
      });
    new constructor();
  }
}