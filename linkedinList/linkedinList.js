
const {defaultEqauls} = require('../utils/defaultEquals')
class Node {
  constructor(el) {
    this.el = el;
    this.next = undefined;
  }
}

class LinkedinList {
  constructor(equalsFn = defaultEqauls) {
    this.count = 0;
    this.head = undefined;
    this.equalsFn = equalsFn
  }

  push(el) {
    let node = new Node(el);
    let current;
    if (this.head == null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next !== undefined) {
        current = current.next;
      }
      current.next = node;
    }
    this.count++;
  }
  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let previus;
      let current = this.head;
      if (index == 0) {
        previus = current;

        this.head = current.next;
        this.count--
        return previus.el;
      } else {
        previus = this.getElementAt(index -1 )
        current = previus.next
        previus.next = current.next
        this.count--
    }
    
    return current.el

    
    }
    return undefined;
  }

  isEmpty() {
    return this.count === 0
  }
  size( ){
    return  this.count - 1
  }
  indexOf(el) {
    if(this.isEmpty &&  el == undefined) return -1

    let current = this.head 
    for(let i = 0; i < this.count; i++ ) {
       if(this.equalsFn(current.el, el) ) {
        return i
       }
       current = current.next
    }
    return -1

  }
  getElementAt(index) {
    if(index >= 0 , index < this.count){
        let current = this.head
        for(let i = 0; i <= this.count; i++) {
            if(this.equalsFn(i, index) ){
                return current
            }
        
        }
    }
    return undefined
  }
}
const list = new LinkedinList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);

list.push('leo')

console.log(list.isEmpty())
console.log(list.size())
console.log(list.indexOf('leo'))
console.log(list.getElementAt(2))
console.log(list.removeAt(1))

console.log(list.size(), 'fora')
module.exports = {
  LinkedinList,
  Node,
};
