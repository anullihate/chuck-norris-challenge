## Installations

```bash
yarn
yarn dev
# if you dont have yarn
npm install
npm run dev

php artisan serve
```

## Client Diretory Structure

-   `/assets` styles and files resources
-   `/components`
    ├── `/Categories` categories list dropdown selection
    ├── `/JokesList` this is where the jokes are rendered
-   `/composables` for hooks and page hooks
    ├── `/useJokes.ts` hooks / logic for jokes Page
-   `/pages` page components for vue router routes
    ├── `/Jokes.vue` page component for Jokes (/) index endpoint
-   `/services` web api services that is used for calling http request to particular host
-   `/types` typescript types and types declarations
-   `/utils` utilities with request utilities wrapping Fetch API
-   `/App.vue` main app component
-   `/config.ts` configuration constants
-   `/main.ts` entry
-   `/router.ts` vue router entry

## Technology used

-   [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) (ES6+)
-   [Typescript](https://www.typescriptlang.org/)
-   [Vue3](https://v3.vuejs.org/) (One Piece)
-   [Vue Router](https://next.router.vuejs.org/) (v4)
-   [Vite](https://vitejs.dev/) Next Generation Frontend Tooling
-   [TailwindCSS](https://tailwindcss.com/)
-   [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
-   [Laravel](https://laravel.com/)
