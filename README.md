

## Create boilerplate using Vite
- npm create vite@latest

## Add Tailwindcss to project
- npm install -D tailwindcss
- npx tailwindcss init

### Add following code freg to the tailwind.config.js
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Add this to the main css file
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Special features used

- Use @reduxjs/toolkit instead of redux
  - This is bit simplify the redux use inside react
- Context API
- Custome hooks
- API calls
- Tailwinds css
