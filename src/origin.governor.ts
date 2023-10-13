import { AbstractBaseGovernor } from '@atomicdesign/atomic-singularity';
import type { AtomicOriginModule } from "./types";

export class OriginGovernor extends AbstractBaseGovernor<AtomicOriginModule> {
  useModule(module: AtomicOriginModule): this {
    console.log("Do nothing for now");
    return this;
  }
  start(): void {
    console.log("Starting the real Origin Governor")
  }
}