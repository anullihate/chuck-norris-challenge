import { h } from 'vue'
import { createRouter, createWebHashHistory, RouteParams } from 'vue-router'
import Jokes from './pages/Jokes.vue'

export type AppRouteNames = 'home' | 'random'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      name: 'jokes',
      path: '/',
      component: Jokes,
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => {
        return h('h1', 'Page Not Found')
      },
    },
  ],
})

export function routerPush(
  name: AppRouteNames,
  params?: RouteParams
): ReturnType<typeof router.push> {
  if (params !== undefined) {
    return router.push({
      name,
      params,
    })
  } else {
    return router.push({ name })
  }
}
