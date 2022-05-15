var arr = [1, 2, 3, 4, 5];

// polyfilled map function

Array.prototype.myMap = function (callback) {
  //console.log(this);
  let ans = [];
  for (var i = 0; i < this.length; i++) {
    ans.push(callback(this[i], i, this));
  }
  return ans;
};

var result = arr.myMap((item) => {
  return item * 5;
});
console.log(result);
