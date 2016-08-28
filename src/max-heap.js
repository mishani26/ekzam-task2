const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root=null;
		this.parentNodes=[];
	}

	push(data, priority) {

	}

	pop() {
		
	}

	detachRoot() {
		
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		
	}

	isEmpty() {
		if(this.root!=null){
			return false
		}
		else{
			return true
		};
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
	}

	insertNode(node) {
		if(this.parentNodes.length==0){
			this.root=node;
			this.parentNodes[0] = node;
		}
		for (var i = 0; i < node.length; i++) {
			if (i=0) {
				this.root=this.parent;
			}	
			else if(!(i*2+1)%2){
				this.root=this.left;
			}
			else if((i*2+1)%2){
				this.root=this.right;
			}
		}
	}

	shiftNodeUp(node) {

	}

	shiftNodeDown(node) {

	}
}

module.exports = MaxHeap;
