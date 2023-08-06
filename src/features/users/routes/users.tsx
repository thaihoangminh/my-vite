import { ContentLayout } from '@/components/layout'
import { UsersList } from '@/features/users'
import { Authorization, ROLES } from '@/lib/authorization'

export const Users = () => {
  return (
    <ContentLayout title='Users'>
      <div className='mt-4'>
        <Authorization
          forbiddenFallback={<div>Only admin can view this.</div>}
          allowedRoles={[ROLES.ADMIN]}
        >
          <UsersList />
        </Authorization>
      </div>
    </ContentLayout>
  )
}
