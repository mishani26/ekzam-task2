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
		if (this.right==node) {
			this.right=null;
		}
		else if	(this.left==node) {
			this.left=null;
		}
		else
			throw "ERROR";	
	}

	remove() {
		delete this.data;
		if (this.left!=null) {			
			this.data.removeChild(this.left);
		}
		else if (this.right!=null) {
			this.data.removeChild(this.right);
		} 
	}

	swapWithParent() {
		var tmp;
		this.data=this.parent;
		tmp=this.parent;
		this.parent=this.data;
		this.data=tmp;
	}
}

module.exports = Node;
