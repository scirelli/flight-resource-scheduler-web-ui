import content from '@/lib/contentService/contentService';

export default {
    /* eslint-disable no-param-reassign */
    install: function install(Vue) {
        Vue.translate = content.translate.bind(content);
        Vue.changeLocale = content.changeLocale.bind(content);

        Vue.filter('translate', content.translate.bind(content));
    }
    /* eslint-enable no-param-reassign */
};
