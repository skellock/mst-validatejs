/**
 * Validates that 1 attribute doesn't appear in another's attributes content.
 *
 * @param value The value to test
 * @param options Validation options
 * @param key The key name we are validating
 * @param attributes The whole object we are validating
 */
export function excludes(value: any, options: any, key: string, attributes: any) {
  const list = attributes[options.attribute] || []

  if (value && list.indexOf(value) >= 0) {
    return options.message || `${value} is in the list`
  }
}
