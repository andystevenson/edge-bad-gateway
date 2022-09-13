export default async (request, { log }) => {
  const url = new URL(request.url)
  const content = `${url.origin}/.netlify/functions/on-demand-content`
  try {
    const data = await fetch(content, { headers: { authorization: 'hey up' } })
    if (data.ok) {
      const text = await data.text()
      return new Response(`fetched on-demand-content [${text}]`)
    } else {
      throw Error(`fetch-on-demand-content failed ${data.status}`)
    }
  } catch (error) {
    log(`fetch-on-demand-content error! [${error.message}]`)
  }
}
