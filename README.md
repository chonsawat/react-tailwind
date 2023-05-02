Installation
---
```bash
yarn create vite my-app --template react
cd my-app
```
```bash
yarn
```
``` bash
yarn add -D @emotion/styled autoprefixer postcss tailwindcss vite-plugin-babel-macros vite-plugin-env-compatible vite-plugin-windicss 
```
___

`tailwind.config.js`
---
```js
// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```
___
`vite.config.js`
---
```js
// vite.config.js

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import macrosPlugin from "vite-plugin-babel-macros";
import envCompatible from "vite-plugin-env-compatible";
import WindiCSS from "vite-plugin-windicss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), macrosPlugin(), envCompatible.default(), WindiCSS()],
});

```
___
`package.json`
---
``` json
{
    // Add to package.json
    ...,
    ...,
    ...,
    "babelMacros": {
        "twin": {
            "preset": "styled-components"
        }
    }
}
```