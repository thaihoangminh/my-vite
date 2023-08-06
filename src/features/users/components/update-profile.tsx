import { PencilIcon } from '@heroicons/react/24/solid'
import { z } from 'zod'

import { Button } from '@/components/elements'
import { Form, FormDrawer, InputField, TextAreaField } from '@/components/form'
import { UpdateProfileDTO, useUpdateProfile } from '@/features/users'
import { useUser } from '@/lib/auth'

const schema = z.object({
  email: z.string().min(1, 'Required'),
  firstName: z.string().min(1, 'Required'),
  lastName: z.string().min(1, 'Required'),
  bio: z.string(),
})

export const UpdateProfile = () => {
  const { data } = useUser()
  const updateProfileMutation = useUpdateProfile()

  return (
    <FormDrawer
      isDone={updateProfileMutation.isSuccess}
      triggerButton={
        <Button startIcon={<PencilIcon className='h-4 w-4' />} size='sm'>
          Update Profile
        </Button>
      }
      title='Update Profile'
      submitButton={
        <Button
          form='update-profile'
          type='submit'
          size='sm'
          isLoading={updateProfileMutation.isLoading}
        >
          Submit
        </Button>
      }
    >
      <Form<UpdateProfileDTO['data'], typeof schema>
        id='update-profile'
        onSubmit={async (values) => {
          await updateProfileMutation.mutateAsync({ data: values })
        }}
        options={{
          defaultValues: {
            firstName: data?.firstName,
            lastName: data?.lastName,
            email: data?.email,
            bio: data?.bio,
          },
        }}
        schema={schema}
      >
        {({ register, formState }) => (
          <>
            <InputField
              label='First Name'
              error={formState.errors['firstName']}
              registration={register('firstName')}
            />
            <InputField
              label='Last Name'
              error={formState.errors['lastName']}
              registration={register('lastName')}
            />
            <InputField
              label='Email Address'
              type='email'
              error={formState.errors['email']}
              registration={register('email')}
            />

            <TextAreaField
              label='Bio'
              error={formState.errors['bio']}
              registration={register('bio')}
            />
          </>
        )}
      </Form>
    </FormDrawer>
  )
}
