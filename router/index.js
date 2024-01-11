import Vue from 'vue'
import Router from 'vue-router'

import { parseQuery } from './parseQuery'
import routes from './routes'
import { stringifyQuery } from './stringifyQuery'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    stringifyQuery,
    parseQuery,
    routes,
  })
}
