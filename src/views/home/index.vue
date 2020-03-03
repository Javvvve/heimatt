<template>
  <div>
    <router-view></router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item name="home" icon="home-o" to="./home">首页</van-tabbar-item>
      <van-tabbar-item name="comment" icon="comment-o" to="./comment">问答</van-tabbar-item>
      <van-tabbar-item name="video" icon="video-o" to="./video">视频</van-tabbar-item>
      <van-tabbar-item name="my" icon="setting-o" to="./my">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: this.$route?.path.split('/')[2] || 'home',
    };
  },
};
</script>

<style></style>
