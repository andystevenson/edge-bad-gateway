export default async (request, { log }) => {
  const url = new URL(request.url)
  const path = `${url.origin}/.netlify/functions/content`
  let replaceText = null
  try {
    const data = await fetch(path, { headers: { authorization: 'hey up' } })
    if (data.ok) {
      replaceText = await data.text()
    } else {
      replaceText = `fetch-content failed ${data.status}`
    }
  } catch (error) {
    replaceText = `fetch-content error! [${error.message}]`
  }

  log({ replaceText })
  const response = await context.next()
  log({ response })

  let text = await response.text()
  log({ test })

  const replace = /{{replace-me}}/g
  text = text.replaceAll(replace, replaceText)
  return new Response(text, response)
}