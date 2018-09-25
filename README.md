# nuxt-polyfill-issue

```bash
git clone https://github.com/dweldon/nuxt-polyfill-issue.git
cd nuxt-polyfill-issue && npm i
npm start
```

Navigate to `http://localhost:3000/`

Ignore the `net::ERR_CONNECTION_REFUSED` error in the console. On IE11, this
will produce an error page stating that `Object.entries` is undefined.
