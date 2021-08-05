import { h } from 'preact'
import render from 'preact-render-to-string'
import { html } from 'common-tags'
import express from 'express'
import App from '../pages/app'

const app = express()
const port = 3000

app.get('/', (_req, res) => {
  const jsx = render(<App />)

  const clientBundleScript = `<script src="http://localhost:8080/app.js"></script>`

  res.send(html`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <title>My SSR App</title>
      </head>
      <body>
        <div id="app">${jsx}</div>
        ${clientBundleScript}
      </body>
    </html>
  `)
})

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`)
})
