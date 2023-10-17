import type { AtomicModuleInterface } from '@atomicdesign/atomic-singularity';
import type { RouteOptions } from 'fastify';

export type Constructable<Result = any> = new (...args: any[]) => Result;

// Method is autofilled by the method we're calling, so omit this
export type AtomicRouteOptions = Omit<RouteOptions, "method">;

export type AtomicRouteDecoratorOptions = Omit<AtomicRouteOptions, "handler">;

export interface AtomicOriginModule extends AtomicModuleInterface {
  /**
   * The controllers to instantiate
   */
  controllers?: Array<Constructable>;

  /**
   * Models to hook up to the ORM
   */
  models?: Array<Constructable>;
}