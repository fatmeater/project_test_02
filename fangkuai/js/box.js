var _position = 'absolute'; //变量前面加下划线的一般是私有的
var _map = null;
// var _div = null;

function Box(options) {
    options = options || {};
    this.backgroundColor = options.backgroundColor || 'red';
    this.width = options.width || 20;
    this.height = options.height || 20;
    this.x = options.x || 0;
    this.y = options.y || 0;
    this._div = null; //加下划线是不想让外部访问，外部尽量不要使用
}

// 把盒子对象渲染到地图中去  render
Box.prototype.render = function (map) {
    _map = map; //是为了 random方法 能调用传进来的map参数
    // 动态创建div，添加到map里面
    var div = document.createElement('div');
    // 设置一个私有的_div变量  是为了 random方法 能调用传进来的map参数
    this._div = div; 
 
    map.appendChild(div);
    // 设置样式
    div.style.backgroundColor = this.backgroundColor;
    div.style.width = this.width + 'px';
    div.style.height = this.height + 'px';
    div.style.left = this.x + 'px';
    div.style.top = this.y + 'px';
    div.style.position = _position;
}

// random 方法 随机生成盒子的位置
Box.prototype.random = function () {
    if (!_map) return;
    this.x = Tool.getRandom(0, _map.offsetWidth / this.width - 1) * this.width;
    this.y = Tool.getRandom(0, _map.offsetHeight / this.height - 1) * this.height;
    this._div.style.left = this.x + 'px';
    this._div.style.top = this.y + 'px';
}
