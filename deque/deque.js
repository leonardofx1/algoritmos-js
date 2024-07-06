
class Deque {
    constructor() {
        this.count = 0
        this.lowestCount = 0
        this.items = {}
    }
    isEmpty() {
        return this.count - this.lowestCount == 0
    }
    removeFront() {
        if (this.isEmpty()) return undefined
        const result = this.items[this.lowestCount]
        delete this.items[this.lowestCount]
        this.lowestCount++
        return result
    }
    peekFront() {
        if (this.isEmpty()) return undefined
        return this.items[this.lowestCount]
    }
    peekBack() {
        if (this.isEmpty()) return undefined
        return this.items[this.count - 1]

    }
    removeBack() {
        if (this.isEmpty()) return undefined
        const result = this.items[this.count - 1]
        delete this.items[this.count - 1]
        this.count--
        return result
    }
    addFront(item) {
        if (this.isEmpty()) {
            this.addBack(item)
        } else if (this.lowestCount > 0) {
            this.lowestCount--
            this.items[this.lowestCount] = item
        }
        else {

            for (let i = this.count; i > 0; i--) {
                this.items[i] = this.items[i - 1]

            }
            for (let i = this.count; i > 0; i--) {
                this.items[this.count] = this.items[i - 1]

            }

            this.count++
            this.lowestCount = 0
        }
        this.items[0] = item


    }
    addBack(item) {
        this.items[this.count] = item
        this.count++
    }
    size() {
        console.log(this.items, ' size')
        return this.count - this.lowestCount
    }
    toString() {
        if (this.isEmpty()) return ''
        let objString = `${this.items[this.lowestCount]}`
        for (let i = this.lowestCount + 1; i < this.count; i++) {


            objString += `, ${this.items[i]}`
            console.log(objString)
        }
        return objString
    }
}

const deque = new Deque()
deque.addFront('leonardo')
deque.addFront('leonao')
deque.addFront('leonardo')
deque.addFront('leonardo')
deque.addFront('marcos')
deque.addFront('marcos')
console.log(deque.size())
console.log(deque.toString())

