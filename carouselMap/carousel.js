// 获取元素
let main = document.querySelector('.main')
let [img, backBtn, forwordBtn] = document.querySelector('.main').children;

// 绑定事件
backBtn.addEventListener('click', (event) => {
    change(event);
})
forwordBtn.addEventListener('click', (event) => {
    change(event);
})

// 封装函数
let index = 0;
function change(event) {
    // 把src属性定义为一个数组
    arrSrc = ['https://typora-iamge.oss-cn-beijing.aliyuncs.com/adam-kool-ndN00KmbJ1c-unsplash.jpg', 'https://typora-iamge.oss-cn-beijing.aliyuncs.com/david-marcu-78A265wPiO4-unsplash.jpg', 'https://typora-iamge.oss-cn-beijing.aliyuncs.com/henry-be-IicyiaPYGGI-unsplash.jpg', 'https://typora-iamge.oss-cn-beijing.aliyuncs.com/qingbao-meng-01_igFr7hd4-unsplash.jpg', 'https://typora-iamge.oss-cn-beijing.aliyuncs.com/tim-swaan-eOpewngf68w-unsplash.jpg'];
    // 判断触发事件的对象
    if (event.srcElement === backBtn) {
        if (index === 0) {
            index = arrSrc.length - 1;
            img.src = arrSrc[index];
        } else {
            index--;
            img.src = arrSrc[index];
        }
    } else {
        if (index === arrSrc.length - 1) {
            index = 0;
            img.src = arrSrc[index];
        } else {
            index++;
            img.src = arrSrc[index];
        }
    }
}
