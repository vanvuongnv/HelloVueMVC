// component-loader.js
import Vue from 'vue';

import axios from 'axios';

import store from '../store/test/store';

//setup plugin
Vue.use({
    install(Vue) {
        Vue.prototype.$api = axios.create({
            baseURL: 'http://localhost:56548/',
            headers: {'Token-Id': 'xxx-yyy'}
        })
    }
})

//store


//components
import HelloWorld from './HelloWorld.vue';

const components = [
    {
        component: HelloWorld,
        element: 'hello-world'
    },
];

export default {
    loadComponents() {
        components.forEach(({ component, element }) => {
            // Is the custom element in the DOM?
            if (!document.querySelector(element)) {
                return;
            }

            // Create a new Vue instance and mount it to the custom element.
            new Vue({
                store,
                render: createElement => createElement(component)
            }).$mount(element);
        });
    }
}