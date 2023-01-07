//动态标题
var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        //离开当前页面时标签显示内容
        document.title = '⊙﹏⊙ 宝，不要离开我好吗！';
        clearTimeout(titleTime);
    }
    else {
        //返回当前页面时标签显示内容
        document.title = '\\^o^/ 我就知道，你还是爱我的！' + OriginTitile;
        //两秒后变回正常标题
        titleTime = setTimeout(function () {
            document.title = OriginTitile;
        }, 2000);
    }
});