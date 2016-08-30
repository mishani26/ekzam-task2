;const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
	}
	size() {
		var counter = function(node){		
			var result = 0;			
			if(node.left) {
				result += counter(node.left);
			}		
			if(node.right) {
				result += counter(node.right);
			}
			return 1+result;
		}
		if(!this.root) {
			return 0;
		}
		return counter(this.root);	
	}

	isEmpty() {
		if(this.root){
			return false
		}else{
			return true};
		}

		clear() {
			this.root = null;
			this.parentNodes = [];
		}

		insertNode(node) {
			if(this.parentNodes.length == 0){
				this.parentNodes[0] = node;	
				this.root = node;
			}else{
				this.parentNodes[this.parentNodes.length] = node;	
			};
			var arrLast = this.parentNodes.length-1;
			if(arrLast > 0){	
				this.parentNodes[0].appendChild(this.parentNodes[arrLast]);			
			}
			var nodeNumber = this.size()-1;
			if(nodeNumber%2 == 0 && nodeNumber!=0){
				this.parentNodes.shift();
			};
		}
		shiftNodeUp(node) {
			if(node.parent){
				if(node.priority > node.parent.priority){
					if(node.parent == this.root){
						this.root = node;
					}
					for(var i=0;i<this.parentNodes.length;i++){
						if(this.parentNodes[i] == node){	
							for(var j=0;j<this.parentNodes.length;j++){
								if(this.parentNodes[j] == node.parent){	
									this.parentNodes[i] = node.parent;
									this.parentNodes[j] = node;
								}
							};
							this.parentNodes[i] = node.parent;
						}
					};
					node.swapWithParent();
					if(node!=null){
						this.shiftNodeUp(node);
					}
				}	
			}
		}

		shiftNodeDown(node) {
			if(node.left && node.right){
				if(node.priority > node.left.priority && node.priority > node.right.priority){
					return;
				}
				if(node.left.priority > node.right.priority){
					this.shiftNodeUp(node.left);
					this.shiftNodeDown(node);
				}else if(node.left.priority < node.right.priority){
					this.shiftNodeUp(node.right);
					this.shiftNodeDown(node);
				}
			}else if(node.left && !node.right){
				if(node.priority > node.left.priority){
					return;
				}else{
					this.shiftNodeUp(node.left);	
					this.shiftNodeDown(node);
				};
			}
		}
		detachRoot() {
			let k = this.root;
			if(this.size() == 1){
				this.root = null;			
			}else if(this.size() == 2){
				this.parentNodes.shift();
			};
			return k;
		}

		restoreRootFromLastInsertedNode(detached) {
			if(this.root){

				var last = this.parentNodes.length-1,
				size = this.size(),
				lastChildParent = null,
				isRightChild = false;
				if(this.parentNodes[last].parent) {
					lastChildParent = this.parentNodes[last].parent;
					if(lastChildParent.right == this.parentNodes[last]){
						isRightChild = true;
					}
				}
				if(size == 2 ){
					this.parentNodes[0].remove();
					this.root = this.parentNodes[0];
					this.parentNodes.unshift(this.parentNodes.pop());
				}
				else if(size == 3 ){
					this.parentNodes[1].remove();
					this.parentNodes[1].left = detached.left;
					this.root = this.parentNodes[1];
					detached.left.parent = this.root;
					this.parentNodes.unshift(this.parentNodes.pop());
					return;

				}
				else{
					this.parentNodes[last].remove();
					this.parentNodes[last].left = detached.left;
					this.parentNodes[last].right = detached.right;
					this.root = this.parentNodes[last];	
					if(detached.left){
						detached.left.parent = this.root;
					};
					if(detached.right){
						detached.right.parent = this.root;
					}; 
					if(size > 2 && size % 2 == 0){
						this.parentNodes.pop();
					};	
				}
				if(isRightChild){
					this.parentNodes.unshift(lastChildParent);
					this.parentNodes.pop()

				}

			};
		}
		pop() {
			if(this.root){
				let detached = this.detachRoot();
				if(this.parentNodes){
					this.restoreRootFromLastInsertedNode(detached);
					if(this.root){
						this.shiftNodeDown(this.root);
					}
				}
				return detached.data;
			}
		}
		push(data, priority) {
			let NewNode = new Node(data, priority);
			this.insertNode(NewNode);
			this.shiftNodeUp(NewNode);
		}
	}			
	module.exports = MaxHeap;