import ImageView from './ImageView/index.vue'
import BbsSku from './BbsSku/index.vue'
import Card from './Card/index.vue'

const noop = [
  ImageView,
  BbsSku,
  Card
]

export const componentPlugin = (app) => {
  noop.forEach((components) => {
    app.use(components)
  })
}
