export default (request, { log }) => {
  const authorization = request.headers.get('authorization')
  // mock test .... if there is an authorization header we're okay
  if (!authorization)
    return new Response(`authorization failed`, { status: 401 })
}
