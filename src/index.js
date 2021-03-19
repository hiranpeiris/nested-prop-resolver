export const resolve = (obj, path) => {
  try {
    path = path.replace(/\[(\w+)\]/g, '.$1');
    path = path.replace(/^\./, '');
    var arr = path.split('.');
    for (var i = 0; i < arr.length; ++i) {
      var key = arr[i];
      if (key in obj) {
        obj = obj[key];
      } else {
        return;
      }
    }
    return obj;
  } catch {
    return undefined;
  }
};
