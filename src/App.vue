<template>
<div id="app">
    <div>
        <h2>新闻列表</h2>
        <button v-on:click="onReload">刷新</button>
        <div>
            <ul>
                <li v-for="item in news">
                    {{item.title}}
                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'app',
    computed: {
        news() {
            return this.$store.state.news;
        }
    },
    methods: {
        onReload: function() {
            this.$store.commit('loadNews');
        }
    },
    mounted: function() {
        this.onReload();
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
}

h1,
h2 {
    font-weight: normal;
}
</style>
