import { useQuery } from '@tanstack/react-query'

import { axios } from '@/lib/axios'

import { Team } from '../types'

type GetTeamsResponse = {
  roles: Team[]
}

type UseTeamsOptions = {
  enabled: boolean
}

const getTeams = async () => {
  const res = await axios.get<GetTeamsResponse>('/users-permissions/roles')
  return res.data.roles
}

export const useTeams = ({ enabled }: UseTeamsOptions) => {
  return useQuery({
    queryKey: ['teams'],
    queryFn: () => getTeams(),
    enabled,
  })
}
