# mst-validatejs

Brings validation support to [mobx-state-tree](https://github.com/mobxjs/mobx-state-tree) powered by [validate.js](https://validatejs.org/).

# Requirements

- `mobx-state-tree` 2.x or 3.x
- `validate.js` >= 0.11

# Installing

```sh
yarn add mst-validatejs
```

# How To Use

This library offers a `withValidations` extension that you can use to extend your models giving it 3 new views:

- `.errors`
- `.isValid`
- `.isInvalid`

Using the `.extend` function on an `mst` model, you can add your validations in there. Check out the `test` directory here for a bigger example using credit cards.

```ts
import { types } from "mobx-state-tree"
import { withValidations } from "mst-validatejs"

export const UserModel = types
  .model("User")
  .props({
    name: "",
    age: 69,
  })
  .extend(
    // here we go!
    withValidations({
      name: {
        length: { minimum: 1, message: "name is required" },
      },
      age: {
        numericality: {
          onlyInteger: true,
          greaterThanOrEqualTo: 0,
          lessThan: 110,
          message: "liar",
        },
      },
    }),
  )
```

Find more about [validate.js](https://validatejs.org/), it's a pretty great library.

# Contributing?

Yes plz!

> Fork it, Clone it, Branch it, Yarn it
> Build it, Test it, Push it, PR it

To run the tests, I like to open two shells `yarn test:compile:watch` and `yarn ava --watch`.
