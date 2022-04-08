<template>
    <div id="app">
        <sc-header></sc-header>
        <div class="content-main">
            <transition v-bind:name="transitionName">
                <router-view></router-view>
            </transition>
        </div>
        <sc-footer></sc-footer>
    </div>
</template>

<script>
    import scHeader from './components/header/header';
    import scFooter from './components/footer/footer';

    export default {
        name: 'app',

        data: function data() {
            return {
                transitionName: 'slide'
            };
        },

        components: {
            scHeader: scHeader,
            scFooter: scFooter
        },

        beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
            const toDepth = to.path.split('/').length,
                fromDepth = from.path.split('/').length;

            this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';

            next();
        }
    };
</script>

<style src="./styles/less/main.less" lang="less"></style>
<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
