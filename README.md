# Bundling issue in vite

This repo reproduces an issue with vite and bundling.

Running things in development works fine:

```
% npm install
% npm run dev

% open http://localhost:4173/
```

The page loads with a bar chart without problems.

Running things in production fails


```
% npm run build
% npm run preview

% open http://localhost:4173/
```

```
Uncaught TypeError: qd(...).plot is not a function
    at index-VXnmyRUo.js:2:24227
```

If you open `src/main.ts` you can uncomment `// console.log(Plot.plot.prototype);`.
Doing this makes the production build work.

The Plot example was taken from https://observablehq.com/plot/getting-started#plot-in-vanilla-html
