/**
 * Checks a boolean property to see if it is true. If so, this is an error.
 *
 * @param value The value to test
 * @param options Validation options
 * @param key The key name we are validating
 * @param attributes The whole object we are validating
 */
export function tripped(value: any, options: any, key: string, attributes: any) {
  if (value && attributes[options.attribute] === true) {
    return options.message || `${options.attribute} is true`
  }
}

