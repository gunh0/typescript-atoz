# TypeScript A to Z

### Why TypeScript?

<p align="center">
    <img src="README.assets/intro1.png"/>
</p>

- JavaScript 에서는 동작하지 않았던 부분을  `Type` 정보를 제공함으로서 개발자를 보호함

  ```typescript
  [] + []; // JavaScript will give you "" (which makes little sense), TypeScript will error
  
  //
  // other things that are nonsensical in JavaScript
  // - don't give a runtime error (making debugging hard)
  // - but TypeScript will give a compile time error (making debugging unnecessary)
  //
  {} + []; // JS : 0, TS Error
  [] + {}; // JS : "[object Object]", TS Error
  {} + {}; // JS : NaN or [object Object][object Object] depending upon browser, TS Error
  "hello" - 1; // JS : NaN, TS Error
  
  function add(a,b) {
    return
      a + b; // JS : undefined, TS Error 'unreachable code detected'
  }

<br/>

<br/>

Install Typescript

```bash
npm i -g typescript

tsc --version
Version 4.9.3

ts-node hello.ts
```

<br/>

<br/>

##### Reference

- https://basarat.gitbook.io/typescript/

