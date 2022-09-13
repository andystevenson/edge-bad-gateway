const { builder } = require('@netlify/functions')
async function handler() {
  const date = new Date()
  return {
    statusCode: 200,
    body: `on-demand-content @${date.toLocaleTimeString()}`,
    ttl: 120,
  }
}

exports.handler = builder(handler)
