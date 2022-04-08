import Vue from 'vue';
import Router from 'vue-router';
import landingPage from '@/components/landingPage/landingPage';
import Login from '@/components/login/Login';
// import calendar from '@/components/calendar/calendar';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'LandingPage',
            component: landingPage
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/calendar',
            name: 'Calendar',
            component: () => import(/* webpackChunkName: "calendar" */'@/components/calendar/calendar')
        }
    ]
});
