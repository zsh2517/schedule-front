import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import Schedule from "@/components/Schedule";
import Demo from "@/Demo";

Vue.config.productionTip = false
Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {path: '/schedule', component: Schedule},
        {path: '/demo', component: Demo}
    ],
})

new Vue({
    render: h => h(App),
    router
}).$mount('#app')
