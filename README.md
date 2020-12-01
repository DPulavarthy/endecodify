[![Kurasad#2521](https://img.shields.io/badge/Creator-Kurasad%232521-%23ff0092)](https://twitter.com/iKurasad) 

<p>
  <a href="https://github.com/DPulavarthy/endecodify" target="_blank">
    <img src="https://i.imgur.com/QIFginm.png" alt="Logo">
  </a>

  <h3 align="center"> 💠 Endecodify 💠 </h3>
  <p align="center">
    A very basic encoder & decoder for testing purposes
    <br />
    <a href="https://kura.gq"><strong> Visit the creator » </strong></a>
    <br />
    <br />
    <a href="https://support.jonin.gq"> Contact </a>
    ·
    <a href="https://github.com/DPulavarthy/endecodify/issues"> Report Bug </a>
    ·
    <a href="https://github.com/DPulavarthy/endecodify/issues"> Request Feature </a>
  </p>
</p>

## Installation
Install using npm
```
npm install endecodify
```

## Usage
Require the module
```js
// CASE I
let endecodify = require(`endecodify`)
endecodify.startup() // Parameters: [References] A boolean to control if references to this module should be made under "process".
// Checking process.argv only happens when the startup function is called
// Startup return an object with the status of the module

// CASE II
let { startup } = require(`endecodify`)
startup()

// CASE III
require(`endecodify`).startup() // I recommend this :)
```

## Examples
A few examples on the usage of this module
```js
// CASE I
require(`endecodify`).startup()

console.log(process.encode(`Hello World!`)) // Returns:
/*

{
  case: 'success',
  code: '200',
  data: '8x10iA 8x05M 8x10iN ... +45 strings'
}

*/
console.log(process.decode(`8x10iU 8x07Q 8x10iF 8x09j 8x10iU 8x07w 8x10iU 8x22iW`)) // Returns: 
/* 

{
  case: 'success',
  code: '200',
  data: 'hi'
}

*/
```

```js
// CASE II
let { startup, encode, decode } = require(`endecodify`)
startup(true) // Removes declarations under "process"

console.log(encode(`Hello World!`)) // Returns:
/*

{
  case: 'success',
  code: '200',
  data: '8x10iA 8x05M 8x10iN ... +45 strings'
}

*/

console.log(decode(`8x10iU 8x07Q 8x10iF 8x09j 8x10iU 8x07w 8x10iU 8x22iW`)) // Returns: 
/* 

{
  case: 'success',
  code: '200',
  data: 'hi'
}

*/
```

```
// CASE III
node . encode Hello World! // Returns [In Console]:
/*

{
  case: 'success',
  code: '200',
  data: '8x10iA 8x05M 8x10iN ... +45 strings'
}

*/
node . decode 8x10iU 8x07Q 8x10iF 8x09j 8x10iU 8x07w 8x10iU 8x22iW // Returns [In Console]:
/*

{
  case: 'success',
  code: '200',
  data: 'hi'
}

*/
```

## Possible Error Situations
Some errors that can possibly occur

```js
// CASE I
let { startup } = require(`endecodify`)
startup() // Returns { case: 'success', code: '200', message: 'Successfully setup' }
startup() // Returns throw new Error(`Setup function has already been called`)

// CASE II
let { startup, encode, decode } = require(`endecodify`)
encode("Hello World!") // Returns throw new Error(`Setup function has not been called`)

// CASE III
// Inputting unknown or broken values will throw an error defaulted by the process
```
