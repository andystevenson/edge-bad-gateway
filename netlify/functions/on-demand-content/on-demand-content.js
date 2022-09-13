const { builder } = require('@netlify/functions')
async function handler() {
  return {
    statusCode: 200,
    body: 'on-demand-content content content',
  }
}

exports.handler = builder(handler)
