import { Spinner, Table } from '@/components/elements'
import { formatDate } from '@/utils/format'

import { useUsers } from '../api/get-users'
import { User } from '../types'

import { DeleteUser } from './delete-user'

export const UsersList = () => {
  const { isLoading, data } = useUsers()

  if (isLoading) {
    return (
      <div className='flex h-48 w-full items-center justify-center'>
        <Spinner size='lg' />
      </div>
    )
  }

  if (!data) return null

  return (
    <Table<User>
      data={data}
      columns={[
        {
          title: 'First Name',
          field: 'firstName',
        },
        {
          title: 'Last Name',
          field: 'lastName',
        },
        {
          title: 'Email',
          field: 'email',
        },
        {
          title: 'Role',
          field: 'role',
        },
        {
          title: 'Created At',
          field: 'createdAt',
          Cell({ entry: { createdAt } }) {
            return <span>{formatDate(createdAt)}</span>
          },
        },
        {
          title: '',
          field: 'id',
          Cell({ entry: { id } }) {
            return <DeleteUser id={id} />
          },
        },
      ]}
    />
  )
}
