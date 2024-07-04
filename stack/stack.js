



class Stack {
    constructor() {
        this.count = 0, 
        this.items = {}
}
    push(item) {
        this.items[this.count] = item 
        this.count ++ 
    }
    pop() {
        if (this.isEmpty()) return undefined
        this.count--    
        const result = this.items[this.count ]
        delete this.items[this.count]
        return result
    }
    size(){
        return this.count
    }
    isEmpty(){
        return this.count === 0 
    }
    clean() {
        this.count = 0
        this.items ={}
    }
    toString() {
        if(this.isEmpty()) return undefined

        let initial = 0 
        let objString = ''
        while(initial < this.count){
            console.log(initial)
            objString +=  ` ${this.items[initial] }`
            initial ++
        }
        return objString
    }
    peek() {
        const res = this.count
        return this.items[res-1]
    }

  

}
const pilha = new Stack()


function  decimalToBinary(decimal) {
    const remStack = new Stack()
    let rem
    let number = decimal 
    let objString = ''
   
    while(number >  0 ){
        rem = Math.floor( number % 2)
   
        remStack.push(rem)
        number = Math.floor(number / 2)
    }
    while(!remStack.isEmpty()) {
        objString += remStack.pop() 
    }

  return objString
}
 const res = decimalToBinary(233)
 console.log(res)




 function validateParentheses(str) {
    const stack = new Stack();
    let result = '';
   
    
    if (!str.includes('(') || !str.includes(')')) {
        console.log('did not pass');
        return;
    }

    for (let char of str) {
        if (char == '(') {
            stack.push(char);
        } else if (char == ')') {
            if (stack.pop() != '(') {
                result = 'did not pass';
                break;
            }
            result = 'passad'
        }
    }

   

        if(!stack.isEmpty()){
            result = 'did not pass'
        } 
    console.log(result);
}

validateParentheses('leonardo()kjhkds((())))')