<template>
<div id="app">
    <scroller style="top: 10px" :on-refresh="refresh" :on-infinite="infinite" ref="my_scroller">
        <div v-for="item in news">
            <NewsItem :news="item" />
        </div>
    </scroller>
</div>
</template>

<script>
import Scroller from 'vue-scroller';
import NewsItem from './NewsItem.vue';

export default {
    name: 'app',
    computed: {
        news() {
            return this.$store.state.news;
        }
    },
    methods: {
        refresh: function() {
            this.$store.dispatch('refreshNews').then(() => {
                if (this.$refs.my_scroller)
                    this.$refs.my_scroller.finishPullToRefresh();
            });
        },
        init: function() {
            this.$store.dispatch('initNews').then(() => {
                this.$refs.my_scroller.resize();
            });

        },
        infinite: function() {
            setTimeout(() => {
                this.$store.dispatch('infiniteNews').then(() => {
                    if (this.$refs.my_scroller) {
                        let scroller = this.$refs.my_scroller;
                        setTimeout(() => {
                            scroller.finishInfinite(true);
                        }, 10);
                    }

                });
            }, 200);

        }
    },
    mounted: function() {
        this.init();
    },
    components: {
        NewsItem,
        Scroller
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

.news-title {
    font-weight: bolder;
}
</style>
