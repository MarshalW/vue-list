<template>
<div id="app">
    <div>
        <h2>新闻列表</h2>
        <button @click="onRefresh">刷新</button>
        <div>
            <ul>
                <li v-for="item in news">
                    <NewsItem :news="item" />
                </li>
            </ul>
        </div>
    </div>
    <button @click="onInfinite">更多</button>
</div>
</template>

<script>
import NewsItem from './NewsItem.vue';

export default {
    name: 'app',
    computed: {
        news() {
            return this.$store.state.news;
        }
    },
    methods: {
        onRefresh: function() {
            this.$store.dispatch('refreshNews');
        },
        onInit:function() {
          this.$store.dispatch('initNews');
        },
        onInfinite:function(){
          this.$store.dispatch('infiniteNews');
        }
    },
    mounted: function() {
        this.onInit();
    },
    components:{
      NewsItem
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
