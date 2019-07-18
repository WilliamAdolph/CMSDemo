<template>
  <div class="index">
    <HeadNav></HeadNav>
    <div class="content">
      <LeftMenu></LeftMenu>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HeadNav from "../components/HeadNav"
import LeftMenu from "../components/LeftMenu"
export default {
  name: "index",
  components: {
    HeadNav,
    LeftMenu
  }  
}
</script>

<style>
  .content {
    display: flex;
    height: 100%;
  }
  .index {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>
