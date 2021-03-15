module.exports = function check(str, bracketsConfig) {
  const open = ["(", "{", "["];
  const close = [")", "}", "]"];
  const same = ["|"];

  bracketsConfig.forEach(function (arr) {
      if (arr[0] != arr[1]) {
          open.push(arr[0]);
          close.push(arr[1]);
      } else {
          same.push(arr[0]);
      }
  });

  let stack = [];
  let z = str.toString().split("");
  for (let i = 0; i < z.length; i++) {
      if (open.includes(z[i])) {
          stack.push(z[i]);
      } else if (close.includes(z[i])) {
          if (open.indexOf(stack[stack.length - 1]) == close.indexOf(z[i])) {
              stack.pop();
          } else {
              return false;
          }
      } else if (same.includes(z[i])) {
          if (stack[stack.length - 1] == z[i]) {
              stack.pop();
          } else if (!stack.includes(z[i])) {
              stack.push(z[i]);
          } else {
              return false;
          }
      } else {
          return false;
      }
  }
  return stack.length == 0 ? true : false;
};
