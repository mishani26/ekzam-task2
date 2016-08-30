const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		this.maxSize = maxSize||30;
		this.heap = new MaxHeap;
	}

	push(data, priority) {
		if(this.heap.size() >= this.maxSize){
			throw "ERROR";
		}else{
			this.heap.push(data,priority);
		}
	}


	shift() {
		if(this.isEmpty()){
			throw "ERROR";
		}else{
			return this.heap.pop();
		}

	}

	size() {
		return this.heap.size();
	}

	isEmpty() {
		if(this.heap.size() == 0){
			return true;
		}else{
			return false;
		};
	}
}

module.exports = PriorityQueue;
