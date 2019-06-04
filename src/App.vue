<template>
  <div class="app-container">
    <!-- 顶部 Header 区域 -->
    <mt-header fixed title="固定在顶部"></mt-header>

    <!-- 中间的 路由 router-view 区域 -->
    <transition mode='out-in'>
      <router-view></router-view>
    </transition>

    <!-- 底部 Tabbar 区域 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item mui-active" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/number">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">精选</span>
      </router-link>
      <router-link class="mui-tab-item" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/person">
        <span class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label">个人中心</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
  .app-container{
    padding-top: 40px;
    overflow-x: hidden;
  }
  .v-enter{
    opacity: 0;
    transform: translateX(100%);
  }
  .v-leave-to{
    opacity: 0;
    transform: translateX(-100%);
  }

  .v-enter-active,
  .v-leave-active{
    transition: all 0.5s ease;
  }
</style>