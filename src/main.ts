import "reflect-metadata";
import { fastify } from "fastify";
import { Controller } from "./decorators/controller.decorator";
import { Get } from "./decorators/rest.decorator";

const app = fastify();

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

  @Get({path: ""})
  public testRoute(otherArg: string) {

  }
}

console.log("About to server");

app.listen({
  port: 8000
})