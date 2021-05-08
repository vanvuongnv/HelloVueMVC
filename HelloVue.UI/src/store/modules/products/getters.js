//H�m getter l� m?t store cho nh?ng t�nh to�n c�c properties c?a component.
export const getters = {
    count: (state, getters, rootState) => {
        return state.products.length;
    },
    evenProducts: (state) => {
        return state.products.filter(x => x.id % 2 == 0);
    }
}