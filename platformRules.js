// platformRules.js
const platformRules = [
// 社交平台
      { name: "微信公众号", domains: ["mp.weixin.qq.com"], params: ["__biz","mid","idx","sn","scene","subscene"], userPattern: /__biz=(\w+)/ },
      { name: "微博",          domains: ["weibo.com","weibo.cn"], params: ["from","is_hot","sudaref","retcode","type"], userPattern: /u\/(\d+)/ },
      { name: "抖音",          domains: ["douyin.com","iesdouyin.com"], params: ["utm_source","utm_campaign","share_token","udid","recommend_rank"], userPattern: /user\/(\w+)/ },
      { name: "小红书",        domains: ["xiaohongshu.com","red.com"], params: ["xhsshare","appuid","apptime","spm"], userPattern: /user\/profile\/(\d+)/ },
      { name: "快手",          domains: ["kuaishou.com","kwai.com"], params: ["utm_source","utm_medium","shareId","userId","area"], userPattern: /profile\/(\w+)/ },

      // 视频平台
      { name: "哔哩哔哩",      domains: ["bilibili.com","b23.tv"], params: ["from","seid","spm_id_from","vd_source","timestamp"], userPattern: /space\/(\d+)/ },
      { name: "优酷",          domains: ["youku.com"], params: ["spm","from","s","scm","timestamp"], userPattern: /u\/(\d+)/ },
      { name: "腾讯视频",      domains: ["v.qq.com"], params: ["ptag","from","vuid24","timestamp","url_from"], userPattern: /v\/(\w+)/ },
      { name: "爱奇艺",        domains: ["iqiyi.com"], params: ["vfm","fvp","from","s","timestamp"], userPattern: /u\/(\d+)/ },
      { name: "芒果TV",        domains: ["mangotv.com"], params: ["from","pt","sb","timestamp","access_token"], userPattern: /u\/(\d+)/ },

      // 电商平台
      { name: "淘宝",          domains: ["taobao.com","tmall.com"], params: ["spm","scm","utparam","from","buying"], userPattern: /user_id=(\d+)/ },
      { name: "京东",          domains: ["jd.com"], params: ["utm_source","utm_medium","utm_campaign","e","cu"], userPattern: /pin=([^&]+)/ },
      { name: "拼多多",        domains: ["pinduoduo.com"], params: ["pd_rd_w","pd_rd_r","utm_source","share_uid","timestamp"], userPattern: /u\/([^&]+)/ },
      { name: "美团",          domains: ["meituan.com"], params: ["utm_source","utm_medium","utm_term","ci","stid"], userPattern: /userid=(\d+)/ },
      { name: "唯品会",        domains: ["vip.com"], params: ["x-id","from","scene","s","sign"], userPattern: /user_id=(\d+)/ },

      // 资讯/工具平台
      { name: "今日头条",      domains: ["toutiao.com","ixigua.com"], params: ["utm_source","utm_medium","group_id","item_id","timestamp"], userPattern: /user_id=(\d+)/ },
      { name: "网易新闻",      domains: ["news.163.com"], params: ["from","w","h","refer","ver"], userPattern: /user\/(\d+)/ },
      { name: "百度搜索",      domains: ["baidu.com"], params: ["tn","ie","wd","oq","rn"], userPattern: /uid=([^&]+)/ },
      { name: "知乎",          domains: ["zhihu.com"], params: ["utm_id","from","utm_medium","utm_source","timestamp"], userPattern: /people\/([^\/]+)/ },
      { name: "GitHub",        domains: ["github.com"], params: ["utm_source","utm_medium","utm_campaign","tab","sort"], userPattern: /\/([^\/]+)$/ }
      { name: "微信小程序", domains: ["servicewechat.com"], params: ["scene","from","shareTicket"], userPattern: /path=pages\/(\w+)/ },
    { name: "QQ空间",      domains: ["qzone.qq.com"], params: ["g_f","from","subsource"], userPattern: /user\/(\d+)/ },
    { name: "网易云音乐",  domains: ["music.163.com"], params: ["from","type","id"], userPattern: /song\?id=(\d+)/ },
    { name: "豆瓣",        domains: ["douban.com"], params: ["from","start","limit"], userPattern: /people\/(\w+)/ },
    { name: "简书",        domains: ["jianshu.com"], params: ["utm_source","utm_medium","utm_campaign"], userPattern: /u\/(\w+)/ },

    // 电商与支付平台
    { name: "支付宝",      domains: ["alipay.com"], params: ["appId","bizNo","traceId"], userPattern: /orderId=(\w+)/ },
    { name: "京东金融",    domains: ["jr.jd.com"], params: ["channel","source","activityId"], userPattern: /product\/(\d+)/ },
    { name: "拼多多商家后台",domains: ["mms.pinduoduo.com"], params: ["logisticsId","orderSn","userId"], userPattern: /order\/detail\/(\d+)/ },
    { name: "苏宁易购",    domains: ["suning.com"], params: ["src","scm","spm"], userPattern: /shop_(\d+)/ },
    { name: "有赞商城",    domains: ["youzan.com"], params: ["kdt_id","spm","from=kdt"], userPattern: /goods\/(\d+)/ },

    // 工具与服务平台
    { name: "百度网盘",    domains: ["pan.baidu.com"], params: ["path","shareid","uk"], userPattern: /s\/1(\w+)/ },
    { name: "阿里云",      domains: ["aliyun.com"], params: ["spm","utm_source","productCode"], userPattern: /product\/(\w+)/ },
    { name: "腾讯云",      domains: ["cloud.tencent.com"], params: ["from=console","instanceId","projectId"], userPattern: /resource\/(\w+)/ },
    { name: "钉钉",        domains: ["dingtalk.com"], params: ["corpId","userId","taskId"], userPattern: /page\/(\w+)/ },
    { name: "飞书",        domains: ["feishu.cn"], params: ["app_id","tenant_id","view_id"], userPattern: /wiki\/(\w+)/ },

    // 出行与生活服务
    { name: "高德地图",    domains: ["amap.com"], params: ["from=webapp","poiid","shareid"], userPattern: /place\/(\w+)/ },
    { name: "美团外卖",    domains: ["waimai.meituan.com"], params: ["restaurant_id","food_id","mt_id"], userPattern: /shop\/(\d+)/ },
    { name: "滴滴出行",    domains: ["didichuxing.com"], params: ["orderId","driverId","passengerId"], userPattern: /trip\/(\w+)/ },
    { name: "携程旅行",    domains: ["ctrip.com"], params: ["allianceid","sid","source"], userPattern: /hotel\/(\d+)/ },
    { name: "饿了么",      domains: ["ele.me"], params: ["shop_id","item_id","promotion_id"], userPattern: /restaurant\/(\d+)/ },
    // 视频与直播平台
    { name: "西瓜视频", domains: ["ixigua.com"], params: ["item_id","group_id","from"], userPattern: /user\/(\d+)/ },
    { name: "快手直播", domains: ["live.kuaishou.com"], params: ["userId","liveId","shareChannel"], userPattern: /profile\/(\w+)/ },
    { name: "B站直播", domains: ["live.bilibili.com"], params: ["room_id","spm_id_from","broadcast_type"], userPattern: /(\d+)/ },
    { name: "抖音直播", domains: ["live.douyin.com"], params: ["room_id","anchor_id","share_id"], userPattern: /user\/(\w+)/ },
    { name: "小红书直播", domains: ["live.xiaohongshu.com"], params: ["room_id","anchor_id","source"], userPattern: /live\/(\d+)/ },

    // 教育与知识平台
    { name: "网易云课堂", domains: ["study.163.com"], params: ["courseId","productId","from=singlemessage"], userPattern: /course\/(\d+)/ },
    { name: "腾讯课堂", domains: ["ke.qq.com"], params: ["course_id","teacher_id","from=app_share"], userPattern: /course\/(\d+)/ },
    { name: "中国大学MOOC", domains: ["icourse163.org"], params: ["courseId","termId","from=wap"], userPattern: /course\/(\w+)-(\d+)/ },
    { name: "Coursera中国", domains: ["coursera.org.cn"], params: ["courseSlug","specializationId","utm_source"], userPattern: /learn\/(\w+)/ },
    { name: "知乎Live", domains: ["live.zhihu.com"], params: ["live_id","speaker_id","utm_medium"], userPattern: /(\d+)/ },

    // 金融与保险平台
    { name: "支付宝理财", domains: ["licai.alipay.com"], params: ["productId","channelId","traceId"], userPattern: /product\/(\d+)/ },
    { name: "微信理财通", domains: ["licaitong.qq.com"], params: ["productCode","source","trace_id"], userPattern: /product\/(\w+)/ },
    { name: "陆金所", domains: ["lu.com"], params: ["productId","channel","from=share"], userPattern: /product\/(\d+)/ },
    { name: "蚂蚁保险", domains: ["baoxian.alipay.com"], params: ["productId","planId","traceId"], userPattern: /product\/(\d+)/ },
    { name: "微保", domains: ["weibao.com"], params: ["productId","channel","from=wechat"], userPattern: /product\/(\w+)/ },
    // 企业服务与办公平台
    { name: "企业微信", domains: ["work.weixin.qq.com"], params: ["corpId","agentId","msgId"], userPattern: /contact\/profile\/(\w+)/ },
    { name: "钉钉开放平台", domains: ["open.dingtalk.com"], params: ["appId","authCode","corpid"], userPattern: /app\/(\w+)/ },
    { name: "飞书开放平台", domains: ["open.feishu.cn"], params: ["app_id","tenant_key","code"], userPattern: /app\/(\w+)/ },
    { name: "腾讯会议", domains: ["meeting.tencent.com"], params: ["meeting_id","user_id","from=share"], userPattern: /m\/(\d+)/ },
    { name: "Zoom中国", domains: ["zoom.cn"], params: ["meeting_number","pwd","from=web"], userPattern: /j\/(\d+)/ },

    // 房产与家居平台
    { name: "链家", domains: ["lianjia.com"], params: ["house_code","community_id","from=share"], userPattern: /ershoufang\/(\d+)/ },
    { name: "贝壳找房", domains: ["ke.com"], params: ["house_code","city_id","channel"], userPattern: /ershoufang\/(\d+)/ },
    { name: "自如", domains: ["ziroom.com"], params: ["house_id","project_id","from=app"], userPattern: /detail\/(\d+)/ },
    { name: "土巴兔", domains: ["to8to.com"], params: ["company_id","case_id","utm_source"], userPattern: /company\/(\d+)/ },
    { name: "好好住", domains: ["haohaozhu.com"], params: ["note_id","user_id","from=share"], userPattern: /p\/(\d+)/ },

    // 汽车与出行平台
    { name: "汽车之家", domains: ["autohome.com.cn"], params: ["seriesId","specId","from=wap"], userPattern: /price\/series-(\d+)/ },
    { name: "易车", domains: ["yiche.com"], params: ["serialId","modelId","from=share"], userPattern: /car\/(\d+)/ },
    { name: "懂车帝", domains: ["dongchedi.com"], params: ["series_id","article_id","from=app"], userPattern: /series\/(\d+)/ },
    { name: "小鹏汽车", domains: ["xiaopeng.com"], params: ["modelId","storeId","from=share"], userPattern: /models\/(\w+)/ },
    { name: "蔚来汽车", domains: ["nio.com"], params: ["modelCode","eventId","from=app"], userPattern: /models\/(\w+)/ },

    // 健康与医疗平台
    { name: "平安好医生", domains: ["pingan.com"], params: ["doctorId","departmentId","from=share"], userPattern: /doctor\/(\d+)/ },
    { name: "微医", domains: ["weiyi.cn"], params: ["hospitalId","doctorId","from=app"], userPattern: /hospital\/(\d+)/ },
    { name: "丁香医生", domains: ["dxy.cn"], params: ["articleId","diseaseId","from=share"], userPattern: /article\/(\d+)/ },
    { name: "好大夫在线", domains: ["haodf.com"], params: ["doctorId","hospitalId","from=web"], userPattern: /doctor\/(\d+)/ },
    { name: "美团买药", domains: ["yao.mt.com"], params: ["medicineId","pharmacyId","from=search"], userPattern: /medicine\/(\d+)/ },
    // 游戏与娱乐平台
    { name: "网易游戏", domains: ["163.com/game"], params: ["game_id","server_id","utm_source"], userPattern: /game\/(\w+)/ },
    { name: "腾讯游戏", domains: ["qq.com/game"], params: ["game_id","act_id","from=share"], userPattern: /game\/(\w+)/ },
    { name: "米哈游", domains: ["miHoYo.com"], params: ["game_id","uid","from=app"], userPattern: /game\/(\w+)/ },
    { name: "B站游戏中心", domains: ["game.bilibili.com"], params: ["game_id","channel_id","from=banner"], userPattern: /detail\/(\d+)/ },
    { name: "TapTap", domains: ["taptap.com"], params: ["app_id","topic_id","from=search"], userPattern: /app\/(\d+)/ },

    // 招聘与职场平台
    { name: "BOSS直聘", domains: ["zhipin.com"], params: ["job_id","company_id","ka=search_list"], userPattern: /job_detail\/(\w+)/ },
    { name: "前程无忧", domains: ["51job.com"], params: ["jobid","companyid","from=search"], userPattern: /job\/(\d+)/ },
    { name: "智联招聘", domains: ["zhaopin.com"], params: ["jobId","companyId","from=share"], userPattern: /job_detail\/(\w+)/ },
    { name: "脉脉", domains: ["maimai.cn"], params: ["post_id","company_id","from=feed"], userPattern: /post\/(\d+)/ },
    { name: "领英中国", domains: ["linkedin.cn"], params: ["companyId","postId","from=share"], userPattern: /company\/(\w+)/ },

    // 物流与供应链平台
    { name: "菜鸟网络", domains: ["cainiao.com"], params: ["orderId","logisticsId","from=app"], userPattern: /detail\/(\w+)/ },
    { name: "顺丰速运", domains: ["sf-express.com"], params: ["waybillNo","orderId","from=web"], userPattern: /track\/(\w+)/ },
    { name: "京东物流", domains: ["jd.com/logistics"], params: ["orderId","logisticsId","from=app"], userPattern: /order\/(\d+)/ },
    { name: "中通快递", domains: ["zto.com"], params: ["waybillNumber","orderId","from=search"], userPattern: /track\/(\w+)/ },
    { name: "韵达快递", domains: ["yundaex.com"], params: ["waybillNo","orderId","from=web"], userPattern: /track\/(\w+)/ },

    // 农业与农村电商平台
    { name: "拼多多农货", domains: ["pinduoduo.com/agri"], params: ["productId","farmerId","from=agri"], userPattern: /product\/(\d+)/ },
    { name: "惠农网", domains: ["cnhnb.com"], params: ["productId","supplierId","from=search"], userPattern: /product\/(\d+)/ },
    { name: "一亩田", domains: ["yimutian.com"], params: ["productId","sellerId","from=app"], userPattern: /product\/(\d+)/ },
    { name: "淘宝农村淘宝", domains: ["nongcun.taobao.com"], params: ["itemId","villageId","from=share"], userPattern: /item\/(\d+)/ },
    { name: "京东农场", domains: ["nongchang.jd.com"], params: ["productId","farmId","from=web"], userPattern: /product\/(\d+)/ }];
    
