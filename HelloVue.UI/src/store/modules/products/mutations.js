// Mutations là các hàm dùng ?? thay ??i giá tr? c?a state.

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