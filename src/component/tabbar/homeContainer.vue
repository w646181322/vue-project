<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  
</script>

<style lang="scss" scoped>
  .mint-swipe{
    height: 200px;


    .mint-swipe-item:nth-child(1){
      background-color: red;
    }
    .mint-swipe-item:nth-child(2){
      background-color: yellow;
    }
    .mint-swipe-item:nth-child(3){
      background-color: cyan;
    }
  }
</style>