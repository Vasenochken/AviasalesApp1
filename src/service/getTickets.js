import { getResourcs } from './getResource'

export const getTickets = async (searchId) => {
  const url = new URL('https://aviasales-test-api.kata.academy/tickets')
  url.searchParams.set('searchId', searchId)
  try {
    const response = await getResourcs(url)
    const { tickets, stop } = response
    return { tickets, stop }
  } catch (error) {
    throw new Error('ErrorGetTickets', error)
  }
}
