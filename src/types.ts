import type { AtomicModuleInterface } from '@atomicdesign/atomic-singularity';

export type Constructable<Result = any> = new (...args: any[]) => Result;

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