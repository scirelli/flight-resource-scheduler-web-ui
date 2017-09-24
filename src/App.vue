<template>
    <div id="app">
        <sc-header></sc-header>
        <div class="content-main">
            <router-view></router-view>
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
            return {};
        },
        components: {
            scHeader: scHeader,
            scFooter: scFooter
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
