export default async (request, { log }) => {
  const url = new URL(request.url)
  const content = `${url.origin}/.netlify/functions/content`
  try {
    const data = await fetch(content, { headers: { authorization: 'hey up' } })
    if (data.ok) {
      const headers = [...data.headers.entries()]
        .map(([key, value]) => `  "${key}": "${value}"`)
        .join(`\n`)
      log(`headers: {\n${headers}\n}`)
      const json = await data.json()
      return new Response(`fetched [${json.msg}]`, {
        headers: { 'content-type': 'text/html' },
      })
    } else {
      throw Error(`fetch failed ${data.status}`)
    }
  } catch (error) {
    log(`fetch-content error! [${error.message}]`)
  }
}
