# react-classes

A simple JavaScript utility for conditionally joining classNames together.

Install with [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/):

npm:
```sh
npm install @lnked/react-classes --save
```

Yarn (note that `yarn add` automatically saves the package to the `dependencies` in `package.json`):
```sh
yarn add @lnked/react-classes
```

Use with [Node.js](https://nodejs.org/en/), [Browserify](http://browserify.org/), or [webpack](https://webpack.github.io/):

```js
import * as React from 'react'
import * as css from './styles.scss'

import { сlasses } from '@lnked/react-classes'

const cx = сlasses.bind(css)

export const Example = () => {
    return (
        <div className={cx({ layout: true })}>
            <div className={cx({ content: true }, css.exampleClass)}>example 1</div>
            <div className={cx({ content: true, add: 1 + 1 === 2 }, css.exampleClass)}>example 1</div>
        </div>
    )
}
```
