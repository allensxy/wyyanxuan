/*
 * 调用：
 * 	
 * 	move(obj, {left:10,top:20,opacity:0.8}, duration, fx, callback)
 * 
 * 第二个参数里用键值对的形式，值没有单位，opacity的值为0-1
 * 
 */


function move(obj, attrs, duration, fx, callback) {

    clearInterval(obj.timer);

    var startTime = new Date().getTime();
    //var b = parseFloat(getComputedStyle(obj)[attr]);
    //var c = target - b;

    //因为要运动多个属性，并且多个属性的起始和结束的值并不一样，所有b的和c的值就不能共用，我们要根据属性的属性的不同，分别去存放b和c的值，同时存的值也要方便下面定时循环不同属性的过程中，很方便的就能找到
    //所以，我们可以定义一个对象，然后根据不同的属性存放不同的b和c
    var j = {};
    //遍历attrs，然后根据里面的值，生成不同的b和c
    for (var attr in attrs) {
        j[attr] = {}
        j[attr].b = parseFloat(getComputedStyle(obj)[attr]);
        j[attr].c = attrs[attr] - j[attr].b;
    }

    //console.dir(j);
    //
    //return;


    var d = duration;

    obj.timer = setInterval(function() {

        var t = new Date().getTime() - startTime;

        if ( t >= d ) {
            t = d;
        }

        //根据传入进来的属性，通过遍历的方式把所有要运动的属性都计算一次
        for (var attr in attrs) {
            var b = j[attr].b;
            var c = j[attr].c;
            var value = Tween[fx](t, b, c, d);

            if ( attr == 'opacity' ) {
                obj.style[attr] = value;
            } else {
                obj.style[attr] = value + 'px';
            }
        }

        if ( t == d ) {
            clearInterval(obj.timer);
            if (typeof callback == 'function') {
                callback.call(obj);
            }

        }

    }, 16);
}

/*
 * t : time 已过时间
 * b : begin 起始值
 * c : count 总的运动值
 * d : duration 持续时间
 * */

//Tween.linear();

var Tween = {
    linear: function (t, b, c, d){  //匀速
        return c*t/d + b;
    },
    easeIn: function(t, b, c, d){  //加速曲线
        return c*(t/=d)*t + b;
    },
    easeOut: function(t, b, c, d){  //减速曲线
        return -c *(t/=d)*(t-2) + b;
    },
    easeBoth: function(t, b, c, d){  //加速减速曲线
        if ((t/=d/2) < 1) {
            return c/2*t*t + b;
        }
        return -c/2 * ((--t)*(t-2) - 1) + b;
    },
    easeInStrong: function(t, b, c, d){  //加加速曲线
        return c*(t/=d)*t*t*t + b;
    },
    easeOutStrong: function(t, b, c, d){  //减减速曲线
        return -c * ((t=t/d-1)*t*t*t - 1) + b;
    },
    easeBothStrong: function(t, b, c, d){  //加加速减减速曲线
        if ((t/=d/2) < 1) {
            return c/2*t*t*t*t + b;
        }
        return -c/2 * ((t-=2)*t*t*t - 2) + b;
    },
    elasticIn: function(t, b, c, d, a, p){  //正弦衰减曲线（弹动渐入）
        if (t === 0) {
            return b;
        }
        if ( (t /= d) == 1 ) {
            return b+c;
        }
        if (!p) {
            p=d*0.3;
        }
        if (!a || a < Math.abs(c)) {
            a = c;
            var s = p/4;
        } else {
            var s = p/(2*Math.PI) * Math.asin (c/a);
        }
        return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
    },
    elasticOut: function(t, b, c, d, a, p){    //正弦增强曲线（弹动渐出）
        if (t === 0) {
            return b;
        }
        if ( (t /= d) == 1 ) {
            return b+c;
        }
        if (!p) {
            p=d*0.3;
        }
        if (!a || a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else {
            var s = p/(2*Math.PI) * Math.asin (c/a);
        }
        return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
    },
    elasticBoth: function(t, b, c, d, a, p){
        if (t === 0) {
            return b;
        }
        if ( (t /= d/2) == 2 ) {
            return b+c;
        }
        if (!p) {
            p = d*(0.3*1.5);
        }
        if ( !a || a < Math.abs(c) ) {
            a = c;
            var s = p/4;
        }
        else {
            var s = p/(2*Math.PI) * Math.asin (c/a);
        }
        if (t < 1) {
            return - 0.5*(a*Math.pow(2,10*(t-=1)) *
                Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
        }
        return a*Math.pow(2,-10*(t-=1)) *
            Math.sin( (t*d-s)*(2*Math.PI)/p )*0.5 + c + b;
    },
    backIn: function(t, b, c, d, s){     //回退加速（回退渐入）
        if (typeof s == 'undefined') {
            s = 1.70158;
        }
        return c*(t/=d)*t*((s+1)*t - s) + b;
    },
    backOut: function(t, b, c, d, s){
        if (typeof s == 'undefined') {
            s = 3.70158;  //回缩的距离
        }
        return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
    },
    backBoth: function(t, b, c, d, s){
        if (typeof s == 'undefined') {
            s = 1.70158;
        }
        if ((t /= d/2 ) < 1) {
            return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
        }
        return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
    },
    bounceIn: function(t, b, c, d){    //弹球减振（弹球渐出）
        return c - Tween['bounceOut'](d-t, 0, c, d) + b;
    },
    bounceOut: function(t, b, c, d){
        if ((t/=d) < (1/2.75)) {
            return c*(7.5625*t*t) + b;
        } else if (t < (2/2.75)) {
            return c*(7.5625*(t-=(1.5/2.75))*t + 0.75) + b;
        } else if (t < (2.5/2.75)) {
            return c*(7.5625*(t-=(2.25/2.75))*t + 0.9375) + b;
        }
        return c*(7.5625*(t-=(2.625/2.75))*t + 0.984375) + b;
    },
    bounceBoth: function(t, b, c, d){
        if (t < d/2) {
            return Tween['bounceIn'](t*2, 0, c, d) * 0.5 + b;
        }
        return Tween['bounceOut'](t*2-d, 0, c, d) * 0.5 + c*0.5 + b;
    }
}