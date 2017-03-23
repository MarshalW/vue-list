<template>
<div id="app">
    <div>
        <span>用户名：</span><input v-model="userName" /><button v-on:click="onSubmit">提交</button>
    </div>
    <p>输入的内容是：{{userName}}</p>
</div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'app',
    data: function() {
        return {
            userName: ''
        };
    },
    methods: {
        onSubmit: function() {
            axios.get('http://7xr9y9.com1.z0.glb.clouddn.com/news-demo/news.json')
                .then((response) => {
                  alert(response.data.news[0].title);
                })
        }
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

h1,
h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}

button {
    margin-left: 2px;
}
</style>
