//Hàm getter là m?t store cho nh?ng tính toán các properties c?a component.
export const getters = {
    count: (state, getters, rootState) => {
        return state.products.length;
    },
    evenProducts: (state) => {
        return state.products.filter(x => x.id % 2 == 0);
    }
}