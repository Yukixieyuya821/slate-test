import Vue from 'vue'
import App from './App.vue'
import { SlatePlugin } from 'slate-vue';
Vue.use(SlatePlugin)
// import { SlatePlugin } from 'slate-vue';
// import { withHistory } from 'slate-history'

// Vue.use(SlatePlugin, {
//   editorCreated(editor) {
//     withHistory(editor)
//   }
// })

new Vue({
  el: '#app',
  render: (h) => h(App)
})
