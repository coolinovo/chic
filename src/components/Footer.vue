<template>
  <div class="footer">
    <div class="declare">
      <span>&copy; Chic | Powered by Lin</span>
      <a href="http://www.beian.miit.gov.cn/" class="policy"> 赣ICP备20001897号</a>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
  .footer {
    width: 100%;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;

    .declare {
      display: flex;
      justify-content: center;

      span {
        cursor: default;
        margin-right: .125rem;
      }

      .policy {
        color: #515a6e;
      }
    }
  }
</style>