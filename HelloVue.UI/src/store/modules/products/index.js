import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';

const state = {
    products: [],
    status: null,
};

const namespaced = true;

export const products = {
    namespaced,
    state,
    getters,
    actions,
    mutations
};