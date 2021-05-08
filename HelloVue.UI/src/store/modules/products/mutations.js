// Mutations l� c�c h�m d�ng ?? thay ??i gi� tr? c?a state.

import Vue from 'vue';

export const mutations = {
    setProducts(state, products) {
        Vue.set(state, 'products', products);
    },
    addProduct(state, product) {
        let products = state.products;
        products.push(product);

        //this.setProducts(state, products);
        Vue.set(state, 'products', products);
    }
};