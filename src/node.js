class Node {
	constructor(data, priority) {
		this.data=data;
		this.priority=priority;
		this.parent=null;
		this.left=null;
		this.right=null;
	}

	appendChild(node) {
		if (this.left==null) {
			this.left=node;
		}
		else if	(this.right==null) {
			this.right=node;
		}	
	}

	removeChild(node) {
		if (this.left==node) {
			this.left=null;
		}
		else if	(this.right==node) {
			this.right=null;
		}
		else
			throw "ERROR";	
	}

	remove() {
		if (this.right!=null) {
			this.data.removeChild(this.right);
		}
		else if (this.left!=null) {
			this.data.removeChild(this.left);
		} 
	}

	swapWithParent() {
		
	}
}

module.exports = Node;
