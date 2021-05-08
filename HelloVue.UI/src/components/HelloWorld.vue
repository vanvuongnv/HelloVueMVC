<template>
    <div>
        <h1 @click="helloFunc">Hello, world!</h1>
        <ul>
            <li v-for="item in items">{{item}}</li>
        </ul>
        <input v-model="fullName" />
        Hello: {{fullName}}

        <div id="test-store">
            Hello State: {{ count }}
            Counter: {{ count }} times, count is {{ evenOrOdd }}.
        </div>
        <div class="container">
            <div class="row text-center">
                <h3>Clicked: {{ count }} times, count is {{ evenOrOdd }}.</h3>
                <button class="btn btn-success" @click="increment">+</button>
                <button class="btn btn-danger" @click="decrement">-</button>
                <button class="btn" @click="incrementIfOdd">Increment if odd</button>
                <button class="btn" @click="incrementAsync">Increment async</button>
            </div>
        </div>
    </div>
    
</template>

<script>
    import { mapGetters, mapActions, mapState } from 'vuex';

    export default {
        name: 'HelloWorld',
        computed: {
            ...mapState('test', [
                'count',
            ]),
            ...mapGetters('test',[
                'evenOrOdd'
            ])
        },
        data: () => ({
            items: [],
            fullName:''
        }),        
        methods: {
            ...mapActions('test', [
                'increment',
                'decrement',
                'incrementIfOdd',
                'incrementAsync'
            ]),
            helloFunc: function () {
                this.$api.get('api/values/get-numbers')
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