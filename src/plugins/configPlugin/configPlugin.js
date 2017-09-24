const config = require('@/appConfig');

export default {
    /* eslint-disable no-param-reassign */
    install: function install(Vue, optoins) {
        Vue.appConfig = Object.assign(config, optoins);
    }
    /* eslint-enable no-param-reassign */
};
