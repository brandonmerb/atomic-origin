/**
 * Argument decorators
 */

/**
 * Inject the request that was received by the server
 */
export function Request(target: any, propertyKey: string | undefined, parameterIndex?: number) {
  console.log(target);
  console.log(propertyKey);
  console.log(parameterIndex);
}