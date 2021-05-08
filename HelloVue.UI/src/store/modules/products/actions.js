//Các hàm actions g?n gi?ng v?i hàm mutation, nh?ng chúng không làm thay ??i state
export const actions = {
    getProducts(context) {
        let products = [];
        products.push({ id: 1, name: 'product 1' });
        products.push({ id: 2, name: 'product 2' });
        products.push({ id: 3, name: 'product 3' });
        products.push({ id: 4, name: 'product 4' });

        context.commit('setProducts', products); //g?i hàm c?a mutation
    },
    addProduct(context, product) {
        context.commit('addProduct', product); //g?i hàm c?a mutation
    }
};