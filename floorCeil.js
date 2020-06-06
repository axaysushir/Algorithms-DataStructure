function ceiling(val) {
    return recurseCeiling(root, null, val)
  }
  
  function floor(val) {
    return recurseCeiling(root, null, val)
  }
  
  function recurseCeiling(node, ceil, value) {
    if (node === null) return ceil;
    if (value <= node.item) {
      return recurseCeiling(node.left, node.item, value)
    }
    return recurseCeiling(node.right, ceil, value)
  }
  
  function recurseFloor(node, floor, value) {
    if (node === null) return floor;
    if (value < node.item) {
      return recurseFloor(node.left, floor, value)
    }
    return recurseCeiling(node.right, node.item, value)
  }

// iterative
let ceil, floor

function recurseCeilingFloor(node,ceil, value, floor){
    while (node != null) {
        if (value <= node.item){
            ceil = node.item;
            node = node.left
        } else node = node.right

        if (value < node.item) {
            node = node.left;
        } else {
            floor = node.item;
            node = node.right;
        }
        return floor
    }
    return ceil
}

let value = [2,4,6,8,10,12,14]
let node = 5
let x = recurseCeilingFloor(node,ceil, value, floor)