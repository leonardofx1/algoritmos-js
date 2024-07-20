

class Queue {
    constructor() {
        this.count = 0
        this.lowestCount = 0
        this.items = {}
    }

    size() {
        return this.count - this.lowestCount
    }
    peek() {
        if (this.isEmpty()) return undefined
        return this.items[this.lowestCount]
    }
    enqueue(item) {
        this.items[this.count] = item
        this.count++
    }
    dequeue() {
        if (this.isEmpty()) return  undefined
        let result = this.items[this.lowestCount]
        delete this.items[this.lowestCount]
        this.lowestCount++
        return result
    }
    isEmpty() {
        return this.count - this.lowestCount == 0
    }
    toString(){
        if(this.isEmpty()) return ''
        let lowest = this.lowestCount +1
        let objString = `${this.items[this.lowestCount]}`
        while(lowest < this.count) {
            objString += `, ${this.items[lowest]}`
            lowest++
        }
        return objString
    }
    clean() {
        this.count = 0
        this.lowestCount = 0
        this.items = {}
    }
}


function managerCustomer() {
    const queue = new Queue();

    function addCustomer(customer) {
        if (customer.length) {
            queue.enqueue(customer);
            console.log(`Added customer: ${customer}`);
        }
    }

    function displayQueue() {
        console.log(`Current queue: ${queue.toString()}`);
    }

    function serveCustomer() {
        if (queue.isEmpty()) {
            console.log("No customers to serve.");
            return undefined;
        }
        const served = queue.dequeue();
        console.log(`Served customer: ${served}`);
    }

    return { addCustomer, displayQueue, serveCustomer };
}

const customerManager = managerCustomer();
customerManager.addCustomer('Marcos');
customerManager.addCustomer('Leonardo');
customerManager.displayQueue();
customerManager.serveCustomer(); 
customerManager.displayQueue(); 
customerManager.serveCustomer();
customerManager.displayQueue(); 
customerManager.serveCustomer();
