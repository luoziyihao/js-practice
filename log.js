/**
 * Created by luoziyihao on 7/25/16.
 */
/* log info */
// function log() {
//   if (arguments.length === 0) {return;}
//   var info = '';
//   arguments.forEach(function (e, i, arr) {  //forEach is inner for iterator, but may can't be used. ES 5.1
//       info += (' | ' + e);
//   });
//   console.info(info)
// }

function toStr(obj) {
  var str = JSON.stringify(obj)
  return str? str : obj;  // if stringify failed, str is undefined, which is to be seen false.  so return origin obj.
}

function infoWithOpr(formatOpr, iter) {
  if (iter.length === 0) {return;}
  var info = '';
  for (let e of iter){   //ES 6
    info += (' | ' + formatOpr(e));
  };
  // iter.forEach(function (e, i, arr) {
  //   info += (' | ' + formatOpr(e))
  // })
  console.info(info)
}

function info() {
  infoWithOpr(toStr, arguments)
}

