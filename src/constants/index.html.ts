export const getIndexHtml = (html: string) => {
    return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Vue in Express in Vue Example</title>
        <script type="importmap">
          {
            "imports": {
              "vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.js",
              "@reduxjs/vue-redux": "https://unpkg.com/@reduxjs/vue-redux@0.1.0/dist/esm/index.js",
              "@reduxjs/toolkit": "https://unpkg.com/@reduxjs/toolkit@2.2.7/dist/redux-toolkit.browser.mjs",
              "redux": "https://unpkg.com/redux@5.0.1/dist/redux.browser.mjs",
              "immer": "https://unpkg.com/immer@10.1.1/dist/immer.production.mjs",
              "redux-thunk": "https://unpkg.com/redux-thunk@3.1.0/dist/redux-thunk.mjs",
              "reselect": "https://unpkg.com/reselect@5.1.1/dist/reselect.browser.mjs"
            }
          }
        <\/script>
        <script type="module" src="/client.js"><\/script>
      </head>
      <body>
        <div id="app">${html}</div>
      </body>
    </html>
    `
}
