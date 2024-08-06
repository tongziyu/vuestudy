<template>
  <div class="app">
    <p>我是App.vue12</p>
    <!-- 头部组件 -->
    <HmHeader></HmHeader>
    <!-- 主体组件-->
    <HmMain></HmMain>
    <!-- 底部组件  -->
    <HmFoot></HmFoot>
  </div>
</template>

<script>
// 导入头部
import HmHeader from "./components/HmHeader.vue"

// 导入主体
import HmMain from "./components/HmMain.vue"

// 导入底部
import HmFoot from "./components/HmFoot.vue"

export default {
  components: {
    // 自定组件名:组件对象
    "HmHeader": HmHeader,
    "HmMain": HmMain,
    "HmFoot": HmFoot
  }
}

</script>


<style>
.app{
  width: 600px;
  height: 700px;
  background-color: bisque;
  margin: 0 auto;
  padding: 20px;
}
</style>