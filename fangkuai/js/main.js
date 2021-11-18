// 入口文件 一般只有一个 
// 开始执行代码  调用box.js 和 tool.js 文件

var map = document.querySelector('.map');
// 生成10个盒子，并且随机生成颜色
var arr = []; //创建数组是为了后面 遍历数组每一个元素 然后调用random方法
for (var i = 0; i < 10; i++) {
    // 声明变量 随机获取颜色
    var r = Tool.getRandom(0, 255); 
    var g = Tool.getRandom(0, 255);
    var b = Tool.getRandom(0, 255);
    // 声明构造函数
    var box = new Box({
        backgroundColor: 'rgb(' + r + ',' + g + ',' + b + ')'
    });
    // 调用Box的render 方法
    box.render(map);
    //将得到的是个盒子依次推入（加入）到数组中去
    arr.push(box);
}

// 定时随机生成盒子的位置
setInterval(random, 500);

random(); //页面加载完成后也要调用一下random()

// 单独声明定时器，可以让setInterval() 直接调用
function random() {
    // forEach() 是数组的一个方法 对数组中的每个元素执行一次给定的函数 这里是给每个元素执行 随机函数random()
    arr.forEach(function (item) {
        item.random();
    })
}