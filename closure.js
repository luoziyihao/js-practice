'use strict'

/**
 * 函数其实并没有立即执行, 只是持有引用, 执行的时候 i 的值已经是 5 了
 */
let foo1 = () => {
    for (var i = 0; i < 5; i++) {
        setTimeout(function() {
            console.log(i);
        }, 10 * i);
    }
};

foo1 = () => {
    for (var i = 0; i < 5; i++) {
        setTimeout(function() {
            const j = i;
            console.log(j);
        }, 10 * i);
    }
};

/**
 * 外层函数立即执行, 确定了 i的值
 */

let foo2 = () => {
    for (var i = 0; i < 5; i++) {
        ((i) => {
            setTimeout(function() {
                console.log(i);
            }, i * 10);
        })(i);
    }
};

/**
 * 持有引用, 同 foo1
 */
let foo3 = () => {
    for (var i = 0; i < 5; i++) {
        (() => {
            setTimeout(function() {
                console.log(i);
            }, i * 10);
        })();
    }
};

/**
 * i 在外层作用域没有值, undefined
 */
let foo4 = () => {
    for (var i = 0; i < 5; i++) {
        (() => {
            setTimeout((i) => {
                console.log(i);
            }, i * 10);
        })();
    }
};

/**
 * setTimeout 在 浏览器断可以传入 将代码片段转换成的字符串 或者 函数对象, 如果是 一个立即执行的函数, 因为函数没有返回值, 那么对应的是 undefined
 * 这时候会立即打印出 1,2,3,4,5
 *
 * 在 server端会直接报错, 因为 server 端的 setTimeout 只能传递 函数
 */
let foo5 = () => {
    for(let i = 0; i < 5; i++) {
        setTimeout((i => console.info(i))(i), i * 1000);
    }
};
// foo();

setTimeout(function() {
    console.log(1)
}, 0);
new Promise(function executor(resolve) {
    console.log(2);
    for( var i=0 ; i<10000 ; i++ ) {
        i == 9999 && resolve();
    }
    console.log(3);
}).then(function() {
    console.log(4);
});
console.log(5);