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
import axios from 'axios';

export default {
    name: 'app',
    data: function() {
        return {
            news:[]
        };
    },
    methods: {
        onReload: function() {
            axios.get('http://7xr9y9.com1.z0.glb.clouddn.com/news-demo/news.json')
                .then((response) => {
                  this.news=response.data.news;
                })
        }
    },
    mounted:function(){
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
