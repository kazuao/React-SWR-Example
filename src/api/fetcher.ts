export const fetcher = <T>(url: string): Promise<T> => {
  return fetch(url).then((res) => {
    if (!res.ok) {
      throw new Error('An error occurred while fetching the data.')
    }
    return res.json()
  })
}
