(function() {
    'use strict';

    let signinTemplate = document.querySelector('#signin').import.querySelector('#signin'),
        signinView = document.importNode(signinTemplate.content, true);

    document.body.appendChild(signinView);
})();
