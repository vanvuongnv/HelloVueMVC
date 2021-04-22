<template>
    <div>
        <h1 @click="helloFunc">Hello, world!</h1>
        <ul>
            <li v-for="item in items">{{item}}</li>
        </ul>
    </div>
    
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'HelloWorld',
        data: () => ({
            items: []
        }),        
        methods: {
            helloFunc: function () {
                axios.get('api/values/get-numbers')
                    .then(res => {
                        console.log(res);
                        this.items = res.data;
                    })
                    .catch(err => {
                        console.log(err);
                    });
            }
        }
    }
</script>

<style lang="scss" scoped>
    h1 {
        color: red;
    }
</style>