export default async (request, { log }) => {
  const url = new URL(request.url)
  const content = `${url.origin}/.netlify/functions/content`
  try {
    const data = await fetch(content, { headers: { authorization: 'hey up' } })
    if (data.ok) {
      const text = await data.text()
      return new Response(`fetched [${text}]`)
    } else {
      throw Error(`fetch-content failed ${data.status}`)
    }
  } catch (error) {
    log(`fetch-content error! [${error.message}]`)
  }
}
