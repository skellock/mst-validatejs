import { validators, validate as validateJS } from "validate.js"
import { excludes } from "./excludes"
import { tripped } from "./tripped"

// include some handy rules that don't come with validate.js
validators.excludes = excludes
validators.tripped = tripped

/**
 * Defines the rules for validating.
 *
 * Example:
 * ```ts
 * const RULES = {
 *   favoriteBand: {
 *     inclusion: { ['Weezer', 'Other'], message: 'Pick wisely.' }
 *   },
 *   name: {
 *     presence: { message: 'A developer has no name?' }
 *   }
 * }
 * validate(RULES, {})
 * ```
 *
 * See https://validatejs.org/#validators for more examples.
 *
 */
export interface ValidationRules {
  [key: string]: {}
}

/**
 * An object containing any errors found.
 *
 * Example:
 * ```js
 * {
 *   email: ['Invalid email address.'],
 *   password: [
 *     'Password must be 6 characters.',
 *     'Password must have at least 1 digit.'
 *   ]
 * }
 * ```
 */
export interface ValidationErrors {
  [key: string]: string[]
}

/**
 * Runs the given rules against the data object.
 *
 * @param rules The rules to apply.
 * @param data The object to validate.
 */
export function validate(rules: ValidationRules, data: {}): ValidationErrors {
  if (typeof data !== "object") {
    return {}
  }
  return validateJS(data, rules, { fullMessages: false }) || {}
}
