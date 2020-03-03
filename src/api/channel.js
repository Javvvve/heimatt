import { Http } from '@/utils/http';

// 获取频道用户数据
export const getChannel = () => Http.get('/app/v1_0/user/channels');

export const getArticle = (channelId, withTop) => Http({
  url: '/app/v1_1/articles',
  method: 'get',
  params: {
    channel_id: channelId || 0,
    timestamp: Date.now(),
    with_top: withTop || 1,
  },
});
