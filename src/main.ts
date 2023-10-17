import "reflect-metadata";
import { AtomicOriginRuntime } from "./runtime/main";
import { Controller } from "./decorators/controller.decorator";
import { Get } from "./decorators/rest.decorator";
import { LogSystem } from "@atomicdesign/atomic-sdk/logging";

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
  constructor(
    public testService: TestService,
    public value: Something,
    public aClass: AClass
  ) {}

  @Get({url: "/test"})
  public testRoute(otherArg: string) {
    console.log("testroute called");
  }
}



console.log("About to serve");

app.listen({
  port: 8000
})