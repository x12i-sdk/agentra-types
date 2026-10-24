# @x12i/agentra-types usage example

Shared TypeScript types for Agentra.

This consuming application demonstrates **type and summarize application analytics events** using the published npm package, pinned to `0.1.0`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- Share event, scope and query types across analytics producers and consumers.
- Type dashboard and alert definitions against the common Agentra contracts.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/agentra-types)
- [Implementation monorepo](https://github.com/x12i/agentra)
- [Reviewed package source](https://github.com/x12i/agentra/tree/772e50e64925e6359e42172d4dcf11d4aa795763/packages/types)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.

## Type-contract consumption

The actual application record is in [`src/consumer.ts`](src/consumer.ts). `npm start` first runs the pinned TypeScript compiler against the installed package, including an intentional invalid assignment checked with `@ts-expect-error`, then executes the local fixture. This demonstrates type compatibility; it is not runtime validation of untrusted JSON or a live backend integration.
