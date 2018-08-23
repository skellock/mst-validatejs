import { IStateTreeNode } from "mobx-state-tree"
import { validate, ValidationErrors } from "./validate"

/**
 * Adds validation functionality to an MST model.
 *
 * @param constraints The validation constraints.
 */
export const withValidations = (constraints: any) => (self: IStateTreeNode) => {
  const getErrorsInception = (self as any).getErrors

  return {
    views: {
      /**
       * Performs validation. Use .errors instead.  It will call this one + cache the
       * dependencies in a beautiful mobx computed manner.
       */
      getErrors(): ValidationErrors {
        // get the composed errors
        const nestedErrors: ValidationErrors =
          (typeof getErrorsInception === "function" && getErrorsInception(self)) || {}

        // get our errors
        const myErrors: ValidationErrors = validate(constraints, self) || {}

        // now kith
        return { ...nestedErrors, ...myErrors }
      },

      /**
       * An object which may contain the list of errors.
       */
      get errors(): ValidationErrors {
        return (self as any).getErrors()
      },

      /**
       * Is this model error free?
       */
      get isValid() {
        return Object.keys((self as any).errors).length === 0
      },

      /**
       * Does this model have errors?
       */
      get isInvalid() {
        return Object.keys((self as any).errors).length > 0
      },
    },
  }
}
