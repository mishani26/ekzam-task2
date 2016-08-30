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
			node.parent = this; 
			
		}
		else if	(this.right==null) {
			this.right=node;
			node.parent = this; 
		}	
	}

	removeChild(node) {
		var i=0;
		this.parent=this.data;
		if (this.left==node) {
			i++;
			return this.left=null, node.parent=null;
		}
		else if	(this.right==node && i==0) {
			return this.right=null, node.parent=null;
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

		if(this.parent==null){
			return
		};
		
		if(this.parent.left == this){
			if(this.parent.right){
				this.parent.right.parent = this;
			};	
		}else if(this.parent.right == this){
			if(this.parent.left){
				this.parent.left.parent = this;
			};
		};
		if(this.parent.parent == null){

		}else if(this.parent.parent.left == this.parent){
			if(this.parent.parent){
				this.parent.parent.left = this;
			}
		}else if(this.parent.parent.right == this.parent){
			if(this.parent.parent){
				this.parent.parent.right = this;
			}
		};
		if(this.left){
			this.left.parent = this.parent;	
		}
		if(this.right){
			this.right.parent = this.parent;	
		}
		var TP = this.parent, TL = this.left, T = this, TR = this.right;
		var TPP = TP.parent, TPL = TP.left, TPR = TP.right;
		if(this.parent.left == this){
			this.left = TP;
			this.right = TPR;
		}else if(this.parent.right == this){
			this.right = TP;
			this.left = TPL;
		}
		this.parent.parent = T;
		this.parent.left = TL;
		this.parent.right = TR;
		this.parent = TPP;



	}
}

module.exports = Node;
