class MedianFinder {
    constructor() {
      this.arr= []
      this.half = Math.abs(arr.length /2)
    }
  
    addnum(num) {
      this.arr.push(num)
      this.arr.sort()
      this.half = Math.abs(arr.length /2)
    }
    findmed(){
      if (this.arr.length == 0) return 0
      if (this.arr.length %2  == 0) {
        return (this.arr[this.half] + this.arr[this.half]) /2
      }
      return this.arr[this.half]
    }
  }
  
  var obj= new MedianFinder()
  obj.addnum([1,2,3])
  console.log(obj.findmed());
  
// class MedianFinder {
//     constructor() {
//         this.a = [];
//     }

//     addNum(num) {
//         this.a.push(num);
//     }

//     findMedian() {
//         this.a.sort((x, y) => x - y);
//         let n = this.a.length;
//         let m = n >> 1;
//         return n & 1 ? this.a[m] : (this.a[m - 1] + this.a[m]) / 2;
//     }
// }