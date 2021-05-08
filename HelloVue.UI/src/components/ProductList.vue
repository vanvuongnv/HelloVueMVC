<template>
    <div>
        <button @click="getProducts">Load products</button>
        <div v-if="products.length">
            <h1>All products</h1>
            <ul class="list">
                <li v-for="product in products" :key="product.name">
                    {{ product.name }}

                    <div v-if="product.inStock">In stock</div>
                    <div v-else>Not in stock</div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>

    import { mapGetters, mapActions, mapState } from 'vuex';

    export default {
        name: 'ProductList',
        computed: {
            ...mapGetters('products', [
                'count',
                'evenProducts'
            ]),
            ...mapState('products', [
                'products',
            ]),
        },
        methods: {
            ...mapActions('products',[
                'getProducts',
                'addProduct'
            ]),
        }
    }

</script>