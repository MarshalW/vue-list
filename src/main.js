import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import App from './App.vue';

Vue.use(Vuex);

let start=0;
let end=0;

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
                        start=0;
                    })
            },
            refreshNews(context) {
                axios.get(`http://7d9ltk.com1.z0.glb.clouddn.com/refresh-start-${start}.json`)
                    .then((response) => {
                        context.commit('refreshNews', response.data.news);
                        if(response.data.news.length>0){
                            start++;
                        }
                    })
            },
            infiniteNews(context) {
                axios.get(`http://7d9ltk.com1.z0.glb.clouddn.com/infinite-end-${end}.json`)
                    .then((response) => {
                        context.commit('infiniteNews', response.data.news);
                        if(response.data.news.length>0){
                            end++;
                        }
                    })
            }
        }
    }),
    render: h => h(App)
});
