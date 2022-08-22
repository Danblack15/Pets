import { createApp } from 'vue'
import App from '@/App'
import mitt from 'mitt'

import components from '@/components/ui/index'

import store from '@/store'
import router from '@/router/index'

import { VueMasonryPlugin } from "vue-masonry";
import VueMasonry from 'vue-masonry-css'

import '@/assets/styles/main.css'

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})

const emitter = mitt()

app.config.globalProperties.emitter = emitter

app
    .use(router)
    .use(store)
    .use(VueMasonryPlugin)
    .use(VueMasonry)
    .mount('#app')
