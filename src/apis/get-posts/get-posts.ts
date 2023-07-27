import axios from 'axios'

type Posts = {
  body: string
  id: number
  title: string
  userId: number
}

type GetPostsResponse = {
  data: Posts[]
}
export const getPosts = () => {
  return axios
    .get<GetPostsResponse>('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.data)
}
