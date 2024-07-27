
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
  insert(el, index) {
    if(index >= 0 & index <= this.count){
      let previus
      let current = this.head
      let node = new Node(el)
      if(index == 0) {

        if(this.head !== null) {
          node.next = current
          this.head = node
        }else {
          this.head = node
        }

        
        this.count++
      }else if (index >= 0 & index <= this.count){
        current.next = node
      
    
    
        previus=  this.getElementAt(index -1 )
        current = previus.next
        
        node.next = current
        previus.next = node
     
        
      
      }
      this.count++
    }
  }
  ler() {
    let current = this.head
    if(current.next !== undefined){
      while(current.next !== undefined){

        console.log(current.el)
        current = current.next
      }
    }
  }
}
const list = new LinkedinList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.insert(5, 0)
list.insert(6, 0)

list.push('leo')


console.log(list.size())

console.log(list.getElementAt(2))

function generateData() {
  const list = new LinkedinList

  for(let i =0; i < 5; i++){
    list.insert(`valor atual: ${i}`, i)
  }
list.insert(60, 1)
list.insert(6, 3)
list.insert(60, 6)
  list.ler()
}
generateData()




module.exports = {
  LinkedinList,
  Node,
};
