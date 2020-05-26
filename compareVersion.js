var compareVersion = function (version1, version2) {
  let a = version1.split(".");
  let b = version2.split(".");

  for (let i = 0; i < a.length || i < b.length; i++) {
    let first = i < a.length ? parseInt(a[i], 10) : 0;
    let second = i < b.length ? parseInt(b[i], 10) : 0;

    if (first < second) return -1;
    if (first > second) return 1;
  }
  return 0;
};

let version1 = "7.5.3";
let version2 = "7.5.3.5";
console.log(compareVersion(version1, version2));
