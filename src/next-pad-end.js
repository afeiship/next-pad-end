(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');
  var repeat = nx.repeat || require('next-repeat');

  /*
  @thanks to:
  https://github.com/jonschlinkert/pad-right
  */

  nx.padEnd = function(str,len,ch){
    var padding = '', diff;
    var length = str.length;
    len = len || length;
    diff = len - length;

    // Breakpoints based on benchmarks to use the fastest approach
    // for the given number of zeros
    if (diff <= 5 && !ch) {
      padding = '00000';
    } else if (diff <= 25 && !ch) {
      padding = '000000000000000000000000000';
    } else {
      return str + repeat(ch || '0', diff);
    }

    return str + padding.slice(0, diff);
  }



  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.padEnd;
  }

}());
