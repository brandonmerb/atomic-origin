import type { AtomicOriginModule } from "./types";
import type { AtomicSingularitySystem } from '@atomicdesign/atomic-singularity';
import { AbstractBaseNebula } from '@atomicdesign/atomic-singularity';

export class OriginNebula extends AbstractBaseNebula<AtomicOriginModule> {
  // Nebula used for logging
  constructor(app: AtomicSingularitySystem) {
    super(app, "Atomic Origin")
  }

  start(): void {
    this.nebulaLogger.system("Starting the real Origin Nebula")
  }
}