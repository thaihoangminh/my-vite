import { useEffect } from 'react'
import type { StoryFn, StoryContext } from '@storybook/react'
export const DEFAULT_THEME = 'light'

export const withTailwindTheme = (Story: StoryFn, context: StoryContext) => {
  const { theme } = context.globals

  useEffect(() => {
    // @ts-ignore
    const htmlTag = document.documentElement

    // Set the "data-mode" attribute on the iFrame html tag
    htmlTag.setAttribute('class', theme || DEFAULT_THEME)
  }, [theme])

  return <Story />
}
