
  'use strict'

  console.log("##########")
  function abs(x) {
    info(x)
    return -x;
  }
  console.log(abs());
  console.log(JSON.stringify(abs()));
  info(abs());
  info(abs(-1));
  info(abs("-1"));
  info(abs("2"));

  console.log("##########");
  function abs2(x) {
    info(typeof x);
    if (typeof x !== 'number') {
      throw "Not a Number";
    }
    if (x >= 0) {
      return x;
    } else {
      return -x;
    }
  }
  info(abs2(1));
  info(abs2(-1));
//  info(abs2("-1"));
//  info(abs2("2"));
//  info(abs2("a"));
  info(abs2(-2));

  console.log("arguments##########")
  function foo(x) {
    info(x);
    if (arguments.length > 0) {
      info("first arg", arguments[0])
    }
    for(let obj of arguments) {
      info("bianli", obj)
    }
  }
  foo()
  foo(1,2)

  console.log("##########")
  function foo(a, b, c) {
    if (arguments.length === 2) {
      // real, c is undefined
      c = b;
      b = null;
    }
  }

  console.log("##########")
  function foo(a, b, ... arr) {
    info(a);
    info(b);
    info(arr)
    arr.forEach(function (e, i, arr) {
      info(e);
    });
  }
  foo(2)
  foo(1, 2)
  foo(1, 2, 3, 4)

  console.log("##########")
  info(1, 2, 3, 4)

  console.log("##########")
  var xiaoming = {
    name: 'ming',
    birth: 1990,
    age: function () {
      var y = new Date().getFullYear();
      return y - this.birth;
    }
  }
  console.log(JSON.stringify(xiaoming));
  info(xiaoming);
  info(xiaoming.name)
  info(xiaoming.age)
  info(xiaoming.age())

  console.log("##########")
//  info(this)
  console.log(this)

  console.log("##########")
//  var testfunc: function () { only function in obj
//      return 1   ;
//  }

  console.log("##########")
  var xiaoming = {
    birth: 10,
    name: "ming",
    age: function () {
      var y = new Date().getFullYear();
      return y - this.birth;
    }
  }
  info(xiaoming.age)
  info(xiaoming.age())

  console.log("##########")
//  var xiaoming = {
//    birth: 1990,
//    name: "xiaoming",
//    age: function () {
//      function getAgeFromBirth() {
//        var y = new Date().getFullYear();
//        info(this);
//        return y - this.birth;
//      }
//      return getAgeFromBirth();
//    }
//  }
  info(xiaoming.age());

  console.log("##########")
    var xiaoming = {
      birth: 1990,
      name: "xiaoming",
      age: function () {
        var that = this;
        function getAgeFromBirth() {
          var y = new Date().getFullYear();
          return y - that.birth;
        }
        return getAgeFromBirth();
      }
    }
    info(xiaoming.age())

  console.log("apply##########")

