// numberExtend.js

//功能点:1、加减乘除 2、支持链式调用 

// console.log((0.1).add(0.2), (0.1).sub(0.002, 1), (0.1).mul(0.002, 1), (0.0001).div(0.003, 1));

// arg:第二个数字  acc:保存小数位
(function(Number) {
    // 加法
    Number.prototype.add = function(arg, acc) {
      var r1, r2, m;
      try {
        r1 = this.toString().split('.')[1].length;
      } catch (e) {
        r1 = 0;
      }
      try {
        r2 = arg.toString().split('.')[1].length;
      } catch (e) {
        r2 = 0;
      }
      m = Math.pow(10, Math.max(r1, r2));
      var a = parseInt(this * m + 0.5);
      // 兼容减法
      var b = arg < 0 ? parseInt(arg * m) : parseInt(arg * m + 0.5);
      var result = (a + b) / m;
      // console.log('add', arg, arg * m, a, b, m);
      // 小数位数处理
      if (acc) {
        return Number(Number(result).toFixed(parseInt(acc)));
      } else {
        return result;
      }
    };
    // 减法
    Number.prototype.sub = function(arg, acc) {
      return this.add(-arg, acc);
    }; 
    // 乘法
    Number.prototype.mul = function(arg, acc) {
      var m = 0;
      var s1 = this.toString();
      var s2 = arg.toString();
      try {
        m += s1.split('.')[1].length;
      } catch (e) {
        // console.log('catch mul', e);
      }
      try {
        m += s2.split('.')[1].length; // m是累加结果
      } catch (e) {}
      var result =
        (Number(s1.replace('.', '')) * Number(s2.replace('.', ''))) /
        Math.pow(10, m);
      // 小数位数处理
      if (acc) {
        return Number(Number(result).toFixed(parseInt(acc)));
      } else {
        return result;
      }
    }; 
    // 除法
    Number.prototype.div = function(arg, acc) {
      var r1, r2, m;
      try {
        r1 = this.toString().split('.')[1].length;
      } catch (e) {
        r1 = 0;
      }
      try {
        r2 = arg.toString().split('.')[1].length;
      } catch (e) {
        r2 = 0;
      }
      // 解决分子分母含有0的情况
      if (!this || !arg) {
        return 0;
      }
  
      m = Math.pow(10, Math.max(r1, r2));
      var a = parseInt(this * m + 0.5);
      var b = parseInt(arg * m + 0.5);
      var result = a / b;
      // 小数位数处理
      if (acc) {
        return Number(Number(result).toFixed(parseInt(acc)));
      } else {
        return result;
      }
    };
  })(Number);
  
  
  