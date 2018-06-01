
// Create Node of LinkedList
function Node(data) {
  this.node = data;
  this.next = null;
}

function LinkedList(list) {this.head = list || null;}

LinkedList.prototype.lengthOfNodeList = function(head) {
  if (this.head === null) {console.log("lengthOfNodeList: uh oh! head is null"); return null;}
  let iterator = head;
  let count = 0;
  while(iterator) {
    count++;
    iterator = iterator.next;
  }
  console.log(`length is ${count}`);
  return count;
}

LinkedList.prototype.insert = function(data) {
  // check to see if linked list is empty
  if (this.head === null) {
      this.head = new Node(data);
  }
  else { // has content
    let iterator = this.head;
    while (iterator.next) { iterator = iterator.next; }
    // we're at the last node here
    iterator.next = new Node(data);
  }
}

LinkedList.prototype.printAll = function() {
  console.log(` \n--- printing list ---`)
  if (this.head === null) return null;
  let list = this.head;
  while(list) {
    if (list.next) process.stdout.write(`${list.node} -> `);
    else process.stdout.write(`${list.node}`)
    list = list.next;
  }
}

LinkedList.prototype.syncLocateMidPoint = function(headOfList, callback) {
    console.log("--- locateMidPoint ---");
    let count = 0;
    let length = this.lengthOfNodeList(headOfList)
    let mid = Math.floor(length/2);
    let beforeMidNode = headOfList;
    let trailer;
    while (count < mid - 1) {
      beforeMidNode = beforeMidNode.next;
      count++;
    }
    callback(beforeMidNode.next);
    beforeMidNode.next = null;
}

// list is a node
LinkedList.prototype.mergeSort = function(headOfList) {
    if(headOfList.next === null) {return headOfList;}
    let rightPointer;

    this.syncLocateMidPoint(headOfList, function(midNode) {
      rightPointer = midNode;
    });

    let leftPointer = headOfList;
    return LinkedList.prototype._mergeSort(
      LinkedList.prototype.mergeSort(leftPointer),
      LinkedList.prototype.mergeSort(rightPointer)
    );
}


LinkedList.prototype.last = function(nodeHead) {
  if (nodeHead === null) {
    console.log("Error! no elements");
    return null;
  }
  let lastPtrInResult = nodeHead;
  while (lastPtrInResult.next) { lastPtrInResult = lastPtrInResult.next;}
  return lastPtrInResult;
}

// takes in left and right nodes
LinkedList.prototype._mergeSort = function(left, right) {
  let result = new LinkedList();
  let pointerLeft = left;
  let pointerRight = right;

  // both must be available
  while (pointerLeft && pointerRight) {
    let temp;
    if (pointerLeft.node < pointerRight.node) {
      result.insert(pointerLeft.node);
      temp = pointerLeft;
      pointerLeft = pointerLeft.next;
    } else {
      result.insert(pointerRight.node);
      temp = pointerRight;
      pointerRight = pointerRight.next;
    }
    temp.next = null;
  }

  let lastNode = LinkedList.prototype.last(result.head);
  if (pointerLeft) { lastNode.next = pointerLeft; }
  if (pointerRight) { lastNode.next = pointerRight; }
  return result.head;
}


let a = new LinkedList();
a.insert(1);
a.insert(10);
a.insert(5);
a.insert(20);
a.insert(88);
a.insert(-54);
a.insert(8);
a.insert(-68);
a.insert(-88);
a.insert(-77);
a.insert(-12);

a.head = a.mergeSort(a.head);
a.printAll();
