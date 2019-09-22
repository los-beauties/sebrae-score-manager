import { set, toggle } from '@/utils/vuex'

export default {
  setDrawer: set('drawer'),
  setImage: set('image'),
  setColor: set('color'),
  setLogin: set('login'),
  setMoney: set('money'),
  setProduct: set('products'),
  toggleDrawer: toggle('drawer')
}
