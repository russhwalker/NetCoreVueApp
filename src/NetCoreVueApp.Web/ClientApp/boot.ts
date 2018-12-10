import './css/site.css';
import 'bootstrap';
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes = [
    { path: '/', component: require('./components/home/home.vue.html') },
    { path: '/cars', component: require('./components/cars/cars.vue.html') },
    { path: '/caredit/:id', component: require('./components/caredit/caredit.vue.html') },
    { path: '/makes', component: require('./components/makes/makes.vue.html') },
    { path: '/makeedit/:id', component: require('./components/makeedit/makeedit.vue.html') },
    { path: '/models', component: require('./components/models/models.vue.html') },
    { path: '/modeledit/:id', component: require('./components/modeledit/modeledit.vue.html') }
];

new Vue({
    el: '#app-root',
    router: new VueRouter({ mode: 'history', routes: routes }),
    render: h => h(require('./components/app/app.vue.html'))
});