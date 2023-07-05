export const getResourcs = async (url) => {
  try {
    const response = await fetch(url)
    const req = await response.json()
    return req
  } catch (error) {
    throw new Error('ErrorRequest: ', error)
  }
}
