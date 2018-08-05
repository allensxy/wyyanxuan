//公用方法调用
yx.public.userFn(); //判断用户是否登录
yx.public.foucsFn(); //搜索框光标事件
yx.public.navFn(); //调用导航功能
yx.public.lazyImgFn(); //图片懒加载
yx.public.backUpFn(); //回到顶部
yx.public.shopFn(); //购物车
yx.public.myDateFn(); //日历

//banner图轮播
var bannerPic = new Carousel();
bannerPic.init({
    id: 'bannerPic',
    autoplay: true,
    intervalTime: 3000,
    loop: true,
    totalNum: 8,
    moveNum: 1,
    circle: true,
    moveWay: 'opacity'
});

//新品首发图轮播
var newProduct = new Carousel();
newProduct.init({
    id: 'newProduct',
    autoplay: false,
    intervalTime: 3000,
    loop: false,
    totalNum: 8,
    moveNum: 4,
    circle: false,
    moveWay: 'position'
});

//调用自定义事件  
newProduct.on('leftEnd', function() { //右边点击到头了
    this.prevBtn.style.background = "#E7E2D7";
});
newProduct.on('rightEnd', function() { //左边点击到头了
    this.nextBtn.style.background = "#E7E2D7";
});

newProduct.on('leftClick', function() { //左边点击
    this.nextBtn.style.background = "#D0C4AF";
});
newProduct.on('rightClick', function() { //右边点击
    this.prevBtn.style.background = "#D0C4AF";
});

//人气推荐选项卡
(function() {
    var titles = yx.ga('#recommend header li');
    var contents = yx.ga('#recommend .content');
    for (var i = 0; i < titles.length; i++) {
        titles[i].index = i;
        titles[i].onclick = function() { //点击事件
            for (var j = 0; j < titles.length; j++) {
                titles[j].className = '';
                contents[j].style.display = 'none';
            }
            titles[this.index].className = 'active';
            contents[this.index].style.display = 'block';
        }

    }
}());

//限时购
(function() {
    var timeBox = yx.g('#limit .timeBox');
    var spans = yx.ga('#limit .timeBox span');
    var timer = setInterval(showTime, 1000);
    showTime();
    //倒计时
    function showTime() {
        //console.log(1);
        var endTime = new Date(2018, 6, 6, 13); //月份从0开始。所以5表示的是六月份
        if (new Date() < endTime) { //如果当前的时间没有超过结束时间才去做倒计时
            var overTime = yx.cutTime(endTime); //得到格式化的时间
            spans[0].innerHTML = yx.format(overTime.h);
            spans[1].innerHTML = yx.format(overTime.m);
            spans[2].innerHTML = yx.format(overTime.s);
        } else {
            clearInterval(timer);
            // spans[0].innerHTML = '00';
            // spans[1].innerHTML = '00';
            // spans[2].innerHTML = '00';
        }
    }

    //商品数据
    var boxWrap = yx.g("#limit .boxWrap");
    var str = '';
    var item = json_promotion.itemList;
    for (var i = 0; i < item.length; i++) {
        str += '<div class="limitBox">' +
            '<a href="#" class="left scaleImg"><img class="original" src="images/empty.gif" data-original="' + item[i].primaryPicUrl + '"/></a>' +
            '<div class="right">' +
            '<a href="#" class="title">' + item[i].itemName + '</a>' +
            '<p>' + item[i].simpleDesc + '</p>' +
            '<div class="numBar clearfix">' +
            '<div class="numCon"><span style="width:' + Number(item[i].currentSellVolume) / Number(item[i].totalSellVolume) * 100 + '%"></span></div>' +
            '<span class="numTips">还剩' + item[i].currentSellVolume + '件</span>' +
            '</div>' +
            '<div>' +
            '<span class="xianshi">限时价<span class="fuhao">¥</span><strong>' + item[i].actualPrice + '</strong></span>' +
            '<span class="yuan">原价 ¥' + item[i].retailPrice + '</span>' +
            '</div>' +
            '<a href="#" class="qianggou">立即抢购</a>' +
            '</div>' +
            '</div>';
    }
    boxWrap.innerHTML = str;
}());

//大家都再说轮播图
var say = new Carousel();
say.init({
    id: 'sayPic',
    autoplay: true,
    intervalTime: 3000,
    loop: true,
    totalNum: 12,
    moveNum: 1,
    circle: false,
    moveWay: 'position'
});