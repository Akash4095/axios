class Node{
      constructor(value){

        this.value=value;
        this.left=null;
        this.right=null;

    }

}

class BST{

    constructor(value){
        this.root=new Node(value);
        this.count=1;

    }
    insert(value){
        count++;
        let newNode= new Node(value);
        
        const searchTree=(node)=>{
            if(value<node.value){
                if(!node.left){
                    node.left=newNode;
                }else{
                    searchTree(node.left)
                }

            }else if(value>node.value){
                if(!node.right){
                    node.right=newNode;
                }else{
                    searchTree(node.right)
                }
            }
        }
        searchTree(node.right)

    }
    min(){
        let currNode= this.root;
        while(currNode.left){
            currNode=currNode.left;
        }
        return currNode.val;
    }

    max(){
        let currNode= this.root;
        while(currNode.right){
            currNode=currNode.right;
        }
        return currNode.val;
    }
  
}


const bst = new BST(15);

bst.insert(3);
bst.insert(36);
bst.insert(2);
bst.insert(12);
bst.insert(28);
bst.insert(39);

bst.min();
bst.max();