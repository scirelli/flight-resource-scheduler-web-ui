// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
import router from './router';
import contentPlugin from './plugins/contentPlugin/contentPlugin';
import configPlugin from './plugins/configPlugin/configPlugin';

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(contentPlugin);
Vue.use(configPlugin);

const store = new Vuex.Store({
    state: {
    },
    mutations: {
    }
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router: router,
    store: store,
    filters: {
    },
    template: '<app></app>',
    components: {
        App: App
    },
    created: function beforeCreate() {
        window.document.title = Vue.translate('page-title');
    }
});
