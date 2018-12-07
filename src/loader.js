/**
 * Takes care of loading es6 modules hosted on another location. Chooses between default JS module imports for modern browsers
 * or the esm-amd-loader way of importing modules for older browsers.
 */
(function () {
    
    const appendLegacyScript = () => {
        const defineScript = document.createElement('script');
        defineScript.innerHTML = `define([\'/es5/src/app.js\']);`;
        document.head.appendChild(defineScript);
    };

    const appendModernScript = () => {
        const script = document.createElement('script');
        script.src = '/es6/src/feedback-component.js';
        script.type = 'module';
        document.head.appendChild(script);
    };
    
    const waitForDefine = (callback) => {
        const timeout = 20000;
        const step = 100;
        let timePassed = 0;
        const interval = setInterval(() => {
            if (typeof window.define !== 'undefined') {
                clearInterval(interval);
                callback();
                return;
            }
            timePassed += step;
            if (timePassed >= timeout) {
                console.error(`Could not load web component script after ${timeout} ms. window.define is undefined`);
                clearInterval(interval);
            }
        }, step);
    };

    const load = () => {
        if ('registerElement' in document
            && 'import' in document.createElement('link')
            && 'content' in document.createElement('template')) {
            appendModernScript();
        } else {
            waitForDefine(appendLegacyScript);
        }
    };
    load();
})();
