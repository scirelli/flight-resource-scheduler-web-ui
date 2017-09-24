import axios from 'axios';

const english = require('%/languages/en-US');

class Content {
    constructor() {
        this.content = english;
    }

    translate(id) {
        return this.content[id] || this.content.noContent || 'No content found.';
    }

    changeLocale(locale) {
        let self = this;

        return axios({
            method: 'GET',
            url: '/static/' + locale
        }).then(function success(response) {
            self.content = response.data || self.content;
        });
    }
}

export default new Content();
