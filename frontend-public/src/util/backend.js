import axios from 'axios'

export async function get(route) {
  const { data } = await axios.get(process.env.NEXT_PUBLIC_API_URL + route)

  return data
}
