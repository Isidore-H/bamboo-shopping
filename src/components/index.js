import ImageView from './ImageView/index.vue'
import BbsSku from './BbsSku/index.vue'

const noop = [
  ImageView,
  BbsSku
]

export const componentPlugin = (app) => {
  noop.forEach((components) => {
    app.use(components)
  })
}
