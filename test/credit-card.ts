import { types } from "mobx-state-tree"
import { withValidations } from "../src/with-validations"
import { CreditCardValidations } from "./credit-card.validations"

const RX_DIGITS_ONLY = /\D/g

export const CreditCardModel = types
  .model("CreditCard")
  .props({
    name: "",
    number: "",
    expiryMonth: 0,
    expiryYear: 0,
    securityCode: "",
  })
  .actions(self => ({
    setName(value: string) {
      self.name = value
    },
    setNumber(value: string) {
      self.number = value
    },
    setExpiryMonth(value: number) {
      self.expiryMonth = value
    },
    setExpiryYear(value: number) {
      self.expiryYear = value
    },
    setSecurityCode(value: string) {
      self.securityCode = value
    },
  }))
  .views(self => ({
    get numberAsDigits() {
      return self.number.replace(RX_DIGITS_ONLY, "")
    },
  }))
  .views(self => ({
    get maskedNumber() {
      if (self.numberAsDigits.length >= 4) {
        return `xxxxxxxxxxxx${self.numberAsDigits.slice(-4)}`
      }
      return ""
    },
  }))
  .extend(withValidations(CreditCardValidations))
