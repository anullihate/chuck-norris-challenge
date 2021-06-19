import { request } from './index'

export const getRandomJoke = (params: {} = {}) => {
  return request.get('/jokes/random', {
    params,
  })
}

export const getJokesCategories = () => {
  return request.get('/jokes/categories')
}

export const searchJokes = (params: {} = {}) => {
  return request.get('/jokes/search', {
    params,
  })
}
