export default (request, { log }) => {
  const authorization = request.headers.get('authorization')
  // mock test .... if there is an authorization header we're okay
  log(`authorization`)
  if (!authorization) {
    log(`authorization failed`)
    return new Response(`authorization failed`, {
      headers: { 'content-type': 'text/html' },
      status: 401,
    })
  }
}
