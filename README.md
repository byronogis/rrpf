# rrpf

[![NPM version](https://img.shields.io/npm/v/rrpf?color=a1b858&label=)](https://www.npmjs.com/package/rrpf)

Reliable relative path of the file

## Why

When i use `npx` to execute a '.js' file that contains references to files in relative path, file had been looking for based on the path where the `npx` is executed.

That's certainly not what I wanted, the path that based on '.js' file is what I expected.

## Install

```bash
npm i rrpf
```

## Usage

```js
// module
import rrpf from 'rrpf'
// or commonjs
const rrpf = require('rrpf')

rrpf('./path/to/file/foo.*')
```

## Example

```
|-- project
    |-- a.js
    |-- b.js
```

```js
// a.js
import rrpf from 'rrpf'

rrpf('./b.js') // /path/to/project/b.js
```

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/liamrad/static/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/liamrad/static/sponsors.svg'/>
  </a>
</p>

## License

[MIT](./LICENSE) License © 2022 [Liam Shi](https://github.com/liamrad)
