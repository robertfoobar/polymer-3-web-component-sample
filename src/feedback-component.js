import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import "@polymer/polymer/polymer-legacy.js";

export class FeedbackComponent extends PolymerElement {

    constructor() {
        super();
    }
    static get template() {
        return html`
      <style>
        :host {
            width: 100%;
        }        
      </style>
      <div>Hello Safari 10</div>
    `;
    }

    static get properties() {
        return {};
    }

    ready() {
        super.ready();
        console.debug(`FeedbackComponent ready`);
    }
}

window.customElements.define('my-feedback', FeedbackComponent);