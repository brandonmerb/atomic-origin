import type { AtomicOriginModule } from "./types";
import { AbstractBaseGovernor } from '@atomicdesign/atomic-singularity';
import { ModuleLogService } from '@atomicdesign/atomic-singularity/logging';

export class OriginGovernor extends AbstractBaseGovernor<AtomicOriginModule> {
  // Governor used for logging
  private governorLogger: ModuleLogService = new ModuleLogService({name: "Origin Governor"})

  useModule(module: AtomicOriginModule): this {
    this.governorLogger.system("Do nothing for now");
    return this;
  }
  start(): void {
    this.governorLogger.system("Starting the real Origin Governor")
  }
}