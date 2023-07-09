const { defineConfig } = require('cypress')

module.exports = defineConfig({
  numTestsKeptInMemory: 15,
  defaultCommandTimeout: 15000,
  baseUrlApi: 'https://www.purgomalum.com',
  chromeWebSecurity: false,
 // experimentalSessionAndOrigin: true,

  env: {
    language: 'en',
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
     // return require('./cypress/plugins/index.js')(on, config)
     on('before:run', (details) => {
      //
      console.log('Basic set up...')
     
    })
    },
    baseUrl: 'https://www.railbase.com',
    testIsolation: false // if caches is not shared across tests
  },
})
