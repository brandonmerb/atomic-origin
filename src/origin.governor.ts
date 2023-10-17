import type { AtomicOriginModule } from "./types";
import { AbstractBaseGovernor } from '@atomicdesign/atomic-singularity';
import { LoggerInterface, LoggingMiddleware } from '@atomicdesign/atomic-singularity';

export class OriginGovernor extends AbstractBaseGovernor<AtomicOriginModule> {
  // Governor used for logging
  private governorLogger: LoggerInterface = LoggingMiddleware.instance.getLogger("Origin Governor");

  useModule(module: AtomicOriginModule): this {
    this.governorLogger.system("Do nothing for now");
    return this;
  }
  start(): void {
    this.governorLogger.system("Starting the real Origin Governor")
  }
}