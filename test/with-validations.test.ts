import test from "ava"
import { CreditCardModel } from "./credit-card"

test("default card state", t => {
  const card = CreditCardModel.create({})
  t.false(card.isValid)
  t.true(card.isInvalid)
  t.is(card.errors.name.length, 1)
  t.is(card.errors.numberAsDigits.length, 1)
  t.is(card.errors.securityCode.length, 2)
  t.is(card.errors.expiryMonth.length, 1)
  t.is(card.errors.expiryYear.length, 1)

  card.setName("Me")
  card.setNumber("4111 1111 1111 1111")
  card.setSecurityCode("123")
  card.setExpiryMonth(12)
  card.setExpiryYear(new Date().getFullYear() + 1)

  t.false(card.isInvalid)
  t.true(card.isValid)
  t.deepEqual(card.errors, {})
})
