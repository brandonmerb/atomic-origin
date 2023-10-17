import { fastify, FastifyInstance, FastifyListenOptions } from "fastify";
import { AtomicRouteOptions } from "../types";
import { LoggerInterface, LoggingMiddleware } from "@atomicdesign/atomic-singularity";

export class AtomicOriginRuntime {
  private app: FastifyInstance;
  private static _instance: AtomicOriginRuntime;

  public runtimeLogger: LoggerInterface = LoggingMiddleware.instance.getLogger("Origin");

  constructor() {
    this.app = fastify();

    this.runtimeLogger.system("Starting fastify");
    AtomicOriginRuntime._instance = this;
  }

  public static instance() {
    if (this._instance == null){
      this._instance = new AtomicOriginRuntime();
    }
    return this._instance;
  }

  public get(options: AtomicRouteOptions) {
    this.app.get(options.url, options);
  }

  public post(options: AtomicRouteOptions) {
    this.app.get(options.url, options);
  }

  public put(options: AtomicRouteOptions) {
    this.app.get(options.url, options);
  }

  public patch(options: AtomicRouteOptions) {
    this.app.get(options.url, options);
  }

  public delete(options: AtomicRouteOptions) {
    this.app.get(options.url, options);
  }

  public use() {
  }

  public getApp(): FastifyInstance {
    return this.app;
  }

  public listen(args?: FastifyListenOptions): Promise<string> {
    return this.app.listen(args);
  }
}