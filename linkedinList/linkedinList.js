const { defaultEqauls } = require("../utils/defaultEquals");
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
    this.equalsFn = equalsFn;
  }

  push(el) {
    let node = new Node(el);
  
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
        this.count--;
        return previus.el;
      } else {
        previus = this.getElementAt(index - 1);
        current = previus.next;
        previus.next = current.next;
        this.count--;
      }

      return current.el;
    }
    return undefined;
  }

  isEmpty() {
    return this.count === 0;
  }
  size() {
    return this.count - 1;
  }
  indexOf(el) {
    if (this.isEmpty && el == undefined) return -1;

    let current = this.head;
    for (let i = 0; i < this.count; i++) {
      if (this.equalsFn(current.el, el)) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }
  getElementAt(index) {
    if ((index >= 0, index < this.count)) {
      let current = this.head;
      for (let i = 0; i <= this.count; i++) {
        if (this.equalsFn(i, index)) {
          return current;
        }
        current = current.next;
      }
    }
    return undefined;
  }
  insert(el, index) {
    if ((index >= 0) & (index <= this.count)) {
      let previus;
      let current = this.head;
      let node = new Node(el);
      if (index == 0) {
        if (this.head == undefined) {
          this.head = node;
        } else {
          node.next = current;
          this.head = node;
        }

        this.count++;
      } else {
        previus = this.getElementAt(index - 1);
      

        current = previus.next;

        node.next = current;
        previus.next = node;
      }
      this.count++;
    }
    return undefined;
  }
  ler() {
    if(this.isEmpty()) {
      return ' list is empty'}
      let objString = `${this.head.el}`
      let current = this.head.next
      for( let i =1; i < this.count; i++) {
        if(current.next !== undefined){
          objString += `, ${ current.el}`
         
          current = current?.next
        }
        
      }
      objString += `, ${current.el}`
   
      console.log(this.count , 'fora')
      return objString
  }
  pegar (){
    return this.head
  }
}

function generateData() {
  const list = new LinkedinList();

  for (let i = 0; i < 5; i++) {
    list.insert(` ${i}`, i);
  
  }


  console.log(list.ler())
 
}
generateData();

module.exports = {
  LinkedinList,
  Node,
};
