<template>
  <header>
    <div class="container">
      <div class="sitename">
        <router-link :to="{path: '/'}">Coolin's Site</router-link>
      </div>
      <div class="right">
        <div class="nav-bar">
          <router-link
            href="javascript:void(0)"
            v-for="(nav, key) in navs"
            :key="key"
            :to="{path: nav.path}"
          >{{ nav.name }}</router-link>
        </div>
        <div class="nav-tool">
          <i-switch v-model="bgColor" @on-change="change" size="small" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navs: {
        posts: {
          name: "Posts",
          path: "/posts"
        },
        categories: {
          name: "Categories",
          path: "/categories"
        },
        tags: {
          name: "Tags",
          path: "/tags"
        },
        about: {
          name: "About",
          path: "/about"
        }
      },
      bgColor: false
    };
  },
  mounted() {
    this.theme()
    this.change()
  },
  methods: {
    theme() {
      const bgColor = localStorage.getItem('theme')
      console.log(bgColor)
      if (bgColor === 'true') {
        this.bgColor = true
      }
    },
    change() {
      localStorage.setItem('theme', this.bgColor)
      const body = document.getElementsByTagName('body')[0]
      const a = document.getElementsByTagName('a')
      if (this.bgColor) {
        body.style.backgroundColor = '#292a2d'
        body.style.color = '#a9a9b3'
        a.forEach(i => {
          i.style.color = '#a9a9b3'
        })
      } else {
        body.style.backgroundColor = ''
        body.style.color = ''
        a.forEach(i => {
          i.style.color = ''
        })
      }
    }
  }
};
</script>

<style lang="less" scoped>
header {
  width: 100%;
  height: 4rem;

  .container {
    max-width: 75rem;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;

    .sitename {
      font-size: 1.125rem;
      letter-spacing: .0625rem;
    }

    .right {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 30%;

      .nav-bar {
        width: 80%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        letter-spacing: .0625rem;
      }

      .nav-tool {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>