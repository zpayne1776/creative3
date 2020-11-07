<template>
<div>
  <MemeList :memes="memes" />
  <div class="footer-container">
    <div class="footer">
      <a href="https://github.com/zpayne1776/creative3.git">Visit our Github Page!</a>
      <p>Josh King and Zach Payne</p>
      <p><em>Please Laugh</em></p>
    </div>
  </div>
</div>
</template>

<script>
import MemeList from "../components/MemeList.vue"
export default {
  name: 'Home',
  components: {
    MemeList
  },
  data() {
    return {
    }
  },
  computed: {
    memes() {
      return this.$root.$data.memes;
    }
  },
}
</script>

<style>
  .footer-container{
    display: flex;
    background-color: #00e3fc;
    height: 100px;
    width: 100%;
    align-items: center;
    justify-content: center;
    bottom: 0px;
    margin-bottom: 0px;
    margin-top: 20px;
    overflow: hidden;
    margin-top: auto;
  }

  .footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 0px;
  }

  .footer a { font-size: 16px; }
  .footer p { font-size: 14px; }
  .footer a,p {
    text-decoration: none;
    padding: 0px;
    margin: 0px;
    color: white;
  }
</style>
