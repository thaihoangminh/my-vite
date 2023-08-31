const storagePrefix = 'my_app_react_'

const storage = {
  getToken: () => {
    const token = window.localStorage.getItem(`${storagePrefix}token`) ?? ''
    return JSON.parse(token) as string
  },
  setToken: (token: string) => {
    window.localStorage.setItem(`${storagePrefix}token`, JSON.stringify(token))
  },
  clearToken: () => {
    window.localStorage.removeItem(`${storagePrefix}token`)
  },
}

export default storage
