import {Controller} from "@tsed/di";
import { PathParams } from "@tsed/platform-params";
import {Get, Returns, Summary} from "@tsed/schema";

@Controller("/hello-world")
export class HelloWorldController {
  @Get("/")
  get() {
    return "hello";
  }

  @Get("/resta/:x/y")
  @Summary("Resta de dos numeros dados")
  @(Returns(200).Description("Resta de números"))
  resta(@PathParams("x") x: number,
        @PathParams("y") y: number): number{
          try {
            return this.RestarNumeros(x, y);
          } catch (x) {
            x.status = 400;
            throw x;
          }
        }

  RestarNumeros(x: number, y: number){
    return x -y;
  }
}
