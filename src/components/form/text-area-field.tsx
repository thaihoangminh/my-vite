import { UseFormRegisterReturn } from 'react-hook-form'
import clsx from 'clsx'

import { FieldWrapper, FieldWrapperPassThroughProps } from './field-wrapper'

type TextAreaFieldProps = FieldWrapperPassThroughProps & {
  className?: string
  registration: Partial<UseFormRegisterReturn>
}

export const TextAreaField = (props: TextAreaFieldProps) => {
  const { label, className, registration, error } = props
  return (
    <FieldWrapper label={label} error={error}>
      <textarea
        className={clsx(
          'block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm',
          className
        )}
        {...registration}
      />
    </FieldWrapper>
  )
}
