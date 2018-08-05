/**
 * Created by     on 2018/5/30
 * 功能：公用js库
 * 版本：V1.0.0
 * 说明：一些工具类函数及一些共用的功能。
 */
window.yx = { //把yx挂载到window上

    //工具类函数
    g: function(name) {
        return document.querySelector(name);
    },
    ga: function(name) {
        return document.querySelectorAll(name);
    },
    /**
     * obj  监听的对象（给谁添加事件）
     * ev   监听的事件（要添加的事件名字）
     * fn   监听的函数（也就是要做的事情）
     */
    addEvent: function(obj, ev, fn) { //添加事件监听
        if (obj.addEventListener) {
            obj.addEventListener(ev, fn);
        } else {
            obj.attachEvent('on', +ev, fn);
        }
    },
    removeEvent: function(obj, ev, fn) { //删除事件监听
        if (obj.removeEventListener) { //标准浏览器，谷歌火狐
            obj.removeEventListener(ev, fn);
        } else { //IE浏览器
            obj.detachEvent('on', +ev, fn);
        }
    },
    getTopValue: function(obj) { //获取元素离html的距离
        var top = 0;
        while (obj.offsetParent) { //offsetParent 获取定位父元素
            top += obj.offsetTop;
            obj = obj.offsetParent;
        }
        return top;
    },
    cutTime: function(target) { //倒计时
        var currentDate = new Date();
        var v = Math.abs(target - currentDate);

        return {
            d: parseInt(v / (24 * 3600000)),
            h: parseInt(v % (24 * 3600000) / 3600000),
            m: parseInt(v % (24 * 3600000) % 3600000 / 60000),
            s: parseInt(v % (24 * 3600000) % 3600000 % 60000 / 1000)
        };
    },
    format: function(v) { //给时间补0
        return v < 10 ? '0' + v : v;
    },

    formatWeek: function(v) { //格式化星期
        return ['日', '一', '二', '三', '四', '五', '六'][v];
    },
    formatDate: function(time) { //组装时间
        var d = new Date(time);
        return d.getFullYear() + '-' + yx.format(d.getMonth() + 1) + '-' + yx.format(d.getDate()) + ' ' + yx.format(d.getHours()) + ':' + yx.format(d.getMinutes());
    },
    // 把url后面的参数解析成对象
    parseUrl: function(url) {
        var reg = /(\w+)=(\w+)/ig;
        var result = {};
        url.replace(reg, function(a, b, c) {
            result[b] = c;
        });
        return result;
    },

    //页面中公用的功能
    public: {
        // 登录了就显示出用户名出来
        userFn: function() {
            var username = sessionStorage.getItem("username");
            if (username != null) {
                yx.g('.login1').innerText = username + '，您好';
                yx.g('.login1').setAttribute('href', "javascript:;");
                yx.g('.register1').style.display = 'none';
                yx.g('.login2').innerText = username + '，您好';
                yx.g('.login2').setAttribute('href', "javascript:;");
                yx.g('.register2').style.display = 'none';
            }
        },

        //搜索框光标点击弹出下拉框
        foucsFn: function() {
            var input = yx.g('.searcBox>input');
            var search = yx.g('.yx-sxy-search');
            input.onfocus = function() {
                search.style.opacity = 1;
            };
            input.onblur = function() {
                search.style.opacity = 0;
            }
        },

        //导航功能
        navFn: function() {
            var nav = yx.g(".nav"); //导航最大div
            var lis = yx.ga(".navBar li"); //鼠标移入ul的li标签
            var subNav = yx.g('.subNav');
            var uls = yx.ga('.subNav ul');

            var newLis = []; //存储实际有用的li

            //首页是没有hover状态，所以要从1开始循环，后面的三个li也没有hover状态
            for (var i = 1; i < lis.length - 3; i++) {
                newLis.push(lis[i]);
            }
            for (var i = 0; i < newLis.length; i++) {
                newLis[i].index = uls[i].index = i;
                newLis[i].onmouseenter = uls[i].onmouseenter = function() {
                    newLis[this.index].className = 'active';
                    subNav.style.opacity = 1;
                    uls[this.index].style.display = 'block';
                }
                newLis[i].onmouseleave = uls[i].onmouseleave = function() {
                    newLis[this.index].className = '';
                    subNav.style.opacity = 0;
                    uls[this.index].style.display = 'none';
                }
            }

            yx.addEvent(window, 'scroll', setNavPos); //滚动条监听事件
            setNavPos();

            function setNavPos() { //滚动条滚动函数
                var search = yx.g('.search .yx-sxy-search');
                search.style.opacity = 0;
                nav.id = window.pageYOffset > nav.offsetTop ? 'navFix' : '';
            }
        },

        //图片懒加载功能
        lazyImgFn: function() {
            yx.addEvent(window, 'scroll', delazyImg);
            delazyImg();

            function delazyImg() {
                var originals = yx.ga('.original'); //所有要懒加载的图片
                //这个距离是可视区的高度与滚动条的距离之和
                var scrollTop = window.innerHeight + window.pageYOffset;
                for (var i = 0; i < originals.length; i++) {
                    //如果图片离html的上边的距离小于滚动条的距离与可视区的距离之和的话，就表示图片已经进入可视区
                    if (yx.getTopValue(originals[i]) < scrollTop) {
                        originals[i].src = originals[i].getAttribute('data-original');
                        //如果这个图片的地址已经换成真实的地址了，那就把它身上的class去掉，为了再次获取不到这张图片
                        originals[i].removeAttribute('class');
                    }
                }
                //判断最后一张图片加载完成就不需要在执行这个函数了
                if (originals[originals.length - 1].getAttribute('src') != 'images/empty.gif') {
                    //当这个条件成立的时候，说明现在所有图片的地址都已经换成真实地址了，这个时候就不需要在执行这个函数了
                    yx.removeEvent(window, 'scroll', delazyImg);
                }
            }
        },

        // 回到顶部功能
        backUpFn: function() {
            var back = yx.g('.back');
            var timer; //定时器
            back.onclick = function() {
                var top = window.pageYOffset; //滚动条的距离
                timer = setInterval(function() {
                    top -= 150;
                    if (top <= 0) {
                        top = 0;
                        clearInterval(timer);
                    }
                    //设置滚动条的位置
                    window.scrollTo(0, top);
                }, 16);
            };
        },

        // 购物车功能
        shopFn: function() {
            /*
             * localStorage		本地存储
             * 	可以把数据存储在用户的浏览器缓存里面，相当于在用户的本地创建了一个数据库，存储的形式是一个对象
             * 	localStorage.setItem(key,value)		存储一条数据
             * 	localStorage.getItem(key)			获取某条数据
             * 	localStorage.removeItem(key)		删除某条数据
             * 	localStorage.clear()				删除所有数据
             * 	localStorage.length					获取数据的长度
             * 	localStorage.key(i)					获取某条数据的key
             * 
             * 生命周期		只要不清除就一直存在
             * 注意：
             * 	1、IE不支持本地操作，需要放在服务器环境下。尽量都在服务器环境下操作
             * 	2、如果设置的是重复的key，不会增加，而是修改已有的数据
             * 			
             */

            //  购物车添加商品展示
            var productNum = 0; //买了几个商品
            (function(local) {
                var totalPrice = 0; //商品合计
                var ul = yx.g('.cart ul');
                var li = '';
                ul.innerHTML = '';

                for (var i = 0; i < local.length; i++) {
                    var attr = local.key(i);
                    if (attr === "jfVersion") {
                        continue;
                    }
                    var value = JSON.parse(local[attr]);
                    if (value && value.signs == 'productLoacl') {

                        li += `
                            <li data-id="${value.id}">
                                <a href="#" class="img"><img src="${value.img}"></a>
                                <div class="message">
                                    <p><a href="#">${value.name}</a></p>
                                    <p>${value.spec.join(' ')} x ${value.num}</p>
                                </div>
                                <div class="price">¥${value.price}.00</div>
                                <div class="close">X</div>
                            </li>`;
                        // 计算总价
                        totalPrice += parseFloat(value.price) * Number(value.num);
                    }
                }
                ul.innerHTML = li;
                productNum = ul.children.length; //买了几个商品
                yx.g('.cartWrap i').innerHTML = productNum; //更新商品数量的值
                yx.g('.cartWrap .total span').innerHTML = '¥' + totalPrice + '.00'; //更新总价格

                // 删除商品
                var colseBtns = yx.ga('.cart .list .close');
                for (var i = 0; i < colseBtns.length; i++) {
                    colseBtns[i].onclick = function() {
                        // 找到对应的id删除
                        localStorage.removeItem(this.parentNode.getAttribute('data-id'));
                        yx.public.shopFn();
                        if (ul.children.length == 0) {
                            yx.g('.cart').style.display = 'none';
                        }
                    };
                }

                // 给有红色圆圈的购物车添加事件
                var cartWrap = yx.g('.cartWrap');
                //为了解决购物车与弹出层之间的间隙会触发leave事件的问题。因为购物车和弹出层之间不是无缝衔接的，所以给个延迟定时器
                var timer;

                cartWrap.onmouseenter = function() {
                    //移除搜索框
                    var search = yx.g('.yx-sxy-search');
                    search.style.opacity = 0;
                    clearTimeout(timer);
                    yx.g('.cart').style.display = 'block';
                    scrollFn();
                };
                cartWrap.onmouseleave = function() {
                    timer = setTimeout(function() {
                        yx.g('.cart').style.display = 'none';
                    }, 100);
                };
            }(localStorage));

            // 购物车的滚动条功能
            scrollFn();

            function scrollFn() {
                var contentWrap = yx.g('.cart .list'); //ul的父级
                var content = yx.g('.cart .list ul');
                var scrollBar = yx.g('.cart .scrollBar'); //滚动条
                var slideWrap = yx.g('.cart .slideWrap'); //滑块的父级
                var slide = yx.g('.cart .slide'); //滚动条里面的滑块

                var btns = yx.ga('.scrollBar span'); //点击上下的按钮
                var timer;
                //倍数（用来设置滚动条的高度）
                var beishu = content.offsetHeight / contentWrap.offsetHeight;
                // 设置滚动条显示与否
                scrollBar.style.display = beishu <= 1 ? 'none' : 'block';
                // 给倍数一个最大值(防止他无限制的增大)
                if (beishu > 20) {
                    beishu = 20;
                }

                // 内容与内容的父级的倍数与滑块父级的倍数是相等的
                slide.style.height = slideWrap.offsetHeight / beishu + 'px';

                // 往下是实现滑块拖拽
                var scrollTop = 0; //滚动条走的距离
                var maxHeight = slideWrap.offsetHeight - slide.offsetHeight; //滚动条能走的最大距离

                // 滑块拖动事件
                slide.onmousedown = function(ev) {
                    var disY = ev.clientY - slide.offsetTop;
                    document.onmousemove = function(ev) {
                        scrollTop = ev.clientY - disY;
                        moveScroll();
                    };
                    document.onmouseup = function() {
                        this.onmousemove = null;
                    };
                    // 阻止冒泡事件
                    ev.cancelBubble = true;
                    return false;
                };

                // 滚轮滚动的功能
                myScroll(contentWrap, function() {
                    scrollTop -= 10; //往上走
                    moveScroll();
                    clearInterval(timer);
                }, function() {
                    scrollTop += 10; //往下走
                    moveScroll();
                    clearInterval(timer);
                });

                // 上下箭头点击事件
                for (var i = 0; i < btns.length; i++) {
                    btns[i].index = i;
                    btns[i].onmousedown = function() {
                        // 用这个索引值来区分是上箭头还是下箭头
                        var n = this.index;
                        timer = setInterval(function() {
                            // n=1,判断为true就代表往下，n=0,判断为false就代表往上
                            scrollTop = n ? scrollTop + 5 : scrollTop - 5;
                            moveScroll();
                        }, 16);
                    };
                    btns[i].onmouseup = function() {
                        clearInterval(timer);
                    };
                }

                // 滑块区域点击的功能(有问题)
                slideWrap.onmousedown = function(ev) {
                    timer = setInterval(function() {
                        var slideTop = slide.getBoundingClientRect().top + slide.offsetHeight / 2;
                        if (ev.clientY < slideTop) {
                            // 这个条件成立说明现在鼠标在滑块的上面，滚动条应该往上走
                            scrollTop -= 5;
                        } else {
                            scrollTop += 5;
                        }
                        // 如果他们俩的差的绝对值小于5，就认为他已经到达终点了，这个时候就清除定时器
                        if (Math.abs(ev.clientY - slideTop) <= 5) {
                            clearInterval(timer);
                        }
                        moveScroll();
                    }, 16);
                }

                // 滚动条的主体功能
                function moveScroll() {
                    if (scrollTop < 0) {
                        scrollTop = 0;
                    } else if (scrollTop > maxHeight) { //如果走的是最大距离，就等于最大距离
                        scrollTop = maxHeight;
                    }
                    // 计算滚动条移动的那个点的距离=滚动条走的距离/最大距离
                    var scaleY = scrollTop / maxHeight;
                    slide.style.top = scrollTop + 'px';
                    // 内容的移动           内容能走的最大距离*比例
                    content.style.top = -(content.offsetHeight - contentWrap.offsetHeight) * scaleY + 'px';
                }

                // 滚轮事件
                function myScroll(obj, fnUp, fnDown) {
                    obj.onmousewheel = fn;
                    obj.addEventListener('DOMMouseScroll', fn);

                    function fn(ev) {
                        if (ev.wheelDelta > 0 || ev.dettail < 0) {
                            fnUp.call(obj);
                        } else {
                            fnDown.call(obj);
                        }
                        // 阻止冒泡事件
                        ev.cancelBubble = true;
                        return false;
                    }
                }
            }; //end 购物车的滚动条功能
        },

        // 日历
        myDateFn: function() {
            var time1 = yx.g("#yx-sxy-date .time1"); //当前日期时分秒
            var time2 = yx.g("#yx-sxy-date .time2"); //当前年月日+星期
            var number = yx.g("#yx-sxy-date .number"); //42个格子的父级
            var btns = yx.ga("#yx-sxy-date .time3 span"); //42个格子放具体的天数
            var strong = yx.g("#yx-sxy-date .time3 strong"); //当前是几号

            // 当前的时间
            timeNow();


            function timeNow() {
                var d = new Date();
                time1.innerHTML = yx.format(d.getHours()) + ':' + yx.format(d.getMinutes()) + ':' + yx.format(d.getSeconds());
            }
            setInterval(timeNow, 1000);
            var d1 = new Date();
            time2.innerHTML = d1.getFullYear() + '年' + (d1.getMonth() + 1) + '月' + d1.getDate() + '日,星期' + yx.formatWeek(d1.getDay());
            // 获取到某个月的最后一天
            function getEndDay(year, month) {
                return new Date(year, month, 0).getDate();
            }
            // 获取到某个月的第一天是星期几
            function getFirstWeek(year, month) {
                return new Date(year, month - 1, 1).getDay();
            }
            // 开始设置日期
            setDate(d1);

            function setDate(d) {
                //获取上个月的最后一天
                var lastEndDay = getEndDay(d.getFullYear(), d.getMonth());
                //获取到这个月的最后一天（加个1是为了吧月份改成下个月，然后是日期改成0，这样就能回到这个月）
                var curEndDay = getEndDay(d.getFullYear(), d.getMonth() + 1);
                //获取到这个月的第一天的星期数
                var week = getFirstWeek(d.getFullYear(), d.getMonth() + 1);
                var curDay = 1; //这个月开始的日期初始值
                var str = '';
                var endNum = week - 1; //上个月最后一天在日历当中停留的位置（对应的星期数）
                if (endNum == 0) {
                    endNum = 7; //给上个月留下7个位置
                }
                for (var i = 0; i < 42; i++) {
                    if (i < endNum) {
                        //这个条件成立，说明放的是上个月的日期
                        str = '<span class="color">' + (lastEndDay--) + '</span>' + str;
                    } else if (i >= endNum + curEndDay) {
                        // 这个条件成立，说明放的是下个月的日期
                        str += '<span class="color">' + (curDay++) + '</span>';
                    } else {
                        var cl = new Date().getDate() == (i - endNum + 1) ? 'active' : '';
                        //如果日历上的日期与今天的日期不对应，说明显示的不是当前的日期，就要把cl置为空
                        if (d1.getFullYear() != new Date().getFullYear() || d1.getMonth() != new Date().getMonth()) {
                            cl = "";
                        }
                        str += '<span class="' + cl + '">' + (i - endNum + 1) + '</span>';
                    }
                }
                number.innerHTML = str;
                strong.innerHTML = d1.getFullYear() + '年' + (d1.getMonth() + 1) + '月';
            }

            // 点击上个月
            btns[0].onclick = function() {
                d1.setMonth(d1.getMonth() - 1);
                setDate(d1);
            };
            // 点击上个月
            btns[1].onclick = function() {
                d1.setMonth(d1.getMonth() + 1);
                setDate(d1);
            };

        }
    },
}

$(function() {
    //扫码
    $('.yx-sxy-xzyl').mouseenter(function() {
        $('.yx-sxy-downloadLinkDialog').stop().slideDown(500);
    });
    $('.yx-sxy-xzyl').mouseleave(function() {
        $('.yx-sxy-downloadLinkDialog').stop().slideUp(500);
    });

    // 日历
    $('.yx-sxy-date').mouseenter(function() {
        $('#yx-sxy-date').stop().slideDown(500);
    });
    $('.yx-sxy-date').mouseleave(function() {
        $('#yx-sxy-date').stop().slideUp(500);
    });

});