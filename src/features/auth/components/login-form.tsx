import { Link } from 'react-router-dom'
import { z } from 'zod'

import { Button } from '@/components/elements'
import { Form, InputField } from '@/components/form'
import { useLogin } from '@/lib/auth'
import { routes } from '@/routes/routes'

const schema = z.object({
  identifier: z.string().min(1, 'Required'),
  password: z.string().min(1, 'Required'),
})

type LoginValues = {
  identifier: string
  password: string
}

type LoginFormProps = {
  onSuccess: () => void
}

export const LoginForm = ({ onSuccess }: LoginFormProps) => {
  const login = useLogin()

  return (
    <div>
      <Form<LoginValues, typeof schema>
        onSubmit={(values) => login.mutate(values, { onSuccess })}
        schema={schema}
      >
        {({ register, formState }) => (
          <>
            <InputField
              type='text'
              label='Username'
              error={formState.errors.identifier}
              registration={register('identifier')}
            />
            <InputField
              type='password'
              label='Password'
              error={formState.errors.password}
              registration={register('password')}
            />
            <div>
              <Button isLoading={login.isLoading} type='submit' className='w-full'>
                Log in
              </Button>
            </div>
          </>
        )}
      </Form>
      <div className='mt-2 flex items-center justify-end'>
        <div className='text-sm'>
          <Link to={routes.register} className='font-medium text-blue-600 hover:text-blue-500'>
            Register
          </Link>
        </div>
      </div>
    </div>
  )
}
