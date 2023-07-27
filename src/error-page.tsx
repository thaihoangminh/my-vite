import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

export const ErrorPage = () => {
  const error = useRouteError()
  console.log('error:', error)

  if (isRouteErrorResponse(error)) {
    if (error.status === 401) {
      // TODO: redirect to login page
    } else if (error.status === 404) {
      // TODO: redirect to 404 page
      return (
        <div id="error-page">
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>
            <i>{error.statusText}</i>
          </p>
        </div>
      )
    }

    return (
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access */}
        {error.data?.message && (
          <p>
            {/* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access */}
            <i>{error.data.message}</i>
          </p>
        )}
      </div>
    )
  } else if (error instanceof Error) {
    return (
      <div id="error-page">
        <h1>Oops! Unexpected Error</h1>
        <p>Something went wrong.</p>
        <p>
          <i>{error.message}</i>
        </p>
      </div>
    )
  } else {
    return <></>
  }
}
