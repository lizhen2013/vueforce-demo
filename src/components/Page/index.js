import Page from './src/main'

Page.install = function (Vue) {
  Vue.component(Page.name, Page)
}

export default Page
