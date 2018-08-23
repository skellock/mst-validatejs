import { ValidationRules } from "../src/validate"
import { luhn } from "./luhn"

const TODAY = new Date()
const THIS_YEAR = TODAY.getFullYear()

const RX_CC_DIGITS = /[0-9]{16}/

export const CreditCardValidations: ValidationRules = {
  name: {
    length: {
      minimum: 1,
      message: "name is required",
    },
  },
  numberAsDigits: {
    format: {
      pattern: RX_CC_DIGITS,
      message: function(value: string) {
        if (!RX_CC_DIGITS.test(value)) {
          return "card number must have 16 digits"
        }
        if (!luhn(value)) {
          return "invalid card number"
        }
      },
    },
  },
  securityCode: {
    length: {
      minimum: 3,
      message: "security code must be at least 3 characters",
    },
    numericality: {
      onlyInteger: true,
      greaterThan: 0,
      message: "invalid security code",
    },
  },
  expiryMonth: {
    numericality: {
      onlyInteger: true,
      greaterThan: 0,
      lessThan: 13,
      message: "invalid expiry month",
    },
  },
  expiryYear: {
    numericality: {
      onlyInteger: true,
      greaterThan: THIS_YEAR - 1,
      lessThan: THIS_YEAR + 11,
      message: "invalid expiry year",
    },
  },
}
