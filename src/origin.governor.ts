import type { AtomicOriginModule } from "./types";
import type { AtomicSingularitySystem } from '@atomicdesign/atomic-singularity';
import { AbstractBaseGovernor } from '@atomicdesign/atomic-singularity';

export class OriginGovernor extends AbstractBaseGovernor<AtomicOriginModule> {
  // Governor used for logging
  constructor(app: AtomicSingularitySystem) {
    super(app, "Atomic Origin")
  }

  start(): void {
    this.governorLogger.system("Starting the real Origin Governor")
  }
}