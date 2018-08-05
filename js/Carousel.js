/*
 * 组件api说明
 * 	1、依赖move.js，组件前一定要引入move.js
 * 	2、轮播图需要有一个父级，这个父级一定要给一个id
 */
;
(function(window, undefined) { //轮播图的匿名自执行函数
    var Carousel = function() { //构造函数
        this.settings = {
            id: 'pic', //轮播图的父级的id,必需传的参数
            autoplay: true, //自动播放，true为自动，false为不自动，默认为true
            intervalTime: 1000, //间隔时间，运动后停顿的时间，默认1s
            loop: true, //循环播放，true为循环，false为不循环，默认为true
            totleNum: 8, //图片的总量
            moveNum: 1, //单词运动的图片数量(图片总量必需为运动数量的整倍数)
            circle: true, //小圆点功能，true为显示，false为不显示，默认显示
            moveWay: 'opacity' //运动方式，opacity为透明度过渡，position为位置过渡
        };
    };

    Carousel.prototype = { //给构造函数添加功能（固定的写法）
        //因为轮播图会有多个调用对象，所以要更改constructor这个属性，始终是指向new出来的这个对象
        constructor: Carousel,
        init: function(opt) { //初始化，如果用户没传入参数就用默认值，避免报错
            var opt = opt || this.settings;
            for (var key in opt) { //遍历对象，覆盖默认值
                this.settings[key] = opt[key];
            }
            this.createDom();
        },
        createDom: function() { //创建结构
            var This = this;
            this.box = document.getElementById(this.settings.id);

            //创建上一个按钮
            this.prevBtn = document.createElement("div");
            this.prevBtn.className = 'prev';
            this.prevBtn.innerHTML = '<';
            this.prevBtn.onclick = function() {
                This.prev(); //点击执行上一个的函数
                This.trigger('leftClick');
            };
            this.box.appendChild(this.prevBtn);

            //创建下一个按钮
            this.nextBtn = document.createElement("div");
            this.nextBtn.className = 'next';
            this.nextBtn.innerHTML = '>';
            this.nextBtn.onclick = function() {
                This.next(); //点击执行下一个的函数
                This.trigger('rightClick');
            };
            this.box.appendChild(this.nextBtn);

            //创建圆点
            this.circleWrap = document.createElement("div"); //圆点的父级div
            this.circleWrap.className = 'circle';
            this.circlesArr = []; //存圆点，后面需要修改圆点的class，弄一个数组存起来会方便些

            //如果每次走一屏的话，圆点数量就不能是总量了，所以要拿总量除以走的图片的数量
            for (var i = 0; i < this.settings.totalNum / this.settings.moveNum; i++) {
                var span = document.createElement("span");
                span.index = i;
                span.onclick = function() { //圆点点击事件
                    This.cn = this.index;
                    This[This.settings.moveWay + 'Fn']();
                }
                this.circleWrap.appendChild(span);
                this.circlesArr.push(span);
            }
            this.circlesArr[0].className = 'active';
            if (this.settings.circle) { //圆点为true才创建
                this.box.appendChild(this.circleWrap);
            }

            this.moveInit();
        },
        moveInit: function() { //运动前的初始化
            this.cn = 0; //当前的索引
            this.ln = 0; //上一个的索引
            this.canClick = true; //是否可以再次点击
            this.endNum = this.settings.totalNum / this.settings.moveNum; //停止条件
            this.opacityItem = this.box.children[0].children; //运动透明度的所有元素
            this.positionItemWrap = this.box.children[0].children[0]; //运动位置的元素的父级
            this.positionItem = this.positionItemWrap.children; //运动位置的所有元素

            switch (this.settings.moveWay) {
                case 'opacity': //如果走的是透明度，需要设置透明度与transition
                    for (var i = 0; i < this.opacityItem.length; i++) {
                        this.opacityItem[i].style.opacity = 0;
                        this.opacityItem[i].style.transition = '.3s opacity';
                    }
                    this.opacityItem[0].style.opacity = 1;
                    break;
                case 'position': //如果走的是位置，需要设置父级的宽度
                    //这里需要注意一下，一定要加上元素的margin
                    var leftWidth = parseInt(getComputedStyle(this.positionItem[0], null)["marginLeft"]); //获取元素身上的左外边距
                    var rightWidth = parseInt(getComputedStyle(this.positionItem[0], null)["marginRight"]); //获取元素身上的右外边距

                    //一个元素的实际宽度
                    this.singleWidth = leftWidth + this.positionItem[0].offsetWidth + rightWidth;

                    //如果运动是循环的，需要复制一份内容
                    if (this.settings.loop) {
                        this.positionItemWrap.innerHTML += this.positionItemWrap.innerHTML;
                    }

                    //复制后的内容才能去设置宽度=一个元素的实际宽度*元素的个数
                    this.positionItemWrap.style.width = this.singleWidth * this.positionItem.length + "px";
                    break;
                default:
                    break;
            };
            if (this.settings.autoplay) { //用户传入了自动播放的时间才需要走自动播放
                this.autoPlay();
            }
        },
        opacityFn: function() { //透明度运动方式
            //左边到头
            if (this.cn < 0) {
                if (this.settings.loop) {
                    //循环
                    this.cn = this.endNum - 1;
                } else {
                    //不循环
                    this.cn = 0;

                    //解决点击头一张或者最后一张后，不能再次点击。是因为canClick是在transitionend里面设置的，如果不循环的话就会停在最后。再次点击的时候transitionend就不会发生，所以canClick的值就不会改变
                    this.canClick = true;
                }
            }

            //右边到头
            if (this.cn > this.endNum - 1) {
                if (this.settings.loop) {
                    //循环
                    this.cn = 0;
                } else {
                    //不循环
                    this.cn = this.endNum - 1;
                    this.canClick = true;
                }
            }

            //设置上一个图片和圆点的样式清空
            this.opacityItem[this.ln].style.opacity = 0;
            this.circlesArr[this.ln].className = '';

            //设置下一张图片和圆点的样式
            this.opacityItem[this.cn].style.opacity = 1;
            this.circlesArr[this.cn].className = 'active';

            var This = this;
            var en = 0;
            this.opacityItem[this.cn].addEventListener('transitionend', function() {
                en++;
                if (en == 1) {
                    This.canClick = true;
                    This.ln = This.cn; //当前索引的值给上一个

                    This.endFn(); //调用自定义事件
                }
            });

        },
        positionFn: function() { //posotion位置运动方式
            //左边到头
            if (this.cn < 0) {
                if (this.settings.loop) {
                    //循环
                    /*
                     * 在这里需要做两件事情
                     * 	1、先让运动的父级的位置到中间，为了往右走不会出现空白
                     * 	2、同时需要修改索引值（到了中间了，并不是停在那了，而是要运动出前一排，所以cn的值要减个1，为了就是能运动）
                     */
                    this.positionItemWrap.style.left = -this.positionItemWrap.offsetWidth / 2 + "px";
                    this.cn = this.endNum - 1;
                } else {
                    //不循环
                    this.cn = 0;
                }
            }

            //右边到头
            // if (this.cn > this.endNum - 1) {
            //     if (this.settings.loop) {
            //         //循环
            //     } else {
            //         //不循环
            //         this.cn = this.endNum - 1;
            //     }
            // }
            //上面的简写形式
            if (this.cn > this.endNum - 1 && !this.settings.loop) {
                this.cn = this.endNum - 1;
            }


            //修改圆点，只有不循环的时候才去修改圆点
            if (!this.settings.loop) {
                this.circlesArr[this.ln].className = '';
                this.circlesArr[this.cn].className = 'active';
            }

            //运动
            //left的值=一个元素的宽度*当前cn的值*一次运动元素的个数
            var This = this;
            move(this.positionItemWrap, { left: -this.cn * this.singleWidth * this.settings.moveNum }, 300, 'linear', function() {
                //这个条件成立，说明现在已经到了第二份的第一屏
                if (This.cn == This.endNum) {
                    this.style.left = 0;
                    This.cn = 0;
                }

                This.endFn(); //调用自定义事件

                This.canClick = true;
                This.ln = This.cn;
            });

        },
        prev: function() { //上一个按钮
            if (!this.canClick) { //不能点击就return。默认是ture可以点击
                return;
            }
            this.canClick = false;
            this.cn--;

            //在调用运动的方式，这里运动的方式是根据用户传进来的参数决定的。所以不能以this.positionFn()写死的形式调用，
            //这里需要用[]的形式来调用opacityFn/positionFn的函数
            this[this.settings.moveWay + 'Fn']();
        },
        next: function() {
            //能否进行下一次点击，要放在这里面判断
            if (!this.canClick) { //不能点击就return
                return;
            }
            this.canClick = false;
            this.cn++;
            this[this.settings.moveWay + 'Fn']();
        },
        autoPlay: function() { //自动播放功能
            var This = this;
            this.timer = setInterval(function() {
                This.next(); //下一个
            }, this.settings.intervalTime);
            //鼠标放上去的时候停止
            this.box.onmouseenter = function() {
                clearInterval(This.timer);
                This.timer = null;
            };
            this.box.onmouseleave = function() { //鼠标离开的时候继续播放
                This.autoPlay();
            }
        },

        /**
         * 自定义事件
         * @param {any} type        事件的名称
         * @param {any} lintener    事件对应触发的函数（即function(){}）
         */
        on: function(type, listener) {
            this.events = this.events || {};
            this.events[type] = this.events[type] || [];
            this.events[type].push(listener);
        },
        //调用自定义事件，需要写一个触发器
        trigger: function(type) {
            //因为有的组件有自定义事件，有的没有。所以需要做一个判断，只有有调用自定义事件的实例才能执行下面的代码
            if (this.events && this.events[type]) {
                for (var i = 0; i < this.events[type].length; i++) {
                    this.events[type][i].call(this);
                }
            }
        },
        endFn: function() {
            //统一添加自定义事件的函数，要在运动完成以后添加，并且需要加给不循环的运动
            if (!this.settings.loop) {
                if (this.cn == 0) {
                    //这个条件满足，说明有左边运动已经到头
                    this.trigger('leftEnd');
                }
                if (this.cn == this.endNum - 1) {
                    //这个条件满足，说明有右边运动已经到头
                    this.trigger('rightEnd');
                }
            }
        }
    };
    window.Carousel = Carousel; //构造函数挂载到window上
})(window, undefined);