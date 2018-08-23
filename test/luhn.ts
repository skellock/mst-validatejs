/**
 * All credit cards have a formula for the numbers. They can be run thru
 * the Luhn algorithm to ensure they are valid.
 *
 * Modified from: https://gist.github.com/DiegoSalazar/4075533
 *
 * @param value the credit card number
 */
export function luhn(value: string): boolean {
  if (/[^0-9-\s]+/.test(value)) {
    return false
  }

  value = value.replace(/\D/g, "")

  var nCheck = 0
  var nDigit = 0
  var bEven = false

  for (var n = value.length - 1; n >= 0; n--) {
    var cDigit = value.charAt(n),
      nDigit = parseInt(cDigit)

    if (bEven) {
      if ((nDigit *= 2) > 9) nDigit -= 9
    }

    nCheck += nDigit
    bEven = !bEven
  }

  return nCheck % 10 == 0
}
