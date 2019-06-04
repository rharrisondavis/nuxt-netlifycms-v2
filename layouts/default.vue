<template>
  <div class="layout">
      <Thenavbar/>
      <Theheader/>
    <nuxt class="content" />

    <div class="footer">
     <Thefooter/>
    </div>
  </div>
</template>

<script>
import Theheader from '~/components/Theheader.vue'
import Thenavbar from '~/components/Thenavbar.vue'
import Thefooter from '~/components/Thefooter.vue'
export default {
  components: {
    Thenavbar,Thefooter,Theheader,
  }
}
</script>

<style>


.content {
  margin-top: 10px;
  margin-bottom: 10px;
}

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

a:link {
  color: #41b883;
}

a:visited {
  color: #3b8070;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
