const storagePrefix = 'my_app_react_'

const storage = {
  getToken: () => {
    return JSON.parse(
      window.localStorage.getItem(`${storagePrefix}token`) as string
    ) as string
  },
  setToken: (token: string) => {
    window.localStorage.setItem(`${storagePrefix}token`, JSON.stringify(token))
  },
  clearToken: () => {
    window.localStorage.removeItem(`${storagePrefix}token`)
  },
}

export default storage
