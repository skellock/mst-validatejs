import test from "ava"
import { excludes } from "../src/excludes"

const SOME_LIST = ["one", "two", "three"]

test("not in the list", t => {
  const msg = excludes("x", { attribute: "y" }, "x", { y: SOME_LIST })
  t.is(msg, undefined)
})

test("in the list", t => {
  const msg = excludes("one", { attribute: "y" }, "x", { y: SOME_LIST })
  t.is(msg, "one is in the list")
})

test("returns custom message", t => {
  const msg = excludes("one", { attribute: "y", message: "hey" }, "x", { y: SOME_LIST })
  t.is(msg, "hey")
})
