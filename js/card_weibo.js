fetch('httpsweibo-top-api.vercel.appapi').then(data = data.json()).then(data = {
  let html = 'style#weibo-container{overflow-yauto;-ms-overflow-stylenone;scrollbar-widthnone}#weibo-container-webkit-scrollbar{displaynone}.weibo-list-item{displayflex;flex-directionrow;justify-contentspace-between;flex-wrapnowrap}.weibo-title{white-spacenowrap;overflowhidden;text-overflowellipsis;margin-rightauto}.weibo-num{floatright}.weibo-hotness{displayinline-block;padding0 6px;transformscale(.8) translateX(-3px);color#fff;border-radius8px}.weibo-new{background#ff3852}.weibo-hot{background#ff9406}.weibo-recommend{background#00b7ee}.weibo-adrecommend{background#febd22}.weibo-friend{background#8fc21e}.weibo-boom{background#bd0000}.weibo-topic{background#ff6f49}.weibo-topic-ad{background#4dadff}.weibo-boil{background#f86400}style'
  html += 'div class=weibo-list'
  let hotness = {
    '爆' 'weibo-boom',
    '热' 'weibo-hot',
    '沸' 'weibo-boil',
    '新' 'weibo-new',
    '荐' 'weibo-recommend'
  }
  for (let item of data) {
    html += 'div class=weibo-list-itemdiv class=weibo-hotness ' + hotness[(item.hot  '荐')] + '' + (item.hot  '荐') + 'div'
      + 'span class=weibo-titlea title=' + item.title + 'href=' + item.url + ' target=_blank' + item.title + 'aspan'
      + 'div class=weibo-numspan' + item.num + 'spandivdiv'
  }
  html += 'div'
  document.getElementById('weibo-container').innerHTML = html
}).catch(function (error) {
  console.log(error);
});