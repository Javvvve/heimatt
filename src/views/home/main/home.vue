<template>
  <div class="home">
    <van-search v-model="value" shape="round" background="#3296fa" placeholder="请输入搜索关键词"
    class="searchBar"/>
    <van-tabs v-model="active" @change="channelChange" class="tabs">
      <van-tab v-for="(item, index) in channels" :key="index" :title="item.name" :name="item.id">
      </van-tab>
    </van-tabs>
    <van-pull-refresh v-model="listState.refreshing" @refresh="onRefresh">
    <van-list
      v-model="listState.loading"
      :finished="listState.finished"
      finished-text="没有更多了"
      @load="onLoad"
      offset="20"
      class="list"
    >
      <van-cell-group>
        <van-cell v-for="(item, index) in articleList" :key="index"
        :title="item.title" label="描述信息" />
      </van-cell-group>
    </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { getChannel, getArticle } from '@/api/channel';

export default {
  data() {
    return {
      value: '',
      active: '',
      channels: [],
      articleList: [],
      listState: {
        loading: false,
        finished: false,
        refreshing: false,
      },
    };
  },
  methods: {
    async getArticleList() {
      const res = await getArticle(this.active);
      if (res.data.data.results.length < 10) {
        this.listState.finished = true;
      }
      return res.data.data.results;
    },
    async onLoad() {
      const articleData = await this.getArticleList();
      this.articleList = [...this.articleList, ...articleData];
      this.listState.loading = false;
    },
    async onRefresh() {
      this.articleList = await this.getArticleList();
      this.listState.refreshing = false;
      this.listState.loading = false;
    },
    channelChange() {
      this.listState = {
        loading: false,
        finished: false,
        refreshing: false,
      };
      this.articleList = [];
      this.onLoad();
    },
  },
  async created() {
    const res = await getChannel();
    this.channels = res.data.data.channels;
    this.onLoad();
  },
};
</script>

<style lang="less" scoped>
    .searchBar{
        position: fixed;
        width: 100%;
        z-index: 10000;
    }
    .tabs{
        position: fixed;
        width: 100%;
        top: 54px;
        z-index: 9999;
    }
    .list{
        margin-top: 98px;
    }
</style>
