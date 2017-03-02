<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>

</body>
</html>
<script>
  'use strict'
  var s = 'hello, world';
  var arr = ['小明', '小红', '大军', '阿黄'];
  var person = {
    name : 'kimi',
    age : 13
  };
//  alert(person.name)
//  delete person["name"]
//  alert(person.name)

  console.log(!! null);
  console.log(!! undefined);
  console.log(!! 0)
  console.log(!! NaN)
  console.log(!! '')
  console.log(!! "")
  console.log(!! "".length)
  console.log(!! 3)

  var arr = [111, 222, 333, 444];
  for (var i in arr) {
    console.log(i === 0)
    console.log(i === '0')
    console.log(arr[i])
  }

  delete arr[3]
  console.log("index of")
  console.log(arr.indexOf(2222))
  console.log(arr)

  var n = 0;
  do {
    console.log(n)
    n += 2;
  } while (n < 4);

  var obj = {
    "1" : 1,
    2.0 : 2,
    "3" : 3
  }
  console.log(obj)
  console.log(JSON.stringify(obj))

  var map = new Map ([["t1", "t1"], ["t2", "t2"], [3, 111]])
  map.set('1', 2)

  console.log(map)
  console.log(JSON.stringify(map))
  console.log(map.has('3'))
  console.log(map.has(3))
  map.set(3.0, 123)
  console.log(map)

  var set = new Set([1, "1", 2, 4])
  set.add('2')
  set.delete("1")
  set.delete(6)
  console.log(set)
  console.log("##########")
  for(var obj of set) {
    console.log(obj)
  }
  console.log("#####map#####")
  for(var obj of map) {
    console.log(obj)
  }

  console.log("a##########")
  var a = [111]
//  a[1] = "1111"
  a.name = 'timi'
  a.age = 111
  a[2] = "2222"
  console.log(a)
  console.log("##########")
  for (var obj in a) {
    console.log(obj)
  }
  console.log("##########")
  for (var obj of a) {
    console.log(obj)
  }

  console.log("##########")
  var a = ['A', 'B', 'C']
  a.forEach(function (e, index, arr) {
    console.log(e)
    console.log(index)
    console.log(arr)
  })

  console.log("##########")
  var s = new Set(['A', 'B', 'C'])
  s.forEach(function (e, e2, s) {
    console.log(e)
    console.log(e2)
    console.log(s)
  })

  console.log("##########")
  var m = new Map([[1, 1], [2, 2], ['3', '4']])
  m.forEach(function (v, k, m) {
    console.log(v)
    console.log(k)
    console.log(m)
  })

  console.log("##########")
  function abs(a) {
    if (a >= 0) {
      return a;
    } else {
//      return -a;
      return -1 * a;
    }
  }
  console.log(abs(111))
  console.log(abs(-111))
  console.log(abs(0))
  console.log(abs("0"))

  console.log("##########")
  var APP = {};
  APP.aaa = 'aaa'
  console.log(APP)


  console.log("##########")
  const PI = 1;
//  PI = 3.14;
  console.log()


  console.log("##########")
  function foo() {
    var x = 1;
    function b() {
      var y = x + 1;
    }
    var z = y + 1; //ReferenceError: y is not defined
  }
  foo();

  console.log("##########")
  function foo() {
    var x = 'hello, ' + y ;
    console.log(x);
    var  y = 'kitty'; // rise the price of y design
  }
  foo();

  console.log("##########")
  function foo() {  // design all para before use
    var
      x = 1,
      y = 2,
      z = y + 1,
      k,j;
    for (k = 0; k < 100; k++) {

    }
  }

  console.log("##########")
  window.console.log('log by window.');
  var oldConsole = window.console;
  var log = oldConsole.log;
  window.console.log = function () {
    //do nothing
  }
  console.log('i am new concole');
  window.console = oldConsole;
  console.log('haha, i come back.');
  window.console.log = oldConsole.log;
  window.console.log('haha, i come back.2');
  window.console.log = log;
  window.console.log('haha, i come back.3');
  console.log('haha, i come back.3');


  console.log("##########")
  var MYAPP = {};
  MYAPP.name = 'myapp';
  MYAPP.version = '1.0';
  MYAPP.foo = function () {
    return 'foo';
  }

  console.log("##########")
  function foo() {
    for(var i = 0; i < 10; i++) {

    }
    console.log(i);
//    foo();  // no end circlie
  }
  foo();
  function foo() {
    for (let i = 0; i < 10; i ++) { // let local para

    }
//    console.log(i);
  }
  foo();

  console.log("##########")
  const PI = 3.14;  //final static
  //  PI = 1;

</script>
