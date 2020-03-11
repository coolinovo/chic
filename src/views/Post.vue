<template>
  <vueScroll>
    <div class="post">
    <div class="archives" v-for="item in archives" :key="item.id">
      <h3>{{ item.sequence }}</h3>
      <div class="archives-item" v-for="content in item.content" :key="content._id">
        <router-link :to="{path: `/posts/${content._id}`}">{{ content.name }}</router-link>
        <span>{{ content.create }}</span>
      </div>
    </div>
  </div>
  </vueScroll>
</template>

<script>
export default {
  data() {
    return {
      archives: [
        {
          sequence: '2019',
          content: [
            { _id: '123', name: 'MathJax Test', create: 'July 5, 2019' },
            { _id: '456', name: 'Hello World', create: 'July 11, 2019' },
            { _id: '789', name: '中文测试', create: 'July 5, 2019' },
            { _id: '000', name: 'Markdown Test', create: 'July 5, 2019' },
          ]
        },
        {
          sequence: '2018',
          content: [
            { _id: '123', name: 'MathJax Test', create: 'July 5, 2019' },
            { _id: '456', name: 'Hello World', create: 'July 11, 2019' },
            { _id: '789', name: '中文测试', create: 'July 5, 2019' },
            { _id: '000', name: 'Markdown Test', create: 'July 5, 2019' },
          ]
        },
        {
          sequence: '2017',
          content: [
            { _id: '123', name: 'MathJax Test', create: 'July 5, 2019' },
            { _id: '456', name: 'Hello World', create: 'July 11, 2019' },
            { _id: '789', name: '中文测试', create: 'July 5, 2019' },
            { _id: '000', name: 'Markdown Test', create: 'July 5, 2019' },
          ]
        },
        {
          sequence: '2018',
          content: [
            { _id: '123', name: 'MathJax Test', create: 'July 5, 2019' },
            { _id: '456', name: 'Hello World', create: 'July 11, 2019' },
            { _id: '789', name: '中文测试', create: 'July 5, 2019' },
            { _id: '000', name: 'Markdown Test', create: 'July 5, 2019' },
          ]
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
  .post {
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    // overflow-y: scroll;

    .archives {
      width: 40%;
      margin-top: 2.5rem;

      h3 {
        margin: 0.625rem 0;
        font-size: 1.375rem;
      }

      .archives-item {
        margin-left: 1.25rem;
        font-size: .9375rem;
        letter-spacing: .0625rem;
        display: flex;
        justify-content: space-between;
        padding: .5rem 0;

        span {
          color: #515a6e78;
        }
      }
    }
  }
</style>