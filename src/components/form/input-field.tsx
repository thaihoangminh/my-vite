import { UseFormRegisterReturn } from 'react-hook-form'
import clsx from 'clsx'

import { FieldWrapper, FieldWrapperPassThroughProps } from './field-wrapper'

type InputFieldProps = FieldWrapperPassThroughProps & {
  type?: 'text' | 'email' | 'password'
  className?: string
  registration: Partial<UseFormRegisterReturn>
}

export const InputField = (props: InputFieldProps) => {
  const { type = 'text', label, className, registration, error } = props

  return (
    <FieldWrapper label={label} error={error}>
      <input
        type={type}
        className={clsx(
          'block w-full appearance-none rounded-md border border-gray-300 px-3 py-2.5 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm',
          !!error && 'border-red-500 text-red-500 focus:border-red-500 focus:ring-red-500',
          className
        )}
        {...registration}
      />
    </FieldWrapper>
  )
}
