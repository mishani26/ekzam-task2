class Node {
	constructor(data, priority) {
		this.data=data;
		this.priority=priority;
		this.parent=null;
		this.left=null;
		this.right=null;
	}

	appendChild(node) {
		this.parent=this.data;
		if (this.left==null) {
			this.left=node;
			node.parent=this;
		}
		else if	(this.right==null) {
			this.right=node;
			node.parent=this;
		}	
	}

	removeChild(node) {
		this.parent=this.data;
		if (this.right==node) {
			this.right=null;
			node.parent=null;
		}
		else if	(this.left==node) {
			this.left=null;
			node.parent=null;
		}
		else
			throw "ERROR";	
	}

	remove() {
		if (this.parent){
			this.parent.removeChild(this);
		} 
	}

	swapWithParent() {
		if (this.parent) {
			this.appendChild(this.parent);
		}
	}
}

module.exports = Node;
