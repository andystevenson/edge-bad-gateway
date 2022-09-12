export default async (request, { log }) => {
  const url = new URL(request.url)
  const content = `${url.origin}/.netlify/functions/content`
  const data = await fetch(content, { headers: { authorization: 'hey up' } })
  const json = await data.json()
  return new Response(`fetched [${json.msg}]`, {
    headers: { 'content-type': 'text/html' },
  })
}
