/**
 * 
 * Note that this is only a script used for testing right now. It will not be included with anything
 * 
 */

import "reflect-metadata";
import { AtomicOriginRuntime } from "./runtime/main";
import { Controller } from "./decorators/controller.decorator";
import { Get } from "./decorators/rest.decorator";
import { LogSystem } from "@atomicdesign/atomic-sdk/logging";
import { Request } from './decorators/argument.decorator'
import { Inject, DI_METADATA_ATTRIBUTES } from "@atomicdesign/atomic-singularity";

LogSystem.
  instance
  .setLogLevel(-10);

const app = new AtomicOriginRuntime();

class TestService {
}
interface Something {
}
abstract class AClass {}

@Controller({name: "Something", basePath: "/api"})
class TestController {
  @Inject
  public otherProperty: string;

  constructor(
    @Inject
    public testService: TestService | null,
    @Inject
    public value: Something | null,
    @Inject
    public aClass: AClass | null,
    // @Request
    public tValue: string,
  ) {
    this.otherMethod(tValue);
  }

  public otherMethod(@Inject oneArg: string) {
    console.log(Reflect.getMetadata(DI_METADATA_ATTRIBUTES.methodsWithInjections, this))
  }

  @Get({url: "/test"})
  public testRoute(otherArg: string) {
    console.log("testroute called");
  }
}

new TestController(null, null, null, "this is unique-ish");


console.log("About to serve");

app.listen({
  port: 8000
})