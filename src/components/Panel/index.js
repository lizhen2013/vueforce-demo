import Panel from './src/main'

Panel.install = function (Vue) {
  Vue.component(Panel.name, Panel)
}

export default Panel
