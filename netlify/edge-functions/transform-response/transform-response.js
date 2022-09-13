export default async (request, { log, next }) => {
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
  let page = null
  try {
    const response = await next()
    log({ response })

    page = await response.text()
    log({ page })
  } catch (error) {
    log(`next failed....${error.message}`)
  }

  const replace = /{{replace-me}}/g
  page = page.replaceAll(replace, replaceText)
  return new Response(page, response)
}
