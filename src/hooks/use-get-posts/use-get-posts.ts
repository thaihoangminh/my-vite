import { useQuery } from '@tanstack/react-query'

import { getPosts } from '@/apis/get-posts'

export const useGetPosts = () =>
  useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
  })
