import store from '@/store'

const users = [
  {
    email: 'test@example.com',
    password: '123123'
  },
  {
    email: 'hello@world.com',
    password: 'helloworld'
  }
]

const AuthService = {
  login (payload) {
    return new Promise((resolve, reject) => {
      const user = users.find((x) => (x.email === payload.email) && (x.password === payload.password))
      if (user) {
        store.dispatch('setUser', user)
        resolve(user)
      } else {
        reject(new Error('Неверный логин или пароль.'))
      }
    })
  },
  requireAuth (to, from, next) {
    if (store.getters.isAuthorized) {
      next()
    } else {
      next({
        path: '/login',
        query: {next: to.fullPath}
      })
    }
  }
}

export default AuthService
