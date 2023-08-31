import { ContentLayout } from '@/components/layout'
import { USER_ROLES } from '@/features/auth'
import { UsersList } from '@/features/users'
import { Authorization } from '@/lib/authorization'

export const Users = () => {
  return (
    <ContentLayout title='Users'>
      <div className='mt-4'>
        <Authorization
          forbiddenFallback={<div>Only admin can view this.</div>}
          allowedRoles={[USER_ROLES.ADMIN]}
        >
          <UsersList />
        </Authorization>
      </div>
    </ContentLayout>
  )
}
