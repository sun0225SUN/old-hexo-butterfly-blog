//随机背景图片数组,图片可以换成图床链接，注意最后一条后面不要有逗号
var backimg = [
    "url(https://cdn.jsdelivr.net/gh/sun0225SUN/photos/img/20210723175208.jpg)",
    "url(https://cdn.jsdelivr.net/gh/sun0225SUN/photos/img/20210628225649.jpg)",
    "url(https://cdn.jsdelivr.net/gh/sun0225SUN/photos/img/20210628230254.jpeg)",
    "url(https://cdn.jsdelivr.net/gh/sun0225SUN/photos/img/20210628223646.jpg)",
    "url(https://cdn.jsdelivr.net/gh/sun0225SUN/photos/img/20210628224926.jpg)",
    "url(https://cdn.jsdelivr.net/gh/sun0225SUN/photos/img/20210628224357.jpg)",
    "url(https://cdn.jsdelivr.net/gh/sun0225SUN/photos/img/20210628214419.jpg)",
    "url(https://cdn.jsdelivr.net/gh/sun0225SUN/photos/img/20210628225030.jpg)",
    "url(https://cdn.jsdelivr.net/gh/sun0225SUN/photos/img/20210628193816.jpg)",
    "url(https://cdn.jsdelivr.net/gh/sun0225SUN/photos/img/20210628193313.jpg)",
    "url(https://cdn.jsdelivr.net/gh/sun0225SUN/photos/img/20210628215207.jpg)",
    "url(https://cdn.jsdelivr.net/gh/sun0225SUN/photos/img/20210628231928.jpg)",
    "url(https://cdn.jsdelivr.net/gh/sun0225SUN/photos/img/20210628231426.jpg)",
    "url(https://cdn.jsdelivr.net/gh/sun0225SUN/photos/img/20210628230357.jpg)",
    "url(https://cdn.jsdelivr.net/gh/sun0225SUN/photos/img/20210628230809.jpg)",
    "url(https://cdn.jsdelivr.net/gh/sun0225SUN/photos/img/20210628224543.jpg)",
    "url(https://cdn.jsdelivr.net/gh/sun0225SUN/photos/img/20210628224259.jpg)",
    "url(https://cdn.jsdelivr.net/gh/sun0225SUN/photos/img/20210628224151.jpg)",
    "url(https://cdn.jsdelivr.net/gh/sun0225SUN/photos/img/20210628223958.jpg)",
    "url(https://cdn.jsdelivr.net/gh/sun0225SUN/photos/img/20210628222926.jpg)",
    "url(https://cdn.jsdelivr.net/gh/sun0225SUN/photos/img/20210628193842.jpg)",
    "url(https://cdn.jsdelivr.net/gh/sun0225SUN/photos/img/20210628193652.jpg)",
    "url(https://cdn.jsdelivr.net/gh/sun0225SUN/photos/img/20210628193622.jpg)",
    "url(https://cdn.jsdelivr.net/gh/sun0225SUN/photos/img/20210628193407.jpg)",
    "url(https://cdn.jsdelivr.net/gh/sun0225SUN/photos/img/20210723175100.jpg)",
    "url(https://cdn.jsdelivr.net/gh/sun0225SUN/photos/img/20210628232153.jpg)",
    "url(https://cdn.jsdelivr.net/gh/sun0225SUN/photos/img/20210628230550.jpg)",
    "url(https://cdn.jsdelivr.net/gh/sun0225SUN/photos/img/20210628215432.jpg)",
    "url(https://cdn.jsdelivr.net/gh/sun0225SUN/photos/img/20210628215046.jpg)",
    "url(https://cdn.jsdelivr.net/gh/sun0225SUN/photos/img/20210628193742.jpg)",
    "url(https://cdn.jsdelivr.net/gh/sun0225SUN/photos/images/202111141845523.jpg)",
    "url(https://cdn.jsdelivr.net/gh/sun0225SUN/photos/images/202111141846431.jpg)",
    "url(https://cdn.jsdelivr.net/gh/sun0225SUN/photos/images/202111141846133.jpg)",
    "url(https://cdn.jsdelivr.net/gh/sun0225SUN/photos/images/202111141846419.jpg)",
    "url(https://cdn.jsdelivr.net/gh/sun0225SUN/photos/images/202111141848113.jpg)",
    "url(https://cdn.jsdelivr.net/gh/sun0225SUN/photos/images/202111141850869.jpg)",
    "url(https://cdn.jsdelivr.net/gh/sun0225SUN/photos/images/202111141846448.jpg)"
];
//获取背景图片总数，生成随机数
var bgindex = Math.ceil(Math.random() * (backimg.length - 1));
//重设背景图片
document.getElementById("web_bg").style.backgroundImage = backimg[bgindex];
//随机banner数组,图片可以换成图床链接，注意最后一条后面不要有逗号
var bannerimg = [
    // "url(/img/bg1.JPG)",
    // "url(/img/bg2.jpg)",
    // "url(/img/bg3.jpg)",
    // "url(/img/bg4.jpg)"
];
//获取banner图片总数，生成随机数
var bannerindex = Math.ceil(Math.random() * (bannerimg.length - 1));
//重设banner图片
document.getElementById("page-header").style.backgroundImage = bannerimg[bannerindex];