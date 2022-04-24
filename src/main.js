import { createApp } from 'vue'
import App from '@/App'

import components from '@/components/ui/index'

import store from '@/store'
import router from '@/router/index'

import { VueMasonryPlugin } from "vue-masonry";

import '@/assets/styles/main.css'

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})

app
    .use(router)
    .use(store)
    .use(VueMasonryPlugin)
    .mount('#app')
