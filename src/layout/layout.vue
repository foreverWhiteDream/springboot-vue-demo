<template>
<div>
  <!--    头-->
  <Header/>


  <!--    主体-->
  <div style="display: flex ">

    <!--  侧边栏-->
    <Aside/>

    <button-comp/>

    <!--  内容区域-->
    <router-view style="flex: 1"/>
  </div>
</div>
</template>

<script>

import Header from "@/components/Header";
import Aside from "@/components/Aside";

export default {
  name: "layout",
  components:{
    Header,
    Aside,
  }
}
</script>

<style scoped>

</style>