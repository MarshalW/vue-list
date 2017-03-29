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
            loadNews(state,news) {
                state.news=news;
            }
        },
        actions: {
            loadNews(context) {
                axios.get('http://7d9ltk.com1.z0.glb.clouddn.com/data.json')
                    .then((response) => {
                        context.commit('loadNews', response.data.news);
                    })
            }
        }
    }),
    render: h => h(App)
});
