import AppLogin from '~/components/auth/AppLogin'
import IndexPage from '~/pages/index'

export default [
  {
    path: '/',
    name: 'IndexPage',
    component: IndexPage,
  },
  {
    path: '/login',
    name: 'AppLogin',
    component: AppLogin,
  },
]
