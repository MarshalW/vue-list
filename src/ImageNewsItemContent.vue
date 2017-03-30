<template>
<div>
    <div class="news-title">{{news.title}} </div>
    <div> - image news</div>
    <img src="https://www.baidu.com/img/bd_logo1.png" style="height:100px;"/>
    <hr />
</div>
</template>
<script>
export default {
    props: ['news'],
}
</script>
