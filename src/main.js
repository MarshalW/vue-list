import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import App from './App.vue';

Vue.use(Vuex);

new Vue({
    el: '#app',
    store: new Vuex.Store({
        state: {
            news: []
        },
        mutations: {
            initNews(state, news) {
                state.news = news;
            },
            refreshNews(state, news) {
                let _news = news.concat(state.news);
                state.news = _news;
            },
            infiniteNews(state, news) {
                let _news = state.news.concat(news);
                state.news = _news;
            }
        },
        actions: {
            initNews(context) {
                axios.get('http://7d9ltk.com1.z0.glb.clouddn.com/init.json')
                    .then((response) => {
                        context.commit('initNews', response.data.news);
                    })
            },
            refreshNews(context) {
                axios.get('http://7d9ltk.com1.z0.glb.clouddn.com/refresh.json')
                    .then((response) => {
                        context.commit('refreshNews', response.data.news);
                    })
            },
            infiniteNews(context) {
                axios.get('http://7d9ltk.com1.z0.glb.clouddn.com/infinite.json')
                    .then((response) => {
                        context.commit('infiniteNews', response.data.news);
                    })
            }
        }
    }),
    render: h => h(App)
});
