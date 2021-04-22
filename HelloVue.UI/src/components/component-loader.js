// component-loader.js
import Vue from 'vue';
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
                render: createElement => createElement(component)
            }).$mount(element);
        });
    }
}