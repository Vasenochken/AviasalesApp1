import { getResourcs } from './getResource'

export const getSearchId = async () => {
  const url = new URL('https://aviasales-test-api.kata.academy/search')
  try {
    const response = await getResourcs(url)
    const { searchId } = response
    return await searchId
  } catch (error) {
    throw new Error('ErrorGetSearchID', error)
  }
}
