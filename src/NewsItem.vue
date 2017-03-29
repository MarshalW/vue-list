<script>
import TextNewsItemContent from './TextNewsItemContent.vue';
import ImageNewsItemContent from './ImageNewsItemContent.vue';
export default {
    props: ['news'],
    render: function(createElement) {

        let content;
        switch (this.news.type) {
          case 'text':
            content=TextNewsItemContent;
            break;
          case 'image-1':
            content=ImageNewsItemContent;
            break;
          default:
            content=TextNewsItemContent;
        }

        return createElement(content, {
            props: {
                news: this.news
            }
        });
    }
}
</script>

<style>

</style>
