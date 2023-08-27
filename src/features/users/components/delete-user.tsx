import { Button, ConfirmationDialog } from '@/components/elements'
import { useDeleteUser } from '@/features/users'
import { useUser } from '@/lib/auth'

type DeleteUserProps = {
  id: string
}

export const DeleteUser = ({ id }: DeleteUserProps) => {
  const { user } = useUser()
  const deleteUserMutation = useDeleteUser()

  if (user?.id === id) return null

  return (
    <ConfirmationDialog
      icon='danger'
      title='Delete User'
      body='Are you sure you want to delete this user?'
      triggerButton={<Button variant='danger'>Delete</Button>}
      confirmButton={
        <Button
          isLoading={deleteUserMutation.isLoading}
          type='button'
          className='bg-red-600'
          onClick={() => deleteUserMutation.mutate({ userId: id })}
        >
          Delete User
        </Button>
      }
    />
  )
}
