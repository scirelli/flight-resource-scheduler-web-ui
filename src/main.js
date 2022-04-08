// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import contentPlugin from './plugins/contentPlugin/contentPlugin';
import configPlugin from './plugins/configPlugin/configPlugin';
import store from './store';

Vue.config.productionTip = false;
Vue.use(contentPlugin);
Vue.use(configPlugin);

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
