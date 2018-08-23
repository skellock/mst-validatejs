import test from "ava"
import { tripped } from "../src/tripped"


test("won't trip if false", t => {
  const msg = tripped("x", { attribute: "y" }, "x", { y: false } )
  t.is(msg, undefined)
})

test("will trip if true", t => {
  const msg = tripped("x", { attribute: "y" }, "x", { y: true } )
  t.is(msg, "y is true")
})

test("returns custom message", t => {
  const msg = tripped("x", { attribute: "y", message: "hey" }, "x", { y: true } )
  t.is(msg, "hey")
})
